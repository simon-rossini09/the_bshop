//C'est ici, que tu recupere la taille et le poids

$(document).ready(function () {
	//Quand je soumet le formulaire, je recupere la taile et le poids
	$('form').submit(function(){

		var taille = $('#taille').val();
		var poids = $('#poids').val();

		console.log(taille)
		console.log(poids)

		//var imc = taille/(poids * poids);
		var imc = poids/(taille * taille);

		//Juste pour voir le resultat 
		console.log(imc)

		$('#imc').text(imc)

		// MAintenant je vais faire des conditions pour vérifier les différents cas

		if (imc < 18.5) {
			$('#message').text('INsuffissant')
		}else if (imc > 18.5 && imc <29.9) {
			$('#message').text('Poids normal')

		}
		//Ainsi de suite selon les cas d'accord merci mais pourquoi
		//avoircréé cette classe text avec #imc ?


		// pour y mettre ton imc : imc = poids/(taille * taille);

		//regarde dans ton navigateur
		// c bon ?? c'est bizarre 

		//regarde mon navigateur
		// Tu lui donnes la taille 175 alors que sur le pdf c'est 1.75
		// tu donnes une taille en cm .,  lje lui donnes en métreok merci

		//regarde les consignes ou la régle de calcul d'un IMC dans le pdf fourni
		//c'est ce que j'ai fait mais j'ai dûmal lire
		//excusez-moi

		//  montre moi le pdf 
		// très bien ; au temps pour moi : excusez-moi d'avoir mal lu, même la consigne ! :-)
		// pas grave :)


		//Pas comme ça 
		//var diagnostic = function imc

		event.preventDefault();
	})
});