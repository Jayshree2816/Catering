function validate()
  {
    if( document.catering.name.value == "" )
    	{
      	alert( "Please provide your name!" );
        	document.catering.name.focus() ;
            return false;
         }
         
    if( document.catering.message.value == "" )
      {
      	alert( "Please write your message!" );
        document.catering.message.focus() ;
        return false;
			}
		return(true);
	}

	function submit() {
		alert("You are successfully placed your order... Thank You!!!");
	}