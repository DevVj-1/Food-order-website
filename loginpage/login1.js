let createBtn=document.querySelector("#create");
let alreadyBtn=document.querySelector("#already");
let signupDiv=document.querySelector(".signup-div");
let signupForm=document.getElementById("signup-form");
let loginDiv=document.querySelector(".login-div");
let loginForm=document.getElementById("login-form");
let signinNav=document.querySelector(".signin-nav");
let profileNav=document.querySelector(".UserName");
let profileName=document.getElementById("Profile");
let logout=document.getElementById("logout");
let toast_body=document.querySelector(".toast-body");

// loginpage to signup page
document.querySelector("body").onload=()=>{
    console.log(profileNav);
    let data=JSON.parse(localStorage.getItem("loginUser")) || [];
    if(data.length==1){
        profileNav.style.display="block";
        signinNav.style.display="none";
        console.log(data);
        profileName.innerText=data[0].name.slice(0,7)+"..";
    }else{
        profileNav.style.display="none";
    }
 
    //last search address  when onload 
    let address=JSON.parse(localStorage.getItem("lastAddress"));
    var other=document.querySelector(".other");
    other.innerText=address.delivaryLocation;
    var town=document.getElementById("town");
    town.innerText=`${address.city},${address.state},${address.country}`;
    console.log(other,town);

    let recentSearch=JSON.parse(localStorage.getItem("recentSearch")) || [];
    displayRecentSearch(recentSearch);
}

createBtn.addEventListener("click",()=>{
    document.getElementById("mobile").value="";
    signupDiv.style.display="block";
    signupForm.style.display="block";
    loginDiv.style.display="none";
    loginForm.style.display="none";
});

// signup page to loginpage
alreadyBtn.addEventListener("click",()=>{
    document.querySelector(".mobile").value="";
    document.getElementById("email").value="";
    document.getElementById("name").value="";
    signupDiv.style.display="none";
    signupForm.style.display="none";
    loginDiv.style.display="block";
    loginForm.style.display="block";
});

// signup page submit
signupForm.onsubmit=(event)=>{
    event.preventDefault();

    let mobile=document.querySelector(".mobile").value;
    let email=document.getElementById("email").value;
    let name=document.getElementById("name").value;

    // Validate input fields
    if(mobile.length !== 10 || email === "" || name === ""){
        Alert("Please Enter Correct Details!", signupForm, "warning");
        return;
    }

    // Assume user does not exist
    let existingUser = false; 

    var obj = { mobile, name, email }; 
    fetch('http://localhost:3000/api/signup', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
    .then(response => response.json())
    .then(data => {
        Alert(data.message, signupForm, "success");
        if (data.message === 'User registered successfully!') {
            signupDiv.style.display="none";
            signupForm.style.display="none";
            loginDiv.style.display="block";
            loginForm.style.display="block";
        }
    })
    .catch(error => {
        Alert("Error during signup!", signupForm, "warning");
    });
}

// loginpage submit
loginForm.onsubmit=(event)=>{
    event.preventDefault();
    let mobile=document.getElementById("mobile").value;

    if(mobile.length !== 10){
        Alert("Please Enter Valid Mobile Number!", loginForm, "warning");
        return;
    }

    // Fetch user data from the backend API
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
    })
    .then(response => response.json())
    .then(user => {
        if (!user) {
            Alert("User Not Registered!", loginForm, "warning");
        } else {
            localStorage.setItem("loginUser", JSON.stringify([user])); // Store the logged-in user
            Alert("Congratulations! Login Successfully", loginForm, "success");
            profileNav.style.display="block";
            signinNav.style.display="none";
            profileName.innerText=user.name.slice(0,7)+"..";
            document.getElementById("mobile").value="";
        }
    })
    .catch(error => {
        Alert("Error during login!", loginForm, "warning");
    });
}

// logout
logout.onclick=()=>{
    localStorage.setItem("loginUser", JSON.stringify([]));
    signinNav.style.display="block";
    profileNav.style.display="none";
    Alert("Logout Successfully!", loginForm, "success");
}

// alert function
function Alert(word, btn, type){
    let toastBody=document.querySelector(".toast-body");
    toastBody.style.backgroundColor = type === "success" ? "#dff0d8" : "#f2dede";
    toast_body.innerText = word;
    btn.addEventListener('submit', () => {
        const toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
    });
}

// other functions remain unchanged...