// up
let span =document.querySelector('.up')
window.onscroll =() =>{
    // console.log(this.scrollY)
    if(this.scrollY >= 1000){
        span.classList.add('show')
    }else{
        span.classList.remove('show')
    }
}
span.addEventListener('click',function(){
  scroll({
      top: 0,
      behavior: "smooth"
}) 
  })

// end up
// Start menu-icon
let menuIcon =document.getElementById("menu-icon")
let Icon1 =document.getElementById("menu-icon1")
let Icon2 =document.getElementById("menu-icon2")
let Icon3 =document.getElementById("menu-icon3")
let menuIconUL= document.getElementById("menu-icon-ul")

menuIcon.addEventListener('click',function(){
  Icon1.classList.toggle('Icon1');
  Icon2.classList.toggle('Icon2');
  Icon3.classList.toggle('Icon3');
  menuIconUL.classList.toggle('menu-icon-ul');
});


// End menu-icon
// Start dark mod

let DarkMod = document.getElementById("dark-mod")

console.log(DarkMod)

function os(){
    DarkMod.innerHTML= '<i class="fa-solid fa-circle-half-stroke"></i>' ;
}
function light(){
    DarkMod.innerHTML= '<i class="fa-solid fa-sun"></i>' ;
}
function dark(){
    DarkMod.innerHTML= '<i class="fa-solid fa-moon"></i>' ;
}
function custom(){
    DarkMod.innerHTML= '<i class="fa-solid fa-gear"></i>' ;
}
// End dark mod
// Start colors

let themeButtons = document.querySelectorAll('.theme-buttons');








themeButtons.forEach(color =>{


    color.addEventListener('click',()=>{
      localStorage.setItem('data-color-alt',color.getAttribute('data-color-alt'));
        let dataColorAlt = localStorage.getItem('data-color-alt');
          document.querySelector(':root').style.setProperty('--main-color-alt', dataColorAlt);

        
    });
    color.addEventListener('click',()=>{
      localStorage.setItem('main-data-color',color.getAttribute('main-data-color'));
        let dataColorMain = localStorage.getItem('main-data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColorMain);
    });
});








// themeButtons.forEach(color =>{
//   color.addEventListener('click',()=>{
//       let dataColorAlt = color.getAttribute('data-color-alt');
//       document.querySelector(':root').style.setProperty('--main-color-alt', dataColorAlt);
//   });
//   color.addEventListener('click',()=>{
//       let dataColorMain = color.getAttribute('main-data-color');
//       document.querySelector(':root').style.setProperty('--main-color', dataColorMain);
//   });
// });


















// End colors
// Start Product










let cardItemsData =[{
  id: "a1" ,
  type: 'Watches',
  name: 'Xiaomi Mi Band 5',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bx-star'></i></li>` ,
  review: "4.5",
  offer:" ",
  price: 199.00,
  img:'images/Product1.webp'
},
{
  id: "a2" ,
  type: 'Speaker',
  name: 'Big Power Sound Speaker',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li> ` ,
  review: "4.5",
  offer:`<span class="offer">-25%</span>`,
  price: 275.00,
  img:'images/Product2.webp'
},
{
  id: "a3" ,
  type: 'Camera',
  name: 'WiFi Security Camera',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li> ` ,
  review: "4.5",
  offer:" ",
  price: 399.00,
  img:'images/Product3.webp'
},
{
  id: "a4" ,
  type: 'Phones',
  name: 'iphone 6x plus',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li> ` ,
  review: "4.5",
  offer:`<span class="offer" style="background: #0167f3;">New</span>`,
  price: 400.00,
  img:'images/Product4.webp'
},
{
  id: "a5" ,
  type: 'Headphones',
  name: 'Wireless Headphones',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li> ` ,
  review: "5.0",
  offer:" ",
  price: 350.00,
  img:'images/Product5.webp'
},
{
  id: "a6" ,
  type: 'Speaker',
  name: 'Mini Bluetooth Speaker',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bx-star'></i></li>`,
  review: "4.0",
  offer:" ",
  price: 70.00,
  img:'images/Product6.webp'
},
{
  id: "a7" ,
  type: 'Headphones',
  name: 'PX7 Wireless Headphones',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bx-star'></i></li>` ,
  review: "4.0",
  offer: `<span class="offer">-50%</span>`,
  price: 100.00,
  img:'images/Product7.webp'
},
{
  id: "a8" ,
  type: 'Laptop',
  name: 'Apple MacBook Air',
  stars: ` <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>
  <li><i class='bx bxs-star'></i></li>` ,
  review: "5.0",
  offer:" ",
  price: 899,
  img:'images/Product8.webp'
},
]








let cards =document.getElementById('cards');
console.log(cards)

let basket = JSON.parse(localStorage.getItem("data")) || [] ;


let generateShop = () =>{
    return (cards.innerHTML = cardItemsData
        .map((x)=>{
            let{id, type, name, stars, review, price, img ,offer} =x ;
            let search = basket.find(()=> x.id === id ) || [] ;
        return` 
        <div id=prodect-id-${id} class="col-lg-3 col-md-6 col-12  ">
        <div class="product">
          <div class="image">
            <img src=${img} alt="">
            <button onclick='increment(${id})'><i class="fa-solid fa-cart-shopping"></i> <span> Add To Cart</span></button>
            ${offer}
          </div>
          <div class="info">
            <h5>${type}</h5>
            <h4>${name}</h4>
            <div class="stars-gru">
              <ul class="stars">
              ${stars}
              </ul>
              <p>${review} Review(s)</p>
            </div>
            <h3>$${price}.00</h3>
            <div id="${id}" style="display:none ;" class="quantity">
            ${search.item === undefined ? 0 : search.item}
            </div>
          </div>
        </div>
      </div>
        `
    }).join(''));
};
// End Product
generateShop();


// +
let increment = (id) => {
  console.log(id)
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id) ;

  if(search === undefined){
      basket.push({
          id: selectedItem.id ,
          item: 1 ,
      });
  }
  else{
      search.item += 1;
  }
  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
// =
let update = (id) => {
  let search =basket.find((x)=> x.id === id);
// console.log(search.item);
document.getElementById(id).innerHTML = search.item ;
calculation()
};

let calculation = () =>{
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML= basket.map((x)=> x.item).reduce((x,y)=> x + y , 0);

}
calculation();


