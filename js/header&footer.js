let footer = document.getElementById("footer")
console.log(footer);
generateFooter = () =>{
    return footer.innerHTML =`
    
    <div class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12">
            <div class="image"><img src="images/white-logo.svg" alt=""></div>
          </div>
          <div class="col-lg-9 col-md-8 col-12 footer-top-r">
            <div class="info">
              <h5>Subscribe to our Newsletter</h5>
              <p>Get all the latest information, Sales and Offers.</p>
            </div>
            <div class="input-box">
              <form action="">
                <input type="text" placeholder="Email address here...">
                <input type="submit" value="Subscribe">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-middle">
      <div class="container">
        <div class="row">
          <!--  -->
          <div class="col-lg-3 col-md-6 col-12 mb-4">
            <h3>Get In Touch With Us</h3>
            <p class="num">Phone: +1 (900) 33 169 7720</p>
            <p class="monday">Monday-Friday: <span>9.00 am - 8.00 pm</span></p>
            <p class="saturday">Saturday: <span>10.00 am - 6.00 pm</span></p>
            <p class="support"><a href="#">support@shopgrids.com</a></p>
          </div>
          <!--  -->
          <!--  -->
          <div class="col-lg-3 col-md-6 col-12 my-4">
            <h3>Get In Touch With Us</h3>
            <div class="box-cont">
              <div class="box1">
                <div class="icon"><i class="fa-brands fa-apple"></i></div>
                <div class="info">
                  <p>Download on the</p>
                  <p>App Store</p>
                </div>
              </div>
              <div class="box1">
                <div class="icon"><i class="fa-brands fa-google-play"></i></div>
                <div class="info">
                  <p>Download on the</p>
                  <p>Google Play</p>
                </div>
              </div>
            </div>
            </div>
            <!--  -->
            <div class="col-lg-3 col-md-6 col-12 my-4">
              <h3>Information</h3>
              <ul class="footer-ul">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">FAQs Page</a></li>
              </ul>
            </div>
          <!--  -->
            <!--  -->
            <div class="col-lg-3 col-md-6 col-12 my-4">
              <h3>Shop Departments</h3>
              <ul class="footer-ul">
                <li><a href="#">Computers & Accessories</a></li>
                <li><a href="#">Smartphones & Tablets</a></li>
                <li><a href="#">TV, Video & Audio</a></li>
                <li><a href="#">Cameras, Photo & Video</a></li>
                <li><a href="#">Headphones</a></li>
              </ul>
            </div>
          <!--  -->
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="info-end-footer">
          <div class="row">
            <div class="col-lg-4 col-12 my-3">
              <div class="box1">
                <span>We Accept:</span>
                <div class="image">
                  <img src="images/card.webp" alt="">
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12 my-3">
              <div class="box2">
                <p>Designed and Developed by <span>GrayGrids</span></p>
              </div>
            </div>
            <div class="col-lg-4 col-12 my-3">
              <div class="box3">
                <span>Follow Us On:</span>
                <ul>
                  <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-google"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  



    `
}

generateFooter()




// Header
let header = document.querySelector('#header-change');
console.log("header")
generateHeader = () =>{
  return header.innerHTML =`

  <div class="header">
        <div class="topbar">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4 col-12">
                <div class="top-left">
                  <ul>
                    <li class="usd"> 
                      <select id="select-usd">
                        <option value="0">$ USD</option>
                        <option value="1">€ EURO</option>
                        <option value="2">$ CAD</option>
                        <option value="3">₹ INR</option>
                        <option value="4">¥ CNY</option>
                        <option value="5">৳ BDT</option>
                      </select>
                    </li>
                    <li class="enlish"> 
                      <select id="select-enlish">
                        <option value="0">English</option>
                        <option value="1">Español</option>
                        <option value="2">Filipino</option>
                        <option value="3">Français</option>
                        <option value="4">العربية</option>
                        <option value="5">हिन्दी</option>
                        <option value="6">বাংলা</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12 d-md-flex d-none justify-content-center">
                <div class="top">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-12">
                <div class="top-end">
                  <div class="user">
                    <i class="fa-regular fa-user"></i> <span>Hello</span>
                  </div>
                  <div class="login">
                    <ul>
                      <li><a href="login.html">Sign in</a></li>
                      <li><a href="register.html">Register</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div class="header-middle">
            <nav class="navbar">
              <div class="container">
                <a class="navbar-brand" href="#">
                <a href="index.html"><img src="images/logo.svg" alt="Bootstrap" width="30" height="24"></a>
                </a>
                <nav class="navbar d-none d-md-flex">
                  <div class="container-fluid">
                    <form class="d-flex " role="search">
                      <select  id="select1" class="select1 rounded-start">
                        <option selected>All</option>
                        <option value="1">option 01</option>
                        <option value="2">option 02</option>
                        <option value="3">option 03</option>
                        <option value="4">option 04</option>
                        <option value="5">option 05</option>
                      </select>
                      <input class=" search1 " type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-primary search search-icon" type="submit"><i class="fa-solid fa-magnifying-glass "></i></button>
                    </form>
                  </div>
                </nav>
                <div class="hotline d-none d-lg-flex">
                  <div class="icon"><i class="fa-solid fa-phone"></i></div>
                  <div class="info">
                    <p class="p1">Hotline:<p>
                    <p class="p2">(+100) 123 456 7890</p>
                  </div>
                </div>
                <div class="icons">
                        <!-- Start dark mod -->
                        <div class="dropdown">
                          <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span id="dark-mod"><i class=" fa-solid fa-circle-half-stroke"></i></span>
                          </button>
                          <ul class="dropdown-menu ul-dark">
                            <li><a class="dropdown-item" href="#" onclick="os()"> <span><i class="fa-solid fa-circle-half-stroke"></i></span> OS Default</a></li>
                            <li><a class="dropdown-item" href="#" onclick="light()"> <span><i class="fa-solid fa-sun"></i></span> Light</a></li>
                            <li><a class="dropdown-item" href="#" onclick="dark()"> <span><i class="fa-solid fa-moon"></i></span> Dark</a></li>
                            <li class="dark-custom"><a class="dropdown-item" href="#" onclick="custom()"> <span><i class="fa-solid fa-gear"></i></span> Custom</a>
                            <ul class="ul-dark-custom">
                              <li class="theme-buttons" main-data-color="#2196F3" data-color-alt=" #0167f3" style="background: #0167f3;"><span></span></li>
                              <li class="theme-buttons" main-data-color="#20958a" data-color-alt=" #009688" style="background: #009688;"><span></span></li>
                              <li class="theme-buttons" main-data-color="#ec6291" data-color-alt=" #e91e63" style="background: #e91e63;"><span></span></li>
                              <li class="theme-buttons" main-data-color="#ff764d" data-color-alt=" #ff5722" style="background: #ff5722;"><span></span></li>
                              <li class="theme-buttons" main-data-color="#8665c0" data-color-alt=" #673ab7" style="background: #673ab7;"><span></span></li>
                              <li class="theme-buttons" main-data-color="#7a6861" data-color-alt=" #795548" style="background: #795548;"><span></span></li>
                            </ul>
                            </li>
                          </ul>
                        </div>
                        <!-- End dark mod -->
                  <div class="icon0 d-md-none">
                    <i class="fa-solid fa-magnifying-glass "></i>
                  </div>
                  <div class="icon1">
                    <i class="fa-solid fa-heart"></i>
                  </div>
                  <div class="icon2">
                    <span id="cartAmount" class="icon2-span">2</span>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="min-cart container">
                      <div class="header-cart">
                        <p class="p1">2 Items</p>
                        <a href="#"><p class="p2">View Card</p></a>
                      </div>
                      <span class="line"></span>
                      <!-- 1 -->
                      <div class="canter-cart">
                        <div class="image">
                          <img src="images/watch.webp" alt="">
                        </div>
                        <div class="info">
                          <h4>Apple Watch</h4>
                          <h5>Series 6</h5>
                          <p>1x-$99.00</p>
                        </div>
                        <div class="error">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                      </div>
                      <!-- 1 -->
                      <span class="line1"></span>
                      <!-- 2 -->
                      <div class="canter-cart">
                        <div class="image">
                          <img src="images/camera.webp" alt="">
                        </div>
                        <div class="info">
                          <h4>Wi-Fi Smart</h4>
                          <h5>Camera</h5>
                          <p>1x-$35.00</p>
                        </div>
                        <div class="error">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                      </div>
                      <!-- 2 -->
                      <span class="line2"></span>
                      <div class="footer-cart">
                        <p class="p1">Total</p>
                        <p class="p2">$134.00</p>
                      </div>
                      <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Check out</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <!--  -->
        <div class="header2">
          <div class="container">
            <div class="row align-item-center">
              <div class="col-lg-8 col-md-6 col-6 d-flex .flex-row">
                <div class="nav0 my-4">
                  <div class="nav-contant1">
                    <div class="dropdown d-none d-lg-block categorie">
                      <button class="btn  dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class='bx bx-menu '></i> All Categories
                      </button>
                      <span class="line d-none d-lg-block"></span>
                      <ul class="dropdown-menu">
                        <li class="li-ele" ><a class="dropdown-item" href="#">Electronics <i class="fa-solid fa-arrow-right"></i></a>
                        <ul class="ul-ele">
                          <li><a href="#">Digital Cameras</a></li>
                          <li><a href="#">Camcorders</a></li>
                          <li><a href="#">Camera Drones</a></li>
                          <li><a href="#">Smart Watches</a></li>
                          <li><a href="#">Headphones</a></li>
                          <li><a href="#">MP3 Players</a></li>
                          <li><a href="#">Microphones</a></li>
                          <li><a href="#">Chargrs</a></li>
                          <li><a href="#">Batteries</a></li>
                          <li><a href="#">Cables & Adapters</a></li>
                        </ul>
                        </li>
                        <li><a class="dropdown-item" href="#">Accessories</a></li>
                        <li><a class="dropdown-item" href="#">Televisions</a></li>
                        <li><a class="dropdown-item" href="#">Best Selling</a></li>
                        <li><a class="dropdown-item" href="#">Top 100 Offer</a></li>
                        <li><a class="dropdown-item" href="#">Sunglass</a></li>
                        <li><a class="dropdown-item" href="#">Watch</a></li>
                        <li><a class="dropdown-item" href="#">men's project</a></li>
                        <li><a class="dropdown-item" href="#">Home Audio & Theater</a></li>
                        <li><a class="dropdown-item" href="#">Computers & Tables</a></li>
                        <li><a class="dropdown-item" href="#">Video Games</a></li>
                        <li><a class="dropdown-item" href="#">Home Appliances</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="nav1 my-4 ">
                  <div class="container d-none d-lg-block">
                    <ul class="nav1-ul">
                      <li><a href="#" class="active">Home</a></li>
                      <li><div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Pages
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="about-us.html">About Us</a></li>
                          <li><a class="dropdown-item" href="FAQ.html">Faq</a></li>
                          <li><a class="dropdown-item" href="login.html">Login</a></li>
                          <li><a class="dropdown-item" href="register.html">Register</a></li>
                          <li><a class="dropdown-item" href="mail-success.html">Mail Success</a></li>
                          <li><a class="dropdown-item" href="404-page.html">404 Error</a></li>
                        </ul>
                      </div></li>
                      <li><div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Shop 
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="shop-grid.html">Shop</a></li>
                          <li><a class="dropdown-item" href="#">Shop List</a></li>
                          <li><a class="dropdown-item" href="single-product.html">Shop Single</a></li>
                          <li><a class="dropdown-item" href="Cart.html">Cart</a></li>
                          <li><a class="dropdown-item" href="#">Checkout</a></li>
                        </ul>
                      </div></li>
                      <li><div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Blog 
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a class="dropdown-item" href="blog.html">Blog Grid Sidebar</a></li>
                          <li><a class="dropdown-item" href="blog.html">Blog Single</a></li>
                          <li><a class="dropdown-item" href="blog.html">Blog Single Sibebar</a></li>
                        </ul>
                      </div></li>
                      <li><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                <div class="nav2 my-4">
                  <div class="container d-lg-none">
                    <div class="links">
                      <div class="menu-icon" id="menu-icon">
                        <span id="menu-icon1"></span>
                        <span id="menu-icon2"></span>
                        <span id="menu-icon3"></span>
                      </div>
                      <ul id="menu-icon-ul">
                        <li><a href="index.html"><span class="active">Home</span></a></li>
                        <!-- 1 -->
                        <li class="menu-icon-ul-h-1"><a href="#" class="menu-icon-ul-p-1"><span >Pages   
                          <i class="fa-solid fa-chevron-down"></i>
                          <ul class="menu-icon-ul-c-1">
                          <li><a href="about-us.html">About Us</a></li>
                          <li><a href="FAQ.html">Faq</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="mail-success.html">Mali Success</a></li>
                          <li><a href="404-page.html">404 Error</a></li>
                          </ul>
                        </span>
                        </a>
                      </li>
                      <!-- 2 -->
                        <li class="menu-icon-ul-h-2"><a href="#" class="menu-icon-ul-p-2"><span >Shop   
                          <i class="fa-solid fa-chevron-down"></i>
                          <ul class="menu-icon-ul-c-2">
                          <li><a href="shop-grid.html">Shop Grid</a></li>
                          <li><a href="#">Shop List</a></li>
                          <li><a href="single-product.html">Shop Single</a></li>
                          <li><a href="Cart.html">Cart</a></li>
                          <li><a href="#">Checkout</a></li>
                          </ul>
                        </span>
                        </a>
                      </li>
                          <!-- 3 -->
                          <li class="menu-icon-ul-h-3"><a href="#" class="menu-icon-ul-p-3"><span >Blog   
                            <i class="fa-solid fa-chevron-down"></i>
                            <ul class="menu-icon-ul-c-3">
                            <li><a href="blog.html">Blog Grid Sidbar</a></li>
                            <li><a href="blog.html">Blog Single</a></li>
                            <li><a href="blog.html">Blog Single Sidebar</a></li>
                            </ul>
                          </span>
                          </a>
                      </li>
                        <li><a href="contact-us.html"><span>Contact</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-6">
                <div class="nav-sol justify-content-end ">
                  <p class="d-none d-lg-block">Follow Us:</p>
                  <ul>
                    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-skype"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  `
};

generateHeader();



// Start menu-icon


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