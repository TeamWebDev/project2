/**
* author: Alfonse, Monin, Bashar
* email: s241793@students.cdu.edu, sxxxxxx@students.cdu.edu.au, syyyyyy@students.cdu.edu.au
* Stuent number: 241793, xxxxxx, yyyyyy
*/

References:
			https://www.w3schools.com/jsref/met_node_appendchild.asp

// Login form code 

var modal = document.getElementById('loginNow');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}			


// Sign up form code https://codepen.io/rosswaycaster/pen/YPQzap



var modal = document.getElementById('signUp');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}	

// donation form from 

var firstName = "";
		var lastName = "";
		var email = "";
		var dType = "";
		var receipt = "";
		var anon = "";
		var list = "";
		var amount = "";
		
		$('.set-amount').autoGrow(0);
		
		/*
			if(isiPad || jQuery.browser.mobile){
				$('#team').hide()
				$('.team-mobile').show();	
			}else{
				$('#team').show()
				$('.team-mobile').hide();
			}
		*/
		
		//Set & Highlight Donation Amount
		$(".button").click(function(){
			$(".button").removeClass("selected");
			$(this).addClass("selected");
			
			$(this).find("input").focus();
		});
		
		//Grow the donation box if they type more than 4 numbers
		$(".set-amount").keyup(function(){
			
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
		       this.value = this.value.replace(/[^0-9\.]/g, '');
		    }

		});
		
		
		$("input").on("change", function(){
			// $(".donation-box").css("height", "500px");
			
			firstName = $("#firstName").val();
			lastName = $("#lastName").val();
			email = $("#email").val();
			
			if ( $("#one-time").prop( "checked" ) ){
				dType = "One-Time";
			}
			if ( $("#monthly").prop( "checked" ) ){
				dType = "Monthly";
			}

		});


	

	






	
		




// Open and close navigation for mobiles 
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
	document.getElementById("wrapper").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("wrapper").style.marginLeft= "0";
}



























