function returnGame(){
    window.location.href = 'http://127.0.0.1:5500/SearchTreasure.html';
}
function printCoins(elements, imageUrl)
{
    for (let i = 0; i<tries;i++)
    {
        let image = document.createElement("img");
        image.classList.add("image-type");
        image.src = imageUrl;
        elements.appendChild(image);
    }
}
const tries = window.location.href.split("?")[1];
document.getElementById("intentsText").innerHTML = "Realizado en "+String(tries)+" intentos.";

const elements = document.getElementById("container");

printCoins(elements, "coin.gif");