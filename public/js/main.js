var menuButtons = document.querySelectorAll(".menu-button");
var menuIcon = document.querySelector(".menu-icon");
var menuElement = document.querySelector(".nav");
var menuDiv = document.querySelector(".menu-div");
var mainDiv = document.querySelector(".main-div");
var menuVisible = false;
var iconColor;

console.log(menuButtons);

for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", function() {
        for (var i = 0; i < menuButtons.length; i++) {
            menuButtons[i].classList.remove("active");
        }
        
        this.classList.add("active");
    });
}

menuIcon.addEventListener("mouseenter", function() {
    iconColor = window.getComputedStyle(menuIcon, null).getPropertyValue("color");
    this.style.color = "red";
});

menuIcon.addEventListener("mouseleave", function() {
    this.style.color = iconColor;
});

menuIcon.addEventListener("click", function() {
    if(menuVisible) {
        mainDiv.classList.add("col-lg-11");
        mainDiv.classList.remove("col-lg-10");
        
        menuDiv.classList.add("col-lg-1");
        menuDiv.classList.remove("col-lg-2");
        
        mainDiv.classList.add("col-xs-11");
        mainDiv.classList.remove("col-xs-10");
        
        menuDiv.classList.add("col-xs-1");
        menuDiv.classList.remove("col-xs-2");
        menuElement.style.visibility = "hidden";
        
        menuIcon.classList.add("glyphicon-menu-hamburger");
        menuIcon.classList.remove("glyphicon-menu-right");
        menuIcon.style.color = "black";
        iconColor = "black";
        
        menuDiv.style.background = "white";
        
        menuVisible = false;
    } else {
        mainDiv.classList.remove("col-lg-11");
        mainDiv.classList.add("col-lg-10");
        
        menuDiv.classList.remove("col-lg-1");
        menuDiv.classList.add("col-lg-2");
        
        mainDiv.classList.remove("col-xs-11");
        mainDiv.classList.add("col-xs-10");
        
        menuDiv.classList.remove("col-xs-1");
        menuDiv.classList.add("col-xs-2");
        menuElement.style.visibility = "visible";
        
        menuIcon.classList.remove("glyphicon-menu-hamburger");
        menuIcon.classList.add("glyphicon-menu-right");
        menuIcon.style.color = "white";
        iconColor = "white";
        
        menuDiv.style.background = "black";
        
        menuVisible = true;
    }
});

// $(window).scroll(function(){
//   $(".menu-div").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow");
// });

$(window).scroll(function(){
  $(".menu-div").css({"margin-top": ($(window).scrollTop()) + "px", "margin-left":($(window).scrollLeft()) + "px"});
});