/*var saisi = prompt("Entrez un numero");

if ( (10 < saisi) && (saisi < 100) ) {
	alert("La police");
}
else if (saisi == 18) {

	alert("Les pompiers");
}
else if (saisi == "0800") {

	alert("Numero vert");
}else{
	alert("Numero inconnu");
}


switch (parseInt(saisi)){
	case 18:
		alert("Les pompiers");
	break;
	case 17:
		alert("La police");
	break;

	case 0800:
		alert("Numero vert");
	break;
	default:
		alert("Numero inconnu");
	break;
}
*/

/* Les boucles */

/* Boucle While */
	var index = 5;
	/*while(0 < index){
		
		console.log(index)

		alert("J'aime le js");

		index--; décrémenter
		//index++; incrémenter
	}*/

/* Fin boucle While */


/* boucle For */
/*
for (var index = 0; index < 5; index++){
	alert("J'aime bien le js");
}*/
/* Fin boucle For */

/* Do while */
var test =5;

do{
	//console.log("Je suis la boucle do while")
	test++;
}while(test < 3)
/* Fin Do while */

/* Boucles imbriquées */

/*for (var i = 0; i < 5 ; i++) {
	console.log(" Je suis la premiere boucle " +i);
	for (var afpa = 0;  1 < 3; afpa++) {
		console.log(afpa);
		for (var test = 0; test < 2 ; test++) {
			console.log("je suis test " +test)
		}
	}
}*/

/*var prenom = ['Moussa', 'Afpa', 'Zak', 'Vanessa', 'Simon', 'Rim'];
		//		0			1		2		3		4			5


for (var etudiant = 0; etudiant < prenom.length; etudiant++){
	console.log(prenom[etudiant]
*/


//var nombre = prompt('Entez trois chiffres différents, svp');
var chiffre1 = prompt('premier chiffre')
console.log(chiffre1)
var chiffre2 = a('deuxième chiffre')
console.log(chiffre2)
var chiffre3 = prompt('troisième chiffre')
console.log(chiffre3)
var nombre = chiffre1+""+chiffre2+""+chiffre3
console.log(nombre);
if (isNaN(nombre)){
	prompt ('N affichez que des chiffres')
};
// Non pour la ligne 98 prompt n'est pas un nom de variable;
// D'accord, dois-je modifier parenthèses et accolades
// il fallait sauter une ligne ?!?
// NOn tu avais pas mis les accorlades
// if (ici on mets la condition ){ ici on mets les instructions }
//bien, mais alors pour le else, j'ai aussi besoin d'accolades ?
// oui par exmple if(Condition) { Insttruction} else {Instruction}
else {var chiffre1 = prompt('premier chiffre')
console.log(chiffre1)
var chiffre2 = prompt('deuxième chiffre')
console.log(chiffre2)
var chiffre3 = prompt('troisième chiffre')
console.log(chiffre3)
var nombre = chiffre1+""+chiffre2+""+chiffre3
console.log(nombre);}
// c'est pas un & il y'nen deux : && merci

if (chiffre1!=chiffre2 && chiffre1!=chiffre3 && chiffre2!=chiffre3) {console.log('saisie correcte')};
else {var chiffre1 = prompt('premier chiffre')
console.log(chiffre1)
var chiffre2 = prompt('deuxième chiffre')
console.log(chiffre2)
var chiffre3 = prompt('troisième chiffre')
console.log(chiffre3)
var nombre = chiffre1+""+chiffre2+""+chiffre3
console.log(nombre);}

if (chiffre1==chiffre2 && chiffre2==chiffre3) {console.log('les TROIS chiffres sont identiques')};
else {var chiffre1 == prompt('premier chiffre')
console.log(chiffre1)
var chiffre2 = prompt('deuxième chiffre')
console.log(chiffre2)
var chiffre3 = prompt('troisième chiffre')
console.log(chiffre3)
var nombre = chiffre1+""+chiffre2+""+chiffre3
console.log(nombre);}

if (chiffre1==chiffre2 || chiffre1==chiffre3 || chiffre2==chiffre3) {console.log('DEUX de vos chiffres sont identiques')};
// On va faire la correction

// Tu y es presque 
// Il me demande un seul fois de rentrer des chiffres alors le but est qu'il me 
// redemande si je me trompe ou je mets une chaine de caractére 
// C'est bon ? t
Oui, merci
//ok 