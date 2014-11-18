var arr = [];

arr[0]= new Image();
arr[0].src = "1.jpg";

arr[1]= new Image();
arr[1].src = "2.jpg";

arr[2]= new Image();
arr[2].src = "3.jpg";

arr[3]= new Image();
arr[3].src = "4.jpg";

arr[4]= new Image();
arr[4].src = "5.jpg";

arr[5]= new Image();
arr[5].src = "6.jpg";

arr[6]= new Image();
arr[6].src = "7.jpg";


var i=0;

function slide()
	{
	document.getElementById("image_1").src= arr[i].src;
	i++;
	
	if(i==arr.length)
	{
	i=0;
	}
	setTimeout(function(){ slide(); },3500);
	}
