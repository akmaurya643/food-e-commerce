let dropdown = document.getElementById("dropdown");
let dropdownList = document.getElementById("dropdown-list");
let addCard = document.getElementById("addCard");
let showCard = document.getElementById("showCard");
let closeCard = document.getElementById("closeCard");
let cardBox = document.getElementById("card-box");
let productDitals= document.getElementById("product-ditals");
let closepage = document.getElementById("closepage");
let cardItem = document.querySelectorAll(".card-item");


    
  

cardItem.forEach(function (item) {
    //  item.stopPropagation();
    item.addEventListener("click", function (e) {
        e.stopPropagation();
        productDitals.style.display = "flex";
        // console.log(e.target.parentNode);
    })
    closepage.addEventListener("click", function () {
        productDitals.style.display = "none";
    })

})




    dropdownList.addEventListener("mouseover", function () {
    // dropdown.style.display = "block";
    dropdown.style.top = "5rem";
})
    dropdownList.addEventListener("mouseout", function () {
    // dropdown.style.display = "block";
    dropdown.style.top = "-30rem";
})




    addCard.addEventListener("click", function () {
    showCard.style.display = "block";
})
closeCard.addEventListener("click", function () {
    showCard.style.display = "none";
})





// function product(){
//     let cardBox = document.getElementById("card-box");
//     cardBox.forEach((item, key) => {
//          let div = document.createElement("div")
//         div.addEventListener.add("item");

//         div.innerHTML = `

//                         <div class="card-item">
//                             <div class="card-item-img">
//                                 <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt="">
//                             </div>
//                             <div class="card-item-text">
//                                 <div class="food-name">
//                                     <h5>Chicken Curry</h5>
//                                     <p>Chicken Curry is a popular Indian dish made.</p>
//                                 </div>
//                                 <div class="price-box">

//                                     <div class="price">
//                                         <h5 class="old">₹100</h5>
//                                         <h5 class="new">₹100 <span>NEW USER OFFER</span></h5>
//                                     </div>

//                                     <div class="btn-add">
                                       
                                           
//                                             <button>ADD TO CART</button>
                                       

//                                     </div>
//                                 </div>
//                                 <div class="like">
//                                     <i class="ri-heart-line"></i>
//                                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
//                                 </div>
//                             </div>
//                         </div>`

//         cardBox.appendChild(div)
//          console.log(cardItemName);
//     })
   
    
// }
// product()

 


function demo(){
    
    let cardHtml = '';
    cardItemName.forEach((items, key) => {
        
        cardHtml += `

                        <div class="card-item" id="card${(key+1)}">
                            <div class="card-item-img">
                                <img src="${items.image}"
                                    alt="">
                            </div>
                            <div class="card-item-text">
                                <div class="food-name">
                                    <h5>${items.name}</h5>
                                    <p>${items.description}.</p>
                                </div>
                                <div class="price-box">

                                    <div class="price">
                                        <h5 class="old">${items.old_price}</h5>
                                        <h5 class="new">${items.new_price} <span>${items.user}</span></h5>
                                    </div>

                                    <div class="btn-add">
                                       
                                           
                                            <button onclick="addtocart(${items.id})">${items.btn}</button>
                                       

                                    </div>
                                </div>
                                <div class="like">
                                    <div class="like-box">
                                    <i class="ri-heart-line"></i>
                                    <p class="mb-0">${items.like_count}</p>
                                    </div>
                                    <div class="buy-count">
                                    <p class="mb-0">(${items.buy_count})+bought this week</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    })
    cardBox.innerHTML = cardHtml
    
}
demo()


function addtocart(id){
    
    let matchIdData = "";
    let cartData = localStorage.getItem('cart');
    cardItemName.forEach((items, key) => {
        if(items.id == id){
            matchIdData = items;
        }
    });
    let setData = [];
    if(cartData == null){
        setData.push(matchIdData);
        localStorage.setItem('cart', JSON.stringify(setData));
    }else{
        cartData = JSON.parse(localStorage.getItem('cart'));
        let itemExists = false;

        cartData.forEach((cartItem, index)=>{
            if(cartItem.id == id){
                itemExists = true;
            }
        });

        if (!itemExists) {
            cartData.push(matchIdData);
            localStorage.setItem('cart', JSON.stringify(cartData));
        }
    }
}   


showCartData();
function showCartData(){
    let = cartData = localStorage.getItem('cart');
    if(cartData!=null){
        cartData = JSON.parse(cartData);
        cartData.forEach((cartItem, index)=>{
            console.log(cartItem);
            
        });
    }
}




// =================== hero ====================

let heroSlider = document.getElementById("hero-slider")

function hero2() {
    let herohtml = "";
    heroBox.forEach((items, key) => {
        let active = "";
        if(key==0){
            active = "active";
        }
        herohtml += `
<div class="carousel-item ${active}" data-bs-interval="1500">
                        <div class="hero-image-box">
                            <img src="${items.image}"
                                class="d-block w-100" alt="...">
                        </div>
                    </div>
`
    })
    heroSlider.innerHTML = herohtml
}
hero2()














// +++++++++++++++++++ food button List +++++++++++++++++++++++++++++++
let buttonList = document.getElementById("button-list");
function btnList() {
    let btnHTML = "";
    btnListName2.forEach((items, key) => {
        btnHTML += `
        

         <li>
             <a href="${items.link}">
                <div class="li-img">
                                <img src="${items.image}" alt="">
                </div>
                <span>${items.name}</span>
             </a>
        </li>
        `
    })
    buttonList.innerHTML = btnHTML
}
btnList()