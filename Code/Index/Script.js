//hamb
function hamburger(){
    let hamb = document.querySelector(".hamburger nav").style.display
    if(hamb === ""){
        let coord_hamb = 0
        document.querySelector(".hamburger img").src = "../../Source/Img/menu_open.svg"
        document.querySelector(".hamburger nav").style.display = "block"
        let hamb_open=setInterval(function(){
            if(coord_hamb < 185){
                coord_hamb+=10
                document.querySelector(".hamburger nav").style.height = coord_hamb +"px"
            }else{
                setTimeout(()=> clearInterval(hamb_open))
            }
        },1)
        
    }else{
        let coord_hamb = 185
        document.querySelector(".hamburger img").src = "../../Source/Img/menu.svg"
        let hamb_open=setInterval(function(){
            if(coord_hamb > 0){
                coord_hamb-=10
                document.querySelector(".hamburger nav").style.height = coord_hamb +"px"
            }else{
                document.querySelector(".hamburger nav").style.display = ""
                setTimeout(()=> clearInterval(hamb_open))
            }
        },1)
        
    }
}

document.onclick = function() {

    //закрытия гамбургера нажатием в любое место
    if(event.target.className != "hamburger_img"){
        let coord_hamb = 185
        document.querySelector(".hamburger img").src = "../../Source/Img/menu.svg"
        let hamb_open=setInterval(function(){
            if(coord_hamb > 0){
                coord_hamb-=10
                document.querySelector(".hamburger nav").style.height = coord_hamb +"px"
            }else{
                document.querySelector(".hamburger nav").style.display = ""
                setTimeout(()=> clearInterval(hamb_open))
            }
        },1)
    }
}