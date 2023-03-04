window.addEventListener("load", function () {
    var bannerItem = document.querySelector(".creavidfullvideo");
    var flying_carpet_div = document.querySelector(".flying_carpet_div");
    var getVideoheight = document.querySelector(".creavidfullvideo--video");
    var bannerText = document.querySelector(".creavidfullvideo--text");
    var bannerVideo = document.querySelector(".creavidfullvideo--video");

    //get height
    var mybannerHeight = getVideoheight.offsetHeight;
    console.log(mybannerHeight);

    bannerItem.parentElement.style.width = "100%";
    bannerItem.parentElement.style.maxWidth = "none";
    bannerItem.parentElement.style.height = "auto";
    bannerItem.parentElement.style.minHeight = "auto";

    //kompascom
    if (flying_carpet_div != null) {
        flying_carpet_div.style.minHeight = "auto";
    }

    function sbScroll(){
        var position = bannerItem.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= 950) {
            console.log("open");
            bannerText.classList.add("blurred");
            bannerVideo.play();
        } else {
            bannerText.classList.remove("blurred");
            bannerVideo.pause();
        }            
    }
    
    window.addEventListener("scroll", sbScroll); 
});