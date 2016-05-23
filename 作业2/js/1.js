$('.carousel').carousel()
var hh=document.querySelector('.hh');
var timer=null;
var index=0;
timer=setInterval(function(){
	index++;
	if(index>3){
		index=1;
	}
	switch(index){
		case 1:
		hh.innerHTML="it's about time:"
		break;
		case 2:
		hh.innerHTML="Forget inbox zero:"
		break;
		case 3:
		hh.innerHTML="'Real-time' isn't for real:"

	}
},2000)
