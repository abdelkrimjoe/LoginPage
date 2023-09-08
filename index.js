let btn=document.querySelectorAll(".btn");
let divInput=document.querySelector(".divInput")
let input=document.querySelector(".divInput input");
let titre=document.getElementById("h1")
btn.forEach(el=>{
    el.addEventListener("click",()=>{
        btn.forEach(e=>{
            e.classList.remove("Active")
        })
        el.classList.add("Active");
        if(el.innerText=="Sign Up"){
            divInput.style.maxHeight="fit-content"
            divInput.style.padding="10px"
            divInput.style.color='black'
            input.style.display='flex'
          
        }
        else if(el.innerText=="Sign In"){
            divInput.style.maxHeight="0"
            divInput.style.padding="0"
            divInput.style.color='transparent'
            input.style.display='none'
        }
        titre.innerText=el.innerText


    })
})