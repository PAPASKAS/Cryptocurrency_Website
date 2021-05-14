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
//calculator

function select_hash(){
    let height_select_hash = document.querySelector(".option_calculator").offsetHeight
    let open_var = 0
    let closed_var = 104
    
    if(height_select_hash === 0){
        document.querySelector(".option_calculator").style.display = "block"
        document.querySelector(".option_calculator").style.height ="0px"    
        document.querySelector(".select_calculator img").style.transform = "rotate(180deg)"
            
        
        let open_anima = setInterval(function(){
            if(open_var < 92){
                open_var+=13
                document.querySelector(".option_calculator").style.height = open_var + "px"
            }else{
                clearInterval(open_anima)
            }
        },10)    
    }else{
        document.querySelector(".select_calculator img").style.transform = "rotate(360deg)"
        let closed_anima = setInterval(function(){
            if(closed_var > 0){
                closed_var-=13
                document.querySelector(".option_calculator").style.height = closed_var + "px"
            }else{
                document.querySelector(".option_calculator").style.display = ""
                clearInterval(closed_anima)
            }
        },10)    
    }
}

function calculator(){
    
}

function crypto_over(n){
    document.querySelectorAll(".crypto_item")[n].style.backgroundColor = "#2B076E"
    document.querySelectorAll("#name_crypto")[n].style.color = "#FFFFFF"
    document.querySelectorAll("#abbreviated_name")[n].style.color = "#FFFFFF"
    document.querySelectorAll("#description_crypto")[n].style.color = "#FFFFFF"
    document.querySelectorAll("#button_crypto")[n].src = "../../Source/Img/Button_crypto.svg"
    document.querySelectorAll(".shadow_crypto span")[n].style.boxShadow = "none"
}

function crypto_out(n){
    document.querySelectorAll(".crypto_item")[n].style.backgroundColor = "#F8F9FB"
    document.querySelectorAll("#name_crypto")[n].style.color = "#0D0D2B"
    document.querySelectorAll("#abbreviated_name")[n].style.color = "#BDBDBD"
    document.querySelectorAll("#description_crypto")[n].style.color = "#828282"
    document.querySelectorAll("#button_crypto")[n].src = "../../Source/Img/Arrow Right.svg"
    document.querySelectorAll(".shadow_crypto span")[n].style.boxShadow = "0px 40px 40px #391777"
}





//footer
function footer(n){
    let footer_var = document.querySelectorAll(".link_footer ul")[n].style.display
    let open_footer_var = 0
    let closed_footer_var = 190

    if(footer_var === ""){
        document.querySelectorAll(".link_footer ul")[n].style.height = "0px"
        document.querySelectorAll(".link_footer ul")[n].style.display = "block"
        document.querySelectorAll(".link_footer img")[n].style.transform = "rotate(180deg)"

        let open_footer = setInterval(function(){
            if(open_footer_var < 190){
                open_footer_var+=10
                document.querySelectorAll(".link_footer ul")[n].style.height = open_footer_var + "px"
            }else{
                setTimeout(()=>clearInterval(open_footer))
            }
        },10)
    }else{
        document.querySelectorAll(".link_footer img")[n].style.transform = "rotate(360deg)"
        let closed_footer = setInterval(function(){
            if(closed_footer_var > 0){
                closed_footer_var-=10
                document.querySelectorAll(".link_footer ul")[n].style.height = closed_footer_var + "px"
            }else{
                setTimeout(()=>clearInterval(closed_footer))
                document.querySelectorAll(".link_footer ul")[n].style.display = ""
            }
        },10)
    }
}