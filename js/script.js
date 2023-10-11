let loadingPage=document.querySelector(".loading")

window.onload=()=>{
loadingPage.classList.add("hide-loader")
ReloadSave()
}
let icons=document.querySelector(".icons")
let spn1=document.querySelector("#one")
let spn2=document.querySelector("#two")
let spn3=document.querySelector("#three")
let smallNav=document.querySelector(".nav")
let bgs=document.querySelectorAll(".bgs img")
let mainImg=document.querySelector(".main-img")

// icon Start

icons.addEventListener("click",()=>{
spn3.classList.toggle("hide")
spn2.classList.toggle("icon-one")
spn1.classList.toggle("icon-two")
smallNav.classList.toggle("show-nav")
// document.write("hlell")
})
// icon End
// Background chang Start

console.log(bgs)
bgs.forEach((bg)=>{
    bg.addEventListener("click",(event)=>{
        document.body.style.backgroundColor=event.currentTarget.dataset.color
        localStorage.setItem("bg-color",event.currentTarget.dataset.color)
        mainImg.src=event.currentTarget.src
        localStorage.setItem("main-img-src",event.currentTarget.src)
    
    })
})
// Save info on reload 
function ReloadSave(){
    if(localStorage.getItem("bg-color")){
        document.body.style.backgroundColor=localStorage.getItem("bg-color")
    loadingPage.style.backgroundColor=localStorage.getItem("bg-color")
    }
    if(localStorage.getItem("main-img-src")){
        
        mainImg.src=localStorage.getItem("main-img-src")
    }
 
}
// Background chang End