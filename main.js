let clickCounter = 0
const colorSelector = () => {
    let randomColour =  Math.floor(Math.random() * 16777215).toString(16);
randomColour = "#" + ("000000" + randomColour).slice(-6);
document.bgColor = randomColour;
}

colorSelector()
document.addEventListener("click", e => {
   clickCounter++
   colorSelector()
   document.getElementById("clickNumber").innerHTML = clickCounter
})
console.log(clickCounter)




