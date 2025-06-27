let coffeeBox = document.getElementById("coffee-box");
let ChangeBtn = document.getElementById("boxChangeBtn");


const cardCoffeeName = {
    "coffee": [
        {
            "id": 1,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1486961053089-6c357c24ac33?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 2,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 3,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1520006635556-32d930402dc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            "old_price": "1000",
            "new_price": "399",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 4,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1713810466379-420efd57b168?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8",
            "old_price": "1990",
            "new_price": "1199",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 5,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1736813132520-8be4b9705dee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 6,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1444418185997-1145401101e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 7,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1713274789041-97ed68b0db22?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 8,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1736813133794-e01542c0b10d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 9,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1558220829-4694a46bb01f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 10,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1543256840-0709ad5d3726?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 11,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1500512296-fcd1ce147878?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 12,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1514508985285-52fa488e199a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 13,
            "image": "https://images.unsplash.com/photo-1514508985285-52fa488e199a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
            "name": "Chicken Curry",
            "old_price": "100",
            "price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },


    ],
    "pizza": [
        {
            "id": 1,
            "name": "Pizza",
            "image": "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fHww",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 2,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 3,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1520006635556-32d930402dc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            "old_price": "1000",
            "new_price": "399",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 4,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1713810466379-420efd57b168?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8",
            "old_price": "1990",
            "new_price": "1199",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 5,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1736813132520-8be4b9705dee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 6,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1444418185997-1145401101e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 7,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1713274789041-97ed68b0db22?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 8,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1736813133794-e01542c0b10d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 9,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1558220829-4694a46bb01f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 10,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1543256840-0709ad5d3726?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 11,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1500512296-fcd1ce147878?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 12,
            "name": "Chicken Curry",
            "image": "https://images.unsplash.com/photo-1514508985285-52fa488e199a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
            "old_price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },
        {
            "id": 13,
            "image": "https://images.unsplash.com/photo-1514508985285-52fa488e199a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
            "name": "Chicken Curry",
            "old_price": "100",
            "price": "100",
            "new_price": "100",
            "rating": "4.8/5",
            "user": "NEW USER",
            "like": "ri-heart-3-line",
            "description": "Chicken Curry is a popular Indian dish made.",
            "btn": "Buy Now",
            "buy_count": "12452",
            "like_count": "4/58"
        },


    ]
}
const boxChangeBtn = {
    "coffee": [
        {
            "id": 1,
            "name": "Cappuccino",
            "link": "https://www.google.com"
        },
        {
            "id": 2,
            "name": "Flat white",
            "link": "https://www.google.com"
        },
        {
            "id": 3,
            "name": "Latte",
            "link": "https://www.google.com"
        },
        {
            "id": 4,
            "name": "Mocha",
            "link": "https://www.google.com"
        },
        {
            "id": 5,
            "name": "Americano",
            "link": "https://www.google.com"
        },
        {
            "id": 6,
            "name": "Caffè macchiato",
            "link": "https://www.google.com"
        },
    ],
    "pizza": [
        {
            "id": 1,
            "name": "Cappuccino pizza",
            "link": "https://www.google.com"
        },
        {
            "id": 2,
            "name": "Flat white",
            "link": "https://www.google.com"
        },
        {
            "id": 3,
            "name": "Latte",
            "link": "https://www.google.com"
        },
        {
            "id": 4,
            "name": "Mocha",
            "link": "https://www.google.com"
        },
        {
            "id": 5,
            "name": "Americano",
            "link": "https://www.google.com"
        },
        {
            "id": 6,
            "name": "Caffè macchiato",
            "link": "https://www.google.com"
        },
    ]
}
const headingList = {
    "coffee":{
        "name":"Confirm Order Coffee",
        "short_description":"Your order has been placed successfully",
        "bg_img":""
    },
    "pizza":{
        "name":"Confirm Order Pizza",
        "short_description":"Your order has been placed successfully",
        "bg_video":"../video/coffee1.mp4"
    },
}
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('type'));
function btn() {
    let btnHTML = "";
    boxChangeBtn[urlParams.get('type')].forEach((items, key) => {
        btnHTML += `
        <li id="btn${(key + 1)}">
            <a href="${items.link}">${items.name}</a>
            </li>
        `
    })
    ChangeBtn.innerHTML = btnHTML
}
btn()
headingFun();
function headingFun() {
    let val = headingList[urlParams.get('type')];
    let bg = document.querySelector(".confirm");
    let bg_video = document.querySelector("#video");

    let ab = document.querySelector(".confirm-box-text");
    bg.style.backgroundImage = val.bg_img
bg_video.innerHTML = ` <source src="../${val.bg_img}" type="video/mp4">`

    ab.innerHTML = `<h1>${val.name}</h1><p>${val.short_description}</p>`
    
}
function cardCoffee() {
    let cardHTML = "";
    
    cardCoffeeName[urlParams.get('type')].forEach((items, key) => {
        cardHTML += `
        <div class="card-item" id="card${(key + 1)}">
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
                        <h5 class="old">₹ ${items.old_price}</h5>
                        <h5 class="new">₹ ${items.new_price} <span>${items.user}</span></h5>
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
    coffeeBox.innerHTML = cardHTML
}
cardCoffee()
// console.log(cardCoffee);




// const url = new URL(window.location.href);
// const searchParams = new URLSearchParams(window.location.href);
// console.log(searchParams.get('type'))
// searchParams.get('q'); // 'node'
// searchParams.get('page'); // '2'