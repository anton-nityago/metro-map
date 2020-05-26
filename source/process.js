
let shadow = document.querySelector('metro-map')
let elements = shadow.shadowRoot.querySelectorAll('rect, path, polygon')

let shadow_2 = document.querySelector('control-map')
let controls = shadow_2.shadowRoot.querySelectorAll('div.button, div.rnd')

let points = []



for (i of elements){
	if(i.id.length < 4){
		points.push(i)
	}
}



let l1 = []
let l2 = []
let l3 = []
let l4 = []
let l5 = []



for (el of elements){
	if(el.id.length == 4) {
		let eId = parseInt(el.id[1] + el.id[2] + el.id[3])
		if (eId > 110 && eId < 120) l1.push(el)
		if (eId > 120 && eId < 130) l2.push(el)
		if (eId > 130 && eId < 140) l3.push(el)
		if (eId > 140 && eId < 150) l4.push(el)
		if (eId > 150 && eId < 161) l5.push(el)
	}
}



function getStations(a, b){
	let ways = []
	for (object of model_1){

		if (object.indexOf(a) > -1 && object.indexOf(b) > -1){
			
			let index_a = object.indexOf(a)
			let index_b = object.indexOf(b)

			let temp = []
			if (index_a <= index_b){
				temp = object.slice(index_a, index_b + 1)
			} else {
				temp = object.slice(index_b, index_a + 1)
			}			
			
			ways.push(temp)
		} 
	}
			let x = 100; 
			let index = 0
			let min = 0; 
			for (w of ways){
				if (w.length < x) {
					x = w.length
					min = index
			}
			index++
	}
	if(filter(a, b))return filter(a, b); else return ways[min]
}


function filter(a, b){
 for (f of filter_1){
 	if ((a == f[0] && b == f[f.length - 1]) || (b == f [0] && a == f[f.length - 1])){
 		return f
 	}
 }
}



function showStation(s){
	for (p of points){
		if (p.id == "_" + s) p.style.fill = 'red'		
	}
}



function clear(){
	for (p of points){ p.style.fill = '#ccc' }

	for(l of l1){ l.style.fill = '#008faa' }
	for(l of l2){ l.style.fill = '#662d91'	}
	for(l of l3){	l.style.fill = '#009245'	}
	for(l of l4){	l.style.fill = '#1a005f'	}
	for(l of l5){	l.style.fill = '#b95fff'	}
}



function showWay(stations){
	let count
	if (stations.length > 1){
		for (n = 0; n < stations.length; n++){
			if (n < stations.length - 1){
				let id = getIdLine(stations[n], stations[n+1])
				showLine(id)
			}
		}
	}
}



function showLine(id){
	for (element of elements){
		if (element.id == "_" + id){
			element.style.fill = 'orange'
		}
	}
}



function getIdLine(a, b){
	for(l of lines){
		if ((a == l[0] && b == l[1]) || (a == l[1] && b == l[0]))return l[2]
	}
}



function clearLineFrom(){
	for (n = 0; n < 5; n++) 
	controls[n].style.backgroundColor = ""
}



function clearStationFrom(){
	for (n = 5; n < 15; n++) 
	controls[n].style.backgroundColor = ""
}



function clearLineTo(){
	for (n = 15; n < 20; n++) 
	controls[n].style.backgroundColor = ""
}



function clearStationTo(){
	for (n = 20; n < 30; n++)
	controls[n].style.backgroundColor = ""
}



function decode(val){
	for(c of code){
		if(c[0] == val) return c[1]
	}
}



	function randomWay(){
		let a, b, c, d
		do{
			a = parseInt(Math.random() * 5 + 1)
			b = parseInt(Math.random() * 10 + 1)
			c = parseInt(Math.random() * 5 + 1)
			d = parseInt(Math.random() * 10 + 1)
		}while((a + b) == (c + d))
		return {from_line: a, from_station: b, to_line: c, to_station: d}
	}