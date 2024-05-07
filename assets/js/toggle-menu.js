function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("toggle-nav");
    document.querySelector("body").classList.toggle("no-scroll");
}

document.querySelector(".btnMenu").addEventListener("click", function(){
    let span = document.getElementById("btnMenuSpan");

    if (span.innerHTML === "close") {
        span.innerHTML = "menu";
    }else{
        span.innerHTML = "close";
    }
});