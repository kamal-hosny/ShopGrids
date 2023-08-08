
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








let total = document.getElementById('total');
let shoppingCart = document.getElementById('shopping-cart');
console.log(shoppingCart)

let basket = JSON.parse(localStorage.getItem("data")) || [] ;

let calculation = () =>{
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML= basket.map((x)=> x.item).reduce((x,y)=> x + y , 0);

}
calculation();

let generateCartItems =() =>{

      return shoppingCart.innerHTML = basket.map((x)=>{
          let {id,item} = x
          let search = shopItemData.find((y)=> y.id === id) || []
          let {img, name, price, type} =search
          return`
          <div class="row">
          <div class="col-lg-1 col-md-1 col-12"><img src=${img} alt=""></div>
        <div class="col-lg-4 col-md-3 col-12">
          <h5>${name}/h5>
          <p>Type: <span>${type}</span></p>
          <p>Color: <span>Black</span></p>
        </div>
        <div class="col-lg-2 col-md-2 col-12">
          <div class="count-input">
          <div class="buttons">
          <i  onclick="decrement(${id})" class="fa-solid fa-minus"></i>
          <div id=${id}>${item}</div>
          <i  onclick="increment(${id})" class="fa-solid fa-plus"></i>
      </div>
          </div>
        </div>
        <div  id="total" class="col-lg-2 col-md-2 col-12"><span>$${item * search.price} </span></div>
        <div class="col-lg-2 col-md-2 col-12"><span>$${price}</span></div>
        <div class="col-lg-1 col-md-2 col-12"><i onclick="removeItem(${id})" class="fa-solid fa-x"></i></div>
        </div>
          `
      }).join("");
  }


generateCartItems();

// +
let increment = (id) => {

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
  // console.log(basket);
  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
// -
let decrement = (id) => {
  
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id) ;

  if(search === undefined) return ;
  else if(search.item === 0){
      return
  }
  else{
      search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x)=>x.item !== 0)
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};
// =
let update = (id) => {
  let search =basket.find((x)=> x.id === id);
// console.log(search.item);
document.getElementById(id).innerHTML = search.item ;
calculation();
TotalAmout();
};

let removeItem =(id)=>{
  let selectedItem = id
  // console.log(selectedItem.i);
  basket = basket.filter((x) => x.id  !== selectedItem.id);
  generateCartItems();
  TotalAmout();
  localStorage.setItem("data", JSON.stringify(basket));
}
let TotalAmout = () => {
  if(basket.length !== 0 ){
      let amount = basket.map((x)=>{
          let{ item, id } = x;
          let search = shopItemData.find((y)=> y.id === id) || [];
          return item * search.price;
      }).reduce((x,y)=> x+y, 0)
      // console.log(amount)
      total.innerHTML =`
      <span>$${amount}</span>
      `
  }else return;

}
TotalAmout()