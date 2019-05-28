$(document).ready(function(){
document.addEventListener('mouseover', (e) =>{
    let {clientX} = e
    let {clientY} = e
    let width = window.innerWidth
    let height = window.innerHeight


    //area where mouse event will be trugered. 10% border around edge
    let leftBuffer = width * 0.1
    let rightBuffer = width - width * 0.1
    let topBuffer = height * 0.1
    let bottomBuffer = height - height * 0.1


    let scrollPosX = window.scrollX
    let scrollPosY = window.scrollY

      if(clientX <= leftBuffer){
        scrollPosX -=40
        window.scrollTo(scrollPosX ,scrollPosY )
      }
      if(clientX >= rightBuffer){
        scrollPosX +=40
        window.scrollTo(scrollPosX ,scrollPosY )
    }
      if(clientY <= topBuffer){
        scrollPosY -=40
        window.scrollTo(scrollPosX ,scrollPosY )
      }
      if(clientY >= bottomBuffer){
        scrollPosY +=40
        window.scrollTo(scrollPosX ,scrollPosY )
    }
  })



  function ZoomOut(){
    let topLeft = document.querySelector('#top-left')
    let topRight = document.querySelector('#top-right')
    let bottomLeft = document.querySelector('#bottom-left')
    let bottomRight = document.querySelector('#bottom-right')


  }

})
