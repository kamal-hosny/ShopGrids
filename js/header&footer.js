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
  
  <!-- start load screen -->
  <div class="loader"></div>
  <!-- end load screen -->


    `
}

generateFooter()

/* Start load screen */
window.addEventListener("load", () => {
  let loader =document.querySelector(".loader");
  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

