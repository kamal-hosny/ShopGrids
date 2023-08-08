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
  let root = document.querySelector(':root');
  let rootStyles =getComputedStyle(root);

  let blue1 = rootStyles.getPropertyValue('--main-color');
  let blue2 = rootStyles.getPropertyValue('--main-color-alt');
  let blue3 = rootStyles.getPropertyValue('--random-color');

  console.log('--main-color',)

  function green(){
    root.style.setProperty("--main-color", "--main-color-green");
  }
























// End colors
// Start Product
let cards =document.getElementById('cards');
console.log(cards)

let cardItemsData = [{
  id: 1,
  type: 'eCommerce',
  name: 'What information is needed for shipping?',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ' ,
  img:  'images/blog1.jpg' ,
},
{
  id: 2,
  type: 'Gaming',
  name: 'Interesting fact about gaming consoles',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ' ,
  img:  'images/blog2.jpg' ,
}
,{
  id: 3,
  type: 'Electronic',
  name: 'Electronics, instrumentation & control',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ' ,
  img:  'images/blog3.jpg' ,
}
,{
  id: 1,
  type: 'eCommerce',
  name: 'What information is needed for shipping?',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ' ,
  img:  'images/blog1.jpg' ,
},
{
  id: 2,
  type: 'Gaming',
  name: 'Interesting fact about gaming consoles',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ' ,
  img:  'images/blog2.jpg' ,
}
,{
  id: 3,
  type: 'Electronic',
  name: 'Electronics, instrumentation & control',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ' ,
  img:  'images/blog3.jpg' ,
}
];

let generateShop =() =>{
  return (cards.innerHTML)=cardItemsData
  .map((x)=>{
    let {id, type, name, info, img}= x;
    return ` 
    <div class="col-lg-6 col-md-12 col-12">
    <div class="product">
      <div class="image">
        <img src="${img}" alt="">
      </div>
      <div class="info">
        <h5>${type}</h5>
        <h3><a href="#">${name}</a></h3>
        <p>${info}</p>
      </div>
      <div class="info-btn">
        <button>Read More</button>
      </div>
    </div>
    </div>
        `  
  }
  ).join("")
}
generateShop()
// End Product

` 
<div class="col-lg-6 col-md-12 col-12">
<div class="product">
  <div class="image">
    <img src="/images/blog1.jpg" alt="">
  </div>
  <div class="info">
    <h5>eCommerce</h5>
    <h3><a href="#">What information is needed for shipping?</a></h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
  </div>
  <div class="info-btn">
    <button>Read More</button>
  </div>
</div>
</div>
    
    `
