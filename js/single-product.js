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



// End menu-icon
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
// Start img
function chnageToSourceOne() {
  document.getElementById("example_img_1").src="images/Single Product-1.webp";
}
function chnageToSourceTwo() {
  document.getElementById("example_img_1").src="images/Single Product-2.webp";
}
function chnageToSourceThree() {
  document.getElementById("example_img_1").src="images/Single Product-3.webp";
}
function chnageToSourcefour() {
  document.getElementById("example_img_1").src="images/Single Product-4.webp";
}
function chnageToSourcefive() {
  document.getElementById("example_img_1").src="images/Single Product-5.webp";
}

// End img

