function updateClock() {
    var now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	if (minutes < 10) {
		time = hours + ':' + "0" + minutes;
	} else {
		time = hours + ':' + minutes;
	}
	if (hours < 10) {
		time = "0" + time;
	}
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

function calcHeight(){
    var maxHeight = 0;
    var elems = document.getElementsByClassName("box")
    for (var e = 0; e < elems.length; e++) {
        if(elems[e].offsetHeight>maxHeight){
            maxHeight = elems[e].offsetHeight;
        }
    }
    for (var e = 0; e < elems.length; e++) {
        if(elems[e].offsetHeight<maxHeight){
            elems[e].style.setProperty("height",maxHeight);
        }
    }
    
    
}

updateClock();
calcHeight();

