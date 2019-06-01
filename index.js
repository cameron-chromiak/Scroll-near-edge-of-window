$(document).ready(function(){
// document.addEventListener('mousemove', (e) =>{
    // let {clientX} = e
    // let {clientY} = e
    let width = window.innerWidth
    let height = window.innerHeight
//
//
//     //area where mouse event will be trugered. 10% border around edge
//     let leftBuffer = width * 0.1
//     let rightBuffer = width - width * 0.1
//     let topBuffer = height * 0.1
//     let bottomBuffer = height - height * 0.1
//
//
//     //chnage += -= to 20 to change speed.
//     let scrollPosX = window.scrollX
//     let scrollPosY = window.scrollY
//
//       if(clientX <= leftBuffer){
//         scrollPosX -=width
//         window.scrollTo(scrollPosX ,scrollPosY )
//       }
//       if(clientX >= rightBuffer){
//         scrollPosX +=width
//         window.scrollTo(scrollPosX ,scrollPosY )
//     }
//       if(clientY <= topBuffer){
//         scrollPosY -= height
//         window.scrollTo(scrollPosX ,scrollPosY )
//       }
//       if(clientY >= bottomBuffer){
//         scrollPosY += height
//         window.scrollTo(scrollPosX ,scrollPosY )
//     }
//   })
//

//
//
  let topLeft = document.querySelector('#top-left')
  let topRight = document.querySelector('#top-right')
  let bottomLeft = document.querySelector('#bottom-left')
  let bottomRight = document.querySelector('#bottom-right')
  let sections = document.querySelectorAll('.section')
  let mainBtn  = document.querySelector('#main-btn')
  let container  = document.querySelector('#container')
//
//
//   mainBtn.addEventListener('click', function(){
//     toggleResize()
//   })
//
//   function toggleResize(){
//     sections.forEach( section => section.classList.toggle('section-shrink'))
//     container.classList.toggle('container-sm')
//   }
//
//
//

  let isMouseClicked = false;
  let mouseXStart;
  let mouseYStart;

  container.addEventListener('mousedown',function(e){
    isMouseClicked = true
    mouseXStart = e.pageX
    console.log(isMouseClicked)
  })
  container.addEventListener('mouseup',function(e){ // TODO: Or mouse leave window
    isMouseClicked = false
    console.log(isMouseClicked)
  })


    document.addEventListener('mousemove', function(e){
        if(isMouseClicked){
          let scrollXDist = e.pageX - mouseXStart;
          scrollPosX = width + scrollXDist
          window.scrollTo(scrollPosX ,0 )
    }
  })



})

//Scroll function
// let distance = 200
// let duration = 200
// var initialY = document.body.scrollTop;
// var y = initialY + distance;
// var baseY = (initialY + y) * 0.5;
// var difference = initialY - baseY;
// var startTime = performance.now();
//
// function step() {
//     var normalizedTime = (performance.now() - startTime) / duration;
//     if (normalizedTime > 1) normalizedTime = 1;
//
//     window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
//     if (normalizedTime < 1) window.requestAnimationFrame(step);
// }
// window.requestAnimationFrame(step);
