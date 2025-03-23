document.querySelector(".lang-switch").addEventListener("click", function(){
    document.querySelector(".lang-menu").classList.toggle("show");
});


document.addEventListener("click",function (event){
    if(
        !document.querySelector("secondary-helper-menu").contains(event.target)
    )
}

