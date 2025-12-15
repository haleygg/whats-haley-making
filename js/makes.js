// Haley Goldberg
"use strict";

// selecting the images
const imgSelector = "img";
const imgs = document.querySelectorAll(imgSelector);

imgs.forEach(i =>{
    let src = i.getAttribute("src");
    let id = i.getAttribute("id");

    if (id != null){
        i.addEventListener("mouseover", function(){
            // create vars to save the current id and src before swapping
            let oldID = i.id;
            let oldSrc = i.src;
            // swap the id and src vals
            i.id = oldSrc;
            i.src = oldID;
        });
        i.addEventListener("mouseout", function(){
            let oldID = i.id;
            let oldSrc = i.src;
            i.id = oldSrc;
            i.src = oldID;
        });
    }
});

