//Créé par Benjamin Pradon
//Commencé le 05/10/17
//-------------------------------------------------
//-------------------------------------------------

var question ='0';
var question = '<h1>Bonjour, mon nom est Benjamin Pradon et je suis un bot. Je suis en cours de création. Si je ne réponds pas bien ou pas correctement à vous questions, soyez indulgent ou contactez mon créateur par mail :D Maintenant, comment puis-je vous aider? </h1>'; // Question
function creerBouton() {
	var choix_1 ;
		{
			var button = document.createElement("input" ) ;                     // Création du bouton: "Formation" pour le choix_1
			button.type = "button_1" ;
			button.value = "Formation";
			button.name = "Formation";
			button.setAttribute("onClick","Formation") ;
			
			var button = document.createElement("input" ) ;                      // Création du bouton: "Expérience Professionnelle" pour le choix_1
			button.type = "button_2" ;											
			button.value = "Experience_Professionnelle";
			button.name = "Experience Professionnelle";
			button.setAttribute("onClick","Experience Professionnelle") ;
			
			var button = document.createElement("input" ) ;                        // Création du bouton: "Intérêt" pour le choix_1
			button.type = "button_3" ;												
			button.value = "Interet";
			button.name = "Intérêt";
			button.setAttribute("onClick","Intérêt") ;
			
		}
	}
	if(choix_1 == "Experience_Professionnelle"){
		function creerBouton() {
			var choix_2 ;

			var button = document.createElement("input" ) ;                     // Si le choix_1 a été "Experience_Professionnelle", l'utilisateur aura 2 choix: il pourra cliquer sur le bouton "Stage" ou sur le bouton "Vie Active"
			button.type = "button_2.1" ;
			button.value = "Stage";
			button.name = "Stage";
			button.setAttribute("onClick","Stage") ;
			
			var button = document.createElement("input" ) ;                      // Si le choix_1 a été "Experience_Professionnelle", l'utilisateur aura 2 choix: il pourra cliquer sur le bouton "Stage" ou sur le bouton "Vie Active"
			button.type = "button_2.2" ;
			button.value = "Vie_Active";
			button.name = "Vie Active";
			button.setAttribute("onClick","Vie Active") ;
		}
	}		
	else{
		return question;
	}

	if(choix_2 == "Stage"){
		function creerBouton() {
			var choix_3 ;

			var button = document.createElement("input" ) ;                     // Si le choix_1 a été "Experience_Professionnelle",  que le choix_2 a été "Stage", l'utilisateur aura 2 choix: il pourra cliquer sur le bouton "Stage de fin d'étude" ou sur le bouton "Stage de web développeur"
			button.type = "button_3.1" ;
			button.value = "Stage_de_fin_d'étude_CSC";
			button.name = "Stage de fin d'étude : CSC";
			button.setAttribute("onClick","Stage de fin d'étude : CSC") ;
			
			var button = document.createElement("input" ) ;                      // Si le choix_1 a été "Experience_Professionnelle",  que le choix_2 a été "Stage", l'utilisateur aura 2 choix: il pourra cliquer sur le bouton "Stage de fin d'étude" ou sur le bouton "Stage de web développeur"
			button.type = "button_3.2" ;
			button.value = "Stage_en_web_développeur";
			button.name = "Stage en web développeur";
			button.setAttribute("onClick","Stage en web développeur") ;
		}
	}
	else{
		return choix_2
	}

	if(choix_3 == "Stage de fin d'étude : CSC"){
		function creerBouton() {
			var choix_4 ;

			var button = document.createElement("input" ) ;                     // Si le choix_1 a été "Experience_Professionnelle",  que le choix_2 a été "Stage", que le choix 3 a été le stage de fin d'étude: CSC, l'utilisateur aura 2 choix: il pourra cliquer sur le bouton "Sur quoi ai-je travaillé" ou sur le bouton "Quels étaient les raisons du départ"
			button.type = "button_4.1" ;
			button.value = "Sur_quoi_ai-je_travaille";
			button.name = "Sur quoi ai-je travaillé?";
			button.setAttribute("onClick","Sur quoi ai-je travaillé?") ;
			
			var button = document.createElement("input" ) ;                      // Si le choix_1 a été "Experience_Professionnelle",  que le choix_2 a été "Stage", que le choix 3 a été le stage de fin d'étude: CSC, l'utilisateur aura 2 choix: il pourra cliquer sur le bouton "Sur quoi ai-je travaillé" ou sur le bouton "Quels étaient les raisons du départ"
			button.type = "button_4.2" ;
			button.value = "Quels_étaient_les_raisons_du_départ";
			button.name = "Quels étaient les raisons du départ";
			button.setAttribute("onClick","Quels étaient les raisons du départ") ;
		}
	}
	else{
		return choix_3
	}

	if(choix_4 == "Sur quoi ai-je travaillé"){
		function creerBouton() {
			var choix_5 ;

			var button = document.createElement("input" ) ;                     // Si le choix_1 a été "Experience_Professionnelle",  que le choix_2 a été "Stage", que le choix 3 a été le stage de fin d'étude: CSC, que le choix_4 a été "Sur quoi ai-je travaillé" l'utilisateur aura 1 choix: la réponse finale.
			button.type = "button_4.1" ;
			button.value = "Réponse_1";
			button.name = "Pendant 6 mois, j'ai travaillé sur la technologies Salesforce....";
			button.setAttribute("onClick","Pendant_6_mois_j_ai_travaillé_sur_la_technologies_Salesforce") ;
		}
	}
	else{
		return choix_4
		}

	if(choix_5 == "Reponse_1"){
		console.log("Pendant 6 mois, j'ai travaillé sur la technologie Salesforce...")
	}