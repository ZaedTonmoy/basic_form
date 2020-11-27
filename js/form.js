function check1(){
	var email1=document.getElementById('provide');
	var email2=document.getElementById('repeat');
	if (email1.value != email2.value) {
		alert("Email does not match");
		return false;
	}
}


function nicky(){
	if (document.getElementById('nick').checked) {
		document.getElementById('nickname').style.display="inline";
    document.getElementById('nake').setAttribute('required',true);
	}
	else{
		
		document.getElementById('nick').removeAttribute('required');
    document.getElementById('nickname').style.display="none";
    
  }
}