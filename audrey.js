const audrey = document.getElementById("audrey")


window.addEventListener("scroll", willNameLater)

function willNameLater() {
    let y = window.scrollY
    console.log(parseInt(y))
    
    

    audrey.style.width = `${y}px`
    audrey.style.height = `${y}px`
}
let y = container.scrollY
    console.log(y)
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.

 audrey.addEventListener("scroll", function () {

    var y = window.scrollY

    console.log(y)
    
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    



    
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    
 }) */



