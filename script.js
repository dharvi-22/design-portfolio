//-------------------image loop-----------------------------

//----------checks if the pages have the image list before proceeding
document.addEventListener("DOMContentLoaded", () =>{
    //select all the list images 
    const images = document.querySelectorAll("#image-list li img")

    //end the element if the image list is not found------to avoid console error messages
     if (images.length === 0) {
        return;
    }

    // starts with the first image index and count for the images shown
    let index = 0;
    let imageCount = 0;

    //declaring a variable to later store the returned id from setInterval
    let interval;

    // start flashing loop: setInterval, toggles the active class
    function startFlashing() {
    interval = setInterval(() => {
        images.forEach((img) => {
          img.style.zIndex = 0;
        }); 
        //moves to the next image in the list
        index = (index + 1) % images.length;
        //adds the active class to the new image
        images[index].classList.add("active");
        images[index].style.position = "relative"
        //zIndex moves images from any position of the index to the top 
        images[index].style.zIndex = 10;
        //images[index].style.zIndex = (index + 1)* 10
    }, 1000);
}
    // stop flashing on scroll: addeventlistener
    function stopFlashing() {
    window.addEventListener("scroll", () =>{
        clearInterval(interval);
    });

}
    //call the functions
    startFlashing();
    stopFlashing();
});



//-----------restart the loop when scrolled up-----------------------
//const windowObserver = document.createElement("div");
//windowObserver.style.position = "absolute";
//windowObserver.style.top = "0";
//windowObserver.style.width = "1px";
//windowObserver.style.height = "1px";
//document.body.prepend(windowObserver);

//const observer = new IntersectionObserver((entries) => {
//    const entry = entries[0];
//    if (entry.isIntersecting) {
//        startFlashing();
//    } else{
//        stopFlashing();
//    }
//}, {threshold: 1.0});

//0bserver.observe(windowObserver);

//call the functions
//startFlashing();
//stopFlashing();



//---------------navbar hamburger------------------------ 
// select elements
const hamBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

//toggle the menu visibility on click
hamBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});


