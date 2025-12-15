// Haley Goldberg
"use strict";

// select the button
let printButton = document.querySelector("#print");

printButton.addEventListener("click", () =>{
    window.print();
});

// get the button that submits the gauge
let submitButton = document.querySelector("#submit");

// add an event listener for the submit button
submitButton.addEventListener("click", ()=>{
    // get the dimensions of the gauge swatch
    let gaugeWidthSts = document.querySelector("#gaugeWidthSts").value;
    let gaugeHeightSts = document.querySelector("#gaugeHeightSts").value;

    let gaugeWidthInch = document.querySelector("#gaugeWidthInch").value;
    let gaugeHeightInch = document.querySelector("#gaugeHeightInch").value;

    // get the dimensions of the desired dimensions
    let desiredWidth = document.querySelector("#desiredWidth").value;
    let desiredHeight = document.querySelector("#desiredHeight").value;

    // check that the values are not below 0
    if (! ((gaugeWidthSts > 0) && (gaugeHeightSts > 0) && (desiredWidth > 0) && (desiredHeight > 0) && (gaugeWidthSts > 0) && (gaugeHeightSts > 0))){
        window.alert("Please enter a value greater than 0.");
        return;
    } 

    // get the section where the number of stitches will be displayed
    let numberStitches = document.querySelector("#numStitches");

    // now calculate the number of stitches needed for the desired width and height
    let newWidth = ((gaugeWidthSts * desiredWidth) / gaugeWidthInch).toFixed(0);
    console.log("This is the newWidth value: " + newWidth);
    let newHeight = ((gaugeHeightSts * desiredHeight) / gaugeHeightInch).toFixed(0);
    console.log("This is the new height value: " + newHeight);

    // now append the calculated stitches to the numStitches section
    numberStitches.innerHTML += "<h2>Calculated Stitches</h2>";
    numberStitches.innerHTML += `<h3>Cast on ${newWidth} sitches for a width of ${desiredWidth} inches, and knit for ${newHeight} rows to reach a height of ${desiredHeight} inches!`;
    
});
