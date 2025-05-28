// function zoomElement(clickedImage) {
//   document.querySelectorAll(".ssgithub").forEach(el => el.classList.remove("active"));
//   clickedImage.classList.add("active");

//   if (!isActive) {
//     clickedImage.classList.add("active");
//   }
// }

function zoomElement(clickedImage) {
  let isActive = clickedImage.classList.contains("active");
  document.querySelectorAll(".ssgithub").forEach(el => el.classList.remove("active"));
  
  if (!isActive) {
    clickedImage.classList.add("active");
  }
}