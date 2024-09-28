// slider mes projets

nextSlide()

// Main Page Slider
function nextSlide(){
  
  const slider = document.querySelector('.slide-container');
  const sliderBtn = document.querySelector('.next-slide')
  
  sliderBtn.addEventListener('click', () =>{
    const items = document.querySelectorAll('.slide');
    slider.append(items[0])
  }, false)

}