loadDiv =document.querySelector("#loader")

generateLoader = () => {
    return loadDiv.innerHTML =  `
    <div class="loader"></div>
    `
}

generateLoader()













/* Start load screen */
window.addEventListener("load", () => {
    let loader =document.querySelector(".loader");
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });