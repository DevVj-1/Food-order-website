
//  let resto ={"name":"Royal Restorant",
//  "type":"India,Vegiterian,",
//  "time":"35min",
//  }
//  localStorage.setItem("selected-resto",JSON.stringify(resto));

///////////////////Display Restaurant Name///////////////////////////
let favRest = JSON.parse(localStorage.getItem("selected-resto")) || [];
function DisplayResto(){
  
 let Restaurant = document.getElementsByClassName("RestName");
 for(let i=0; i<Restaurant.length; i++){
   Restaurant[i].innerText=favRest.name;
 }
 document.getElementById("type").textContent=favRest.type;
 document.getElementById("time").textContent="Deliver in "+favRest.time+" min";
  }
  DisplayResto();
  /////////////////////////end////////////////////////////////////


////////////////////Toggle Like function/////////////////////////////
let array=JSON.parse(localStorage.getItem("FavRest")) || [];
function likefunc(x) {
  array.push(favRest)
    x.classList.toggle("fa-heart-o");
    localStorage.setItem("FavRest",JSON.stringify(array));
    
  };
 /////////////////////////End///////////////////////////////////////////// 



///////////////////Sticky Like Div/////////////////////////////
window.onscroll = function() {myFunction()};

let navbar = document.getElementById("likeDiv");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
////////////////////////End//////////////////////////////////////////

/////////////////////Veg Toggle/////////////////////////////////
let toggle  = document.querySelector('.switch input');
toggle.onclick = function(){
  if(toggle.checked){
        let FilteredVeg =  FoodList.filter(function(elem){
          return elem.Veg;
        })
        DisplayItems(FilteredVeg);
        let btn =document.getElementsByClassName("countmainDiv");
          for(let i=0; i<btn.length; i++){
          btn[i].style.display = "none";
          }
  }
  else{
    DisplayItems(FoodList);
    let btn =document.getElementsByClassName("countmainDiv");
          for(let i=0; i<btn.length; i++){
          btn[i].style.display = "none";
          }
  }
}
///////////////////////////End////////////////////////////////////

/////////////////////Foood Item Array////////////////////////////////
var FoodList=[{
  "id": 1,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI5WLVNIUJonfLEpBwmkcAphb1nzL_KI01w&s",
  "Item": "Lotus Root",
  "Price": 259,
  "Details": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}, {
  "id": 2,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbESWn9CYNGq8ljrciiTsMs9bljNhHNm3xSDMTyrMZRQedVVXNQi-XTYIxb8CUh2usaBYlDc9jWf8g0-HmZ9SBqsySkhPjBiDfK4ybT6c-",
  "Item": "Marsala - Sperone, Fine, D.o.c.",
  "Price": 130,
  "Details": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
}, {
  "id": 3,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.pexels.com/photos/15264025/pexels-photo-15264025/free-photo-of-a-meal-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Cutlet - Side Ribs",
  "Price": 250,
  "Details": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}, {
  "id": 4,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/31199978/pexels-photo-31199978/free-photo-of-japanese-matcha-cake-and-tea-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Lambcasing",
  "Price": 160,
  "Details": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "id": 5,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Bread - Bistro Sour",
  "Price": 142,
  "Details": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
  "id": 6,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/6152157/pexels-photo-6152157.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Nut - Chestnuts, Whole",
  "Price": 242,
  "Details": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "id": 7,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Coffee Caramel Biscotti",
  "Price": 308,
  "Details": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "id": 8,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Lettuce - Green Leaf",
  "Price": 210,
  "Details": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
  "id": 9,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/25745487/pexels-photo-25745487/free-photo-of-a-bottle-of-wine-standing-next-to-a-cutting-board-with-snacks.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Oil - Truffle, White",
  "Price": 195,
  "Details": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  "id": 10,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Ice Cream - Strawberry",
  "Price": 345,
  "Details": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "id": 11,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.pexels.com/photos/27953852/pexels-photo-27953852/free-photo-of-top-view-of-chicken-meat.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Chicken - Ham Hocks - Smoked",
  "Price": 202,
  "Details": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
  "id": 12,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1603596311044-f19158b61f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnV0dGVyJTIwcG9kfGVufDB8fDB8fHww",
  "Item": "Butter - Pod",
  "Price": 167,
  "Details": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
}, {
  "id": 13,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://plus.unsplash.com/premium_photo-1674852175694-008fc8f96d23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2luZXxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Wine - Rosso Del Veronese Igt",
  "Price": 178,
  "Details": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
}, {
  "id": 14,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1485814439394-ca57872604ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRvbWF0b2VzJTIwJTIwJTIwUGx1bSUyQyUyMENhbm5lZHxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Tomatoes - Plum, Canned",
  "Price": 199,
  "Details": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}, {
  "id": 15,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://plus.unsplash.com/premium_photo-1713840321295-f01ca4931735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  "Item": "Icecream Bar - Del Monte",
  "Price": 245,
  "Details": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
}, {
  "id": 16,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.unsplash.com/photo-1600980740347-53ce3f6f12c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmlnc3xlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Figs",
  "Price": 231,
  "Details": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "id": 17,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://plus.unsplash.com/premium_photo-1691939610797-aba18030c15f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2hlZXNlfGVufDB8fDB8fHww",
  "Item": "Cheese - St. Andre",
  "Price": 118,
  "Details": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "id": 18,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1529566260205-50597c058463?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  "Item": "Sauce - Chili",
  "Price": 279,
  "Details": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "id": 19,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZXJ8ZW58MHx8MHx8fDA%3D",
  "Item": "Beer - Sleemans Honey Brown",
  "Price": 230,
  "Details": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
}, {
  "id": 20,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://plus.unsplash.com/premium_photo-1710705215863-83ef5645997e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXV0dG9ufGVufDB8fDB8fHww",
  "Item": "Mutton - Ham Hocks - Smoked",
  "Price": 265,
  "Details": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
}, {
  "id": 21,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.unsplash.com/photo-1690983330536-3b0089d07cf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJlZWYlMjAlMjAlMjBSb3VsYWRpbiUyQyUyMFNsaWNlZHxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Beef - Rouladin, Sliced",
  "Price": 149,
  "Details": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "id": 22,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.unsplash.com/photo-1625944228741-cf30983ecb91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VmVhbHxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Veal - Provimi Inside",
  "Price": 325,
  "Details": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
}, {
  "id": 23,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJyZWFkfGVufDB8fDB8fHww",
  "Item": "Bread - White, Sliced",
  "Price": 154,
  "Details": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
  "id": 24,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJlZWZ8ZW58MHx8MHx8fDA%3D",
  "Item": "Beef - Tenderloin",
  "Price": 102,
  "Details": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
}, {
  "id": 25,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://plus.unsplash.com/premium_photo-1694884742441-83d21bc643c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENpbm5hbW9uJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D",
  "Item": "Cinnamon Rolls",
  "Price": 265,
  "Details": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
}, {
  "id": 26,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1630009939650-3e4210bbf10a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2hhbGxvdHN8ZW58MHx8MHx8fDA%3D",
  "Item": "Shallots",
  "Price": 174,
  "Details": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
  "id": 27,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1599394922679-1214f9ee16e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE11ZmZpbnxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Muffin Orange Individual",
  "Price": 267,
  "Details": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}, {
  "id": 28,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.unsplash.com/photo-1569701239632-ed5c8d863753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGx1bXN8ZW58MHx8MHx8fDA%3D",
  "Item": "Plums - Red",
  "Price": 101,
  "Details": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "id": 29,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JlbmdlJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "C - Plus, Orange",
  "Price": 146,
  "Details": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}, {
  "id": 30,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.unsplash.com/photo-1503623758111-863eb2abd7a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFR1cm5pcHxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Turnip - White",
  "Price": 175,
  "Details": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
}, {
  "id": 31,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvdWdoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
  "Item": "Orange Roughy 6/8 Oz",
  "Price": 127,
  "Details": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}, {
  "id": 32,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Stock - Veal, Brown",
  "Price": 124,
  "Details": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "id": 33,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://plus.unsplash.com/premium_photo-1674498271296-5144c596b43c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
  "Item": "Roe - White Fish",
  "Price": 242,
  "Details": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
  "id": 34,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://plus.unsplash.com/premium_photo-1689344314069-b60bf06d564c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN0cmF3YmVycmllc3xlbnwwfHwwfHx8MA%3D%3D",
  "Item": "Strawberries",
  "Price": 303,
  "Details": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
  "id": 35,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://plus.unsplash.com/premium_photo-1693221705404-2cfdac3159ca?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2F1c2FnZSUyMENhc2luZ3xlbnwwfHwwfHx8MA%3D%3D",
  "Item": "mutton / Sausage Casing - Mutton",
  "Price": 111,
  "Details": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
}, {
  "id": 36,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://media.istockphoto.com/id/1322276338/photo/recipe-of-sweetbread-and-lamb-kidney-with-cocoa-leek-whistles-with-almonds-and-oranges.webp?a=1&b=1&s=612x612&w=0&k=20&c=kZ_GXi2xh1oDguwDmDbCKDBk6zpiYyWOho_iCMIWHX4=",
  "Item": "Yukon Jack",
  "Price": 301,
  "Details": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "id": 37,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/3490355/pexels-photo-3490355.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Wine - White, Cooking",
  "Price": 253,
  "Details": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
}, {
  "id": 38,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/4254033/pexels-photo-4254033.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Pail With Metal Handle 16l White",
  "Price": 216,
  "Details": "Nulla ut erat id mauris vulputate elementum."
}, {
  "id": 39,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/8697541/pexels-photo-8697541.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Longos - Grilled Salmon With Bbq",
  "Price": 308,
  "Details": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
}, {
  "id": 40,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.pexels.com/photos/7613558/pexels-photo-7613558.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Tortillas - Flour, 8",
  "Price": 239,
  "Details": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
}, {
  "id": 41,
  "Qty":1,
  "TypeIcon": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ekinyniep2khq6cpnp4m",
  "Veg": false,
  "Image": "https://images.pexels.com/photos/31261495/pexels-photo-31261495/free-photo-of-delicious-spaghetti-dish-with-colorful-backdrop.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Canadian Emmenthal",
  "Price": 209,
  "Details": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "id": 42,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/19396434/pexels-photo-19396434/free-photo-of-cranberry-jam-and-a-slices-of-wholemeal-bread.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Pate - Cognac",
  "Price": 301,
  "Details": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo."
}, {
  "id": 43,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/3465380/pexels-photo-3465380.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Chocolate Bar - Reese Pieces",
  "Price": 108,
  "Details": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
}, {
  "id": 44,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/7376791/pexels-photo-7376791.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Water - Tonic",
  "Price": 218,
  "Details": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
  "id": 45,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/14122642/pexels-photo-14122642.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Bread - White Epi Baguette",
  "Price": 179,
  "Details": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
  "id": 46,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.pexels.com/photos/31249773/pexels-photo-31249773/free-photo-of-delicious-outdoor-bbq-in-sana-a-yemen.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Dikon",
  "Price": 190,
  "Details": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
}, {
  "id": 47,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/726001/pexels-photo-726001.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Spice - Greek 1 Step",
  "Price": 305,
  "Details": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
  "id": 48,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/6546437/pexels-photo-6546437.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Cumin - Ground",
  "Price": 343,
  "Details": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "id": 49,
  "Qty":1,
  "TypeIcon": "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
  "Veg": true,
  "Image": "https://images.pexels.com/photos/31235428/pexels-photo-31235428/free-photo-of-fresh-burrata-salad-with-heirloom-tomatoes.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Cheese - Asiago",
  "Price": 235,
  "Details": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
}, {
  "id": 50,
  "Qty":1,
  "TypeIcon": "https://openclipart.org/image/800px/304247",
  "Veg": false,
  "Image": "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600",
  "Item": "Wine - Saint - Bris 2002, Sauv",
  "Price": 209,
  "Details": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}
]
//////////////////////////End - Food-Item Array//////////////////////
let mainItemContainer =document.getElementById("mainItemContainer")

DisplayItems(FoodList);
////////////////// Display Function //////////////////////////////////
function DisplayItems(FoodList){
mainItemContainer.innerText = "";
FoodList.map(function(elem,index){

  let itemCard = document.createElement("div");
  itemCard.setAttribute("class","ItemContainer");

  let DetailDiv = document.createElement("div");
  DetailDiv.setAttribute("class","item-detailDiv");

  let Icon = document.createElement("img");
  Icon.setAttribute("class","vegIcon");
  Icon.src=elem.TypeIcon;
  let Name = document.createElement("h2");
Name.textContent=elem.Item;
  let Price = document.createElement("h3");
  Price.textContent="₹ "+elem.Price;
  let foodDetails = document.createElement("p");
  
foodDetails.textContent=elem.Details;
foodDetails.setAttribute("class","Foodpara");
  let imgDiv = document.createElement("div");

  let Image = document.createElement("img");
  Image.setAttribute("class","itemImg");
  Image.src=elem.Image
 
  let AddButton = document.createElement("button");
  AddButton.setAttribute("class", "xyz");
  AddButton.textContent="ADD";
  AddButton.addEventListener("click",function(){AddtoCart(elem.id,index)});
/////////////Count/////////////////////
  let countmaindiv = document.createElement("div");
  countmaindiv.setAttribute("class","countmainDiv");
  let negDiv = document.createElement("div");
  negDiv.setAttribute("class", "negDiv");
  negDiv.innerText="-";
  negDiv.addEventListener("click", function(){decrement(elem.id,index)});
  let countDiv = document.createElement("div");
  countDiv.setAttribute("class","countDiv");

  let countdigit= document.createElement("p");
  countdigit.setAttribute("class","countdigit");

  countdigit.innerText="0";
  countDiv.append(countdigit);
  let posDiv = document.createElement("div");
  posDiv.setAttribute("class","posDiv");
  posDiv.innerText="+";
  posDiv.addEventListener("click",function(){increment(elem.id,index)});

  countmaindiv.append(negDiv,countDiv,posDiv)

///////////////////////////////////////

 
  DetailDiv.append(Icon,Name,Price,foodDetails);
  imgDiv.append(Image,AddButton,countmaindiv);
  itemCard.append(DetailDiv,imgDiv,);
  mainItemContainer.append(itemCard);

})
}

////////////////////////End/////////////////////////////////////

let btn =document.getElementsByClassName("countmainDiv");
for(let i=0; i<btn.length; i++){
  btn[i].style.display = "none";
}



function AddtoCart(x,index){
  let cartArr = JSON.parse(localStorage.getItem("CartItems"))||[];
  let query= document.querySelectorAll(".countdigit");
  query[index].textContent=1;
let Addbtn=document.getElementsByClassName("xyz");
Addbtn[index].style.display = "none";
let countbtn =document.getElementsByClassName("countmainDiv");
countbtn[index].style.display="flex";
let cartProduct = FoodList.filter(function(elem){
  if(elem.id==x){
    return true;
  }
})
cartArr.push (cartProduct[0]);
nOfItems(cartArr);
localStorage.setItem("CartItems" ,JSON.stringify(cartArr));
DisplayCart();
}


/////// increment function////////
function increment(elemId,index) {
  let cartArr1 = JSON.parse(localStorage.getItem("CartItems"))||[]
  console.log(cartArr1);

let NewCartArr=cartArr1.map(TargetCart);
function TargetCart(item){
  if(item.id==elemId){ 
    item.Qty++;
    return item;
  }
else{
return item;
}
}
console.log(NewCartArr);
nOfItems(NewCartArr);
 localStorage.setItem("CartItems" ,JSON.stringify(NewCartArr));

  let query= document.querySelectorAll(".countdigit");
  var data=Number(query[index].innerHTML);
    data = data + 1;
    query[index].innerText=data;
    DisplayCart();
}
///////// decrement function///////
function decrement(elemId,index) {
  let cartArr1 = JSON.parse(localStorage.getItem("CartItems"))||[]
  console.log(elemId);

let NewCartArr=cartArr1.map(TargetCart);
function TargetCart(item){
  if(item.id==elemId){ 

  if(item.Qty==0){
    
    return item;
  }
  else{ 
  item.Qty--;
  return item
}
}
else{
return item
}
}
let NewCartArr1=NewCartArr.filter(function(element){
if(element.id==elemId && element.Qty==0){
   return false;
  }

else{
  return true;
}
})
console.log(NewCartArr1);
nOfItems(NewCartArr1);
 localStorage.setItem("CartItems" ,JSON.stringify(NewCartArr1));
  let query1= document.querySelectorAll(".countdigit");
  var data=Number(query1[index].innerHTML);
    data = data - 1;
    if(data<1){
      let btn =document.getElementsByClassName("countmainDiv");
      btn[index].style.display="none";
      Addbtn=document.getElementsByClassName("xyz");
      Addbtn[index].style.display="block";
    }
    console.log(data);
     let query= document.querySelectorAll(".countdigit");
     query[index].innerText=data;
     DisplayCart();
}
////////////////////NoOFitems Display/////////////////
let cartArrX = JSON.parse(localStorage.getItem("CartItems"))||[];
nOfItems(cartArrX);


function nOfItems(CartData){
let sum=0;
for(let i=0; i<CartData.length; i++){
  sum = sum+(CartData[i].Qty * CartData[i].Price);
}
   document.getElementById("noOfItems").innerText=CartData.length;
   document.getElementById("Total").innerText=sum;
}
let x=document.querySelector(".fixed");
x.style.display="none";

function DisplayCart(){

if(document.getElementById("noOfItems").innerText>0){
  x.style.display="flex";
}
else{
  x.style.display="none";
}
}





  