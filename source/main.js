
let currentWay = randomWay()	

let code_1, code_2, stations 

showControls()
draw()

for (n = 0; n < 31; n++){
	if (n > -1 && n < 5){
		controls[n].onmousedown = function(){
			currentWay.from_line = parseInt(this.innerText)
			clearLineFrom()
			this.style.backgroundColor = 'red'
			draw()
		}
	}
	if (n > 4 && n < 15){
		controls[n].onmousedown = function(){
			currentWay.from_station = parseInt(this.innerText)
			clearStationFrom()
			this.style.backgroundColor = 'red'
			draw()
		}
	}
	if (n > 14 && n < 20){
		controls[n].onmousedown = function(){
			currentWay.to_line = parseInt(this.innerText)
			clearLineTo()
			this.style.backgroundColor = 'red'
			draw()
		}
	}
	if (n > 19 && n < 30){
		controls[n].onmousedown = function(){
			currentWay.to_station = parseInt(this.innerText)
			clearStationTo()
			this.style.backgroundColor = 'red'
			draw()
		}
	}
}	

controls[30].onmousedown = function(){
	currentWay = randomWay()
	clearLineFrom()
	clearStationFrom()
	clearLineTo()
	clearStationTo()
	showControls()
	draw()
}


function draw(){
	code_1 = parseInt(new String(currentWay.from_line) + new String(currentWay.from_station))
	code_2 = parseInt(new String(currentWay.to_line) + new String(currentWay.to_station))
	stations = getStations(decode(code_1), decode(code_2))

	clear()
	
	for (s of stations){
		showStation(s)
	}
	showWay(stations)
}


function showControls(){
	controls[currentWay.from_line - 1].style.backgroundColor = "red"
	controls[currentWay.from_station + 4].style.backgroundColor = "red"
	controls[currentWay.to_line + 14].style.backgroundColor = "red"
	controls[currentWay.to_station + 19].style.backgroundColor = "red"
}






// //TESTING
// for (a = 1; a < 38; a++){
// 	for (b = 1; b < 38; b++){
// 		if (!getStations(a, b)) console.log([a, b])
// 	}
// }


