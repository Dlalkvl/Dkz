function validate_booking()
{	
	/*if( document.form2.date.value == "-1" )
   {
     alert( "Please provide Date !" );
	 return true;
   }*/
   
   if( document.form2.Person.value == "-1" )
   {
     alert( "Please provide No of Person !" );
     return true;
   }
   
   if( document.form2.Lunch.value == "-1" && document.form2.Dinner.value == "-1" )
   {
		{
		alert( "Please provide Time for Dinner or Lunch!" );
	 return false;
		}
   
   }
   
  /*if(document.getElementById('text1').value >20)
  {
  
  document.getElementById('t1').innerHTML="Enter 20 Person Only"
  }*/
  }