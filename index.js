$(document).ready(function(){
document.addEventListener('mousemove', (e) =>{
    let mouseX = e.clientX
    let mouseY = e.clientY
    let width = window.innerWidth
    let height = window.innerHeight


    let leftBuffer = width * 0.1
    console.log(window.scrollX)

    let scrollPosX = window.scrollX
    let scrollPosY = window.scrollY

    if (leftBuffer < width / 2){
      if(mouseX <= leftBuffer){
        scrollPosX -=20
        window.scrollTo(scrollPosX ,scrollPosY )
      }
    }


  })
})
