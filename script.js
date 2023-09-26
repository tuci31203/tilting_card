const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) =>{
    rotateElement(e, pre);
})

function rotateElement(event, element){
    // mouse pos

    const x = event.clientX;
    const y = event.clientY;
    // console.log(x,y);

    // find the middle
    const midX = window.innerWidth/2;
    const midY = window.innerHeight/2;

    // offset rotate -> precentage -> times base angle
    const offsetX = ((x - midX) / midX) * 45;
    const offsetY = ((y - midY) / midY) * 45;

    // rotate
    element.style.setProperty("--rotX", -1*offsetY + "deg");
    element.style.setProperty("--rotY", offsetX + "deg");

}