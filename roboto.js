
//This function read the instructions provided by the user
function readInstructions(){
	var number_steps = document.getElementById("step").value;
	var direction = document.getElementById("direction").value;
	

	
	if(isEmpty(number_steps) || isEmpty(direction)){
		sweetAlert("Oops", "Fill both fields", "error");
		return;
	}

	if(!isNumeric(number_steps)){
		sweetAlert("Oops...", "The number of steps must be a positive integer", "error");
		return; // Here we stop the function
	}

	if(!isDirection(direction)){
		sweetAlert("Oops...", "format of direction is not valid", "error");
		return; // Here we stop the function
	}

    // We cast the number of steps to int
    var pixels = parseInt(number_steps);
    direction = direction.toLowerCase();
	
	//Now we call the bot to move around the world
	moveBot(pixels,direction);


}


function moveBot(pixels,direction){
	//We get the current position of the bot
	var roboto = document.getElementById("bot");
	var curleft = 0;
  	var curtop = 0;
  	if (roboto.offsetParent) {
  		do {
  			curleft += roboto.offsetLeft;
    		curtop += roboto.offsetTop;
   		} while (roboto = roboto.offsetParent);
    }
    
	
    //Now we refresh the position of the bot provided by the user

    if(direction == "north"){
		moveToNorth(curtop,pixels);
	}

    else if(direction == "south"){
		moveToSouth(curtop,pixels);
    }
    else if(direction == "east"){
		moveToEast(curleft,pixels);
    }
    else{
		moveToWest(curleft,pixels);
    }



}


function moveToNorth(curtop,pixels){
	var elem = document.getElementById("bot");   
	var pos = 0;
    var id = setInterval(frame, 100);
	function frame() {
	if (pos == pixels) {
	  clearInterval(id);
	} else {
		if (elem.src.match("bot2")) {
			elem.src = "images/bot3.png";
		}
		else if (elem.src.match("bot3")){
			elem.src = "images/bot.png";
		}
		else {
			elem.src = "images/bot2.png";
		}
		
		if((curtop - pos)<285){
			sweetAlert("Be careful", "You're getting out of the world", "warning");
			clearInterval(id);
			
		}
	
		pos++; 
		elem.style.top = (curtop - pos) + 'px'; 
	}
  }
}

function moveToSouth(curtop,pixels){
	var elem = document.getElementById("bot");   
	var pos = 0;
    var id = setInterval(frame, 100);
	function frame() {
	if (pos == pixels) {
	  clearInterval(id);
	} else {
		if (elem.src.match("bot2")) {
			elem.src = "images/bot3.png";
		}
		else if (elem.src.match("bot3")){
			elem.src = "images/bot.png";
		}
		else {
			elem.src = "images/bot2.png";
		}
		if((curtop + pos)>600){
			sweetAlert("Be careful", "You're getting out of the world", "warning");
			clearInterval(id);
		}
	    pos++; 
	    elem.style.top = (curtop + pos) + 'px'; 
	}
  }
}

function moveToEast(curleft,pixels){
	var elem = document.getElementById("bot");   
	var pos = 0;
    var id = setInterval(frame, 100);
	function frame() {
	if (pos == pixels) {
	  clearInterval(id);
	} else {
		if (elem.src.match("bot2")) {
			elem.src = "images/bot3.png";
		}
		else if (elem.src.match("bot3")){
			elem.src = "images/bot.png";
		}
		else {
			elem.src = "images/bot2.png";
		}
		if((curleft + pos)<10){
			sweetAlert("Be careful", "You're getting out of the world", "warning");
			return;
		}
	    pos++; 
	    elem.style.left = (curleft + pos) + 'px'; 
	}
  }
}

function moveToWest(curleft,pixels){
	var elem = document.getElementById("bot");   
	var pos = 0;
    var id = setInterval(frame, 100);
	function frame() {
	if (pos == pixels) {
	  clearInterval(id);
	} else {
		if (elem.src.match("bot2")) {
			elem.src = "images/bot3.png";
		}
		else if (elem.src.match("bot3")){
			elem.src = "images/bot.png";
		}
		else {
			elem.src = "images/bot2.png";
		}
		if((curleft - pos)>1100){
			sweetAlert("Be careful", "You're getting out of the world", "warning");
			return;
		}
	    pos++; 
	    elem.style.left = (curleft - pos) + 'px'; 
	}
  }
}

//This function permits the bot go back to its original position

function getBackHome(){
	//We only set the original position of the bot to get back home
	var direction = document.getElementById("direction").value;    
    // Is a valid direction
	if(direction == "north" || direction == "south"){
		document.getElementById("bot").style.top = 400 + "px";
		document.getElementById("bot").style.right = 600 + "px";
	}
	else{
		document.getElementById("bot").style.bottom = 400 + "px";
		document.getElementById("bot").style.left = 600 + "px";
	}



}


function isEmpty(string){
	return string == "";
}

function isNumeric(number){
	return number.match(/^\d+\.\d+$/) || number.match(/^\d+$/);
}

function isDirection(direction){
	direction = direction.toLowerCase();
	return direction == "north" || direction == "south" || direction == "east" || direction == "west";
}