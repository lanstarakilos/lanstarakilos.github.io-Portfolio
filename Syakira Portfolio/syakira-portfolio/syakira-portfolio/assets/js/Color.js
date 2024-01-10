export const HandleColorMode=e=>{
    let Element=e.target
    let Refink=document.querySelector(".color-change-ref")
    Element.classList.toggle("active");


    if(Element.classList.contains("active")){
        Refink.setAttribute("href","../assets/css/NightMode.css")
        window.localStorage.setItem("mode","dark")
        document.querySelectorAll(".shape").forEach(Each=>{
            Each.classList.add("dark")
        })
        document.querySelectorAll(".text").forEach(Each=>{
            Each.classList.add("dark")
        })
    }else{
        window.localStorage.setItem("mode","bright")
        document.querySelectorAll(".shape").forEach(Each=>{
            Each.classList.remove("dark")
        })
        document.querySelectorAll(".text").forEach(Each=>{
            Each.classList.remove("dark")
        })
        Refink.setAttribute("href","")
    }

    

   
}