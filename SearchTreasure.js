let map = document.getElementById("map");
let distance = document.getElementById("distance");
let mapWidth = 1000;
let mapHeight = 600;
let click = 0;
const numberRandom = (upperLimit) => Math.floor((Math.random()*upperLimit));

let treasurePos = {
    x: numberRandom(map.offsetWidth),
    y: numberRandom(map.offsetHeight)
};
let getDistance = (event, treasure) =>{
	let differenceX = event.offsetX-treasure.x;
	let differenceY = event.offsetY-treasure.y;
	return Math.sqrt((differenceX*differenceX)+(differenceY*differenceY));
};
let getHelp=(distance)=>{
	if (distance < 15){
		return "Quemando";
	}else if (distance < 20){
		return "Muy caliente";
	}else if (distance < 40){
		return "Caliente";
	}else if (distance < 80){
		return "Tibio";
	}else if (distance < 160){
		return "Frio";
	}else{
		return "Muy Frio";
	}
};
function mapClick(event)
{
    click += 1;
    let distanceSquare = getDistance(event, treasurePos);
    let help = getHelp(distanceSquare);
    distance.innerHTML = help;
    if (distanceSquare < 15){
		window.location.href = "http://127.0.0.1:5500/victory.html?"+String(click);
    }
};


map.addEventListener('click', mapClick);




window.addEventListener("click", (event) => {
	let image = document.createElement("img");
    image.classList.add("image-type");
    image.src = "coin.gif";
	image.classList.add("coin");
	var xPosition = event.clientX - (image.clientWidth) -8;
    var yPosition = event.clientY - (image.clientHeight) -8;
	image.style.position = 'absolute';
	image.style.left = xPosition + "px";
	image.style.top = yPosition + "px";
	const page = document.getElementById("mmm");
	page.appendChild(image);
  });