function validate()
{	
	if( document.form1.month.value == "-1" )
   {
     alert( "Please provide your Birth Month !" );
     return false;
   }
   
   if( document.form1.date.value == "-1" )
   {
     alert( "Please provide your Birth Day !" );
     return false;
   }
   
   if( document.form1.year.value == "" )
   {
     alert( "Please provide your Birth Year !" );
     return false;
   }
   
      
   if ( ( form1.sex[0].checked == false ) && ( form1.sex[1].checked == false ) ) 
   {
	alert ( "Please  Choose  Your  Gender !" ); 
	return false; 
   }
   
   if( document.form1.mob.value == "" )
   {
     alert( "Please  Provide  Your  Mobile  No !" );
	 return false;
   }
   
   if( form1.check.checked == false )
   {
    alert ( "Please  Agree  With  Terms  And  Conditions !" ); 
	return false;
   }
}

function check_password() 
{ 
	
	var s = document.getElementById("pass").value
	if (s.length < 4) 
	{
        s1.innerHTML="<span style=\"color:black ; font-style:italic ; font-family:Comic Sans MS\">Weak Password !!</span>";
    }
    else if (s.length >= 4 &&  s.length < 8) 
	{
        s1.innerHTML="<span style=\"color:blue ; font-style:italic ; font-family:Comic Sans MS\">Average Password !!</span>";
    } 
	else 
	{
        s1.innerHTML="<span style=\"color:green ; font-style:italic ; font-family:Comic Sans MS\">Strong Password !!</span>";
    }
}	
function confirm_password()
{
	var p = document.getElementById("cpass").value
	if (p.length < 4) 
	{
        p1.innerHTML="<span style=\"color:black ; font-style:italic ; font-family:Comic Sans MS\">Weak Password !!</span>";
    }
    else if (p.length >= 4 &&  p.length < 8) 
	{
        p1.innerHTML="<span style=\"color:blue ; font-style:italic ; font-family:Comic Sans MS\">Average Password !!</span>";
    } 
	else 
	{
        p1.innerHTML="<span style=\"color:green ; font-style:italic ; font-family:Comic Sans MS\">Strong Password !!</span>";
    }
}
	function validate()
	{
		var pass = document.getElementById("pass").value
        var confPass = document.getElementById("cpass").value
        if(pass != confPass) 
		{
		alert('Wrong confirm password !');
        }
	}

