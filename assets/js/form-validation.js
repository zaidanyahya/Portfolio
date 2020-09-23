
// Captcha validation
window.onload = function() {
  	var recaptcha = document.forms["contactForm"]["g-recaptcha-response"];
  	recaptcha.required = true;
  	recaptcha.oninvalid = function(e) {
    	alert("Please complete the captcha");
  	}
}

// Form validation	
function validate() {
 	if( document.contactForm.name.value == "" ) {
    	alert( "Please provide your name!" );
        document.myForm.name.focus() ;
        return false;
    }
    if( document.contactForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
    }
     
     if( document.contactForm.subject.value == "" ) {
        alert( "Please write the Subject!" );
        document.myForm.email.focus() ;
        return false;
    }

    if( document.contactForm.message.value == "" || document.contactForm.message.value.length < 10) {
        alert( "Please write your message! (At least 10 character)");
        return false;
    }
    return( true );
}