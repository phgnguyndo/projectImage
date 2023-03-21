var screen=document.querySelector(".screen")
var listImg=document.querySelectorAll("img.image")// tra ve 1 mang
console.log(listImg)
listImg.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        console.log("log");
        let link=e.target.src
        screen.classList.add("show")
        const img=document.getElementById("dai")
        img.src=link
    })
})

function Close(){
    const img=document.getElementById("dai")
        img.src=null
        screen.classList.remove("show")
}

function Next(){
    const img=document.getElementById("dai")
       let index
       listImg.forEach((item,i)=>{
          if(img.src==item.src)
            index= i
       })
      
       if(index<listImg.length-1)
          index++
       else
          index=0
    img.src=listImg[index].src
}

function Preve(){
    const img=document.getElementById("dai")
       let place
       listImg.forEach((item,i)=>{
        if(img.src==item.src)
          place= i
     })

     if(place>0)
       place--
     else
       place=listImg.length-1
       img.src=listImg[place].src
}
