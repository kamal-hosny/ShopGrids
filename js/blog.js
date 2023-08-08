

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
