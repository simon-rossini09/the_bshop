	function verif () {
		if (document.querySelector('#nom').value =='') {
			document.querySelector('#nom').focus();
			document.querySelector('#nom').style.background='red';
			return false; }
		else if (document.querySelector('#prenom').value =='') {
			document.querySelector('#prenom').focus();
			document.querySelector('#prenom').style.background='red';
			return false;}
		else if (document.querySelector('#adresse').value =='') {
			document.querySelector('#adresse').focus();
			document.querySelector('#adresse').style.background='red';
			return false;}
		else if (document.querySelector('#exampleFormControlTextarea1').value =='') {
			document.querySelector('#exampleFormControlTextarea1').focus();
			document.querySelector('#exampleFormControlTextarea1').style.background='red';
			return false;}
		}
		
		
	
	var error=+;
	var tous_les_inputs_type_text = document.querySelectorAll('input[type="text"]');
	console.log(tous_les_inputs_type_text);

	for(var index=0;index<tous_les_inputs_type_text.length; index++) {
		if (tous_les_inputs_type_text[index].focus();
			tous_les_inputs_type_text[index].style.background = 'red';

			error++;
		}else{
			tous_les_inputs_type_text[index].style.background = 'green';
		}
	var error_tel=+;
	var regex =/Je suis l'id telephone/;
	varid =document.getElementByid(test_tel).innerHYML;

	console.log(id.match(regex));

	test_tel = document.querySelectorAll ('input[type!="NaN"]');
	console.log(test_tel);
	
	for (telephone.length==10) 
		& for (index=0; var tel_regex = /(01|02|03|04|05|06|07|08|09)[0-9]{8}$/
		var indicatif = /^(0033)|\+33[0-9]{9}$/; i=++) then console.log('correct');
		else for (var i = 0; test_tel !=NaN; i = ++) 
		then console.log('ne saisissez que des chiffres'); 
		
	function change() {test_tel.background='yellow'};
	function delete_supprimer() {test_tel.background='red'}; 
	
	var regex =/je suis l'id test/;

	varid =document.getElementByid('test_tel').innerHTML;

	console.log(id.match(test_tel(regex)));
	 
	var tel_regex = /(01|02|03|04|05|06|07|08|09)[0-9]{8}$/
	var indicatif = /^(0033)|\+33[0-9]{9}$/
	
	test_tel.addEventListener('mouseover', change)
	test_tel.addEventListener('mouseout', delete_supprimer)
}