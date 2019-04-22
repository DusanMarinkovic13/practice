$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

function locstormake() {
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value	
	localStorage.setItem("username", username); 
	localStorage.setItem("email", email);   
   }//lock store get
   
   function localstorget() {  
	var username = localStorage.getItem("username");     
	var email = localStorage.getItem("email"); 	 
	document.getElementById("gost").innerHTML = username +  " " + email;  
   }

/* function index(){
	var check = sessionStorage.getItem("check");
	if(check == "true" ){
	var check = true;
		 data();}
	}

	function data(){
		var check = sessionStorage.getItem("check");
		if(check == "true"){
			var username = localStorage.getItem('username');
			var email = localStorage.getItem('email');
		}else{
			var username = document.getElementById("username").value;
			var email = document.getElementById("email").value;
			localStorage.setItem('username', username);
			localStorage.setItem('email', email);
		}
		var check = true;
		sessionStorage.setItem("check", check);
		var string = " " + username + " " +email+" ";
		var str = string.split("");
		document.getElementById("gost").innerHTML= " ";
		var el = document.getElementById("gost");
		(function animate(){
			str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
			var running = setTimeout(animate,70);
		})();  
	} */

	/* function data(){
		document.getElementById("");
	} */

	function show1(){
		document.getElementById('svadba').style.display = "block";
	} 