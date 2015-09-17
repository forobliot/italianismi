'use strict';

var languageMap= {
	subtitle1: {
		ita: 'Parole Italiane della cucina',
		eng: 'Italian words regarding cuisine'
	},
	subtitle2: {
		ita: 'nelle lingue del mondo',
		eng: 'in world languages'
	},
	mainBack: {
		ita: 'Torna',
		eng: 'Back'
	},
	mainAntipasto: {
		ita: 'Antipasto per cominciare',
		eng: 'Starters, to begin with'
	},
	mainEnter: {
		ita: 'Entra',
		eng: 'Enter'
	},
	mainSearch: {
		ita: 'Cerca una parola italiana<br>e scopri dove viene usata',
		eng: 'Search for an Italian word<br>and discover how it is used'
	},
	mainOtherwise: {
		ita: 'Oppure',
		eng: 'Or'
	},
	mainContinue: {
		ita: 'Continua a leggere',
		eng: 'Keep reading'
	},
	menuItem1: {
		ita: 'Antipasto<br>per cominciare',
		eng: 'Menu<br>Item 1'
	},
	menuItem2: {
		ita: 'Seleziona una<br>lingua straniera',
		eng: 'Choose a<br>foreign language'
	},
	menuItem3: {
		ita: 'Cerca una<br>parola italiana',
		eng: 'Search for<br>an Italian word'
	},
	menuItem4: {
		ita: 'Aggiungi una<br>parola Straniera',
		eng: 'Add a<br>foreign word'
	},
	vivit1: {
		ita: '<br>Gli italianismi nel mondo costituiscono un fenomeno di grande ampiezza, che registra, secondo le indagini più recenti, oltre ventimila parole e interessa un numero non definito, ma comunque alto, di lingue. La maggior parte degli italianismi, cioè delle parole italiane più diffuse all\'estero, viene dal mondo della cultura.',
		eng: '<br>Italianisms are a wide-spread phenomenon, showing, according to recent surveys, over twenty thousand words involving an undefined but large number of languages. Most Italianisms, Italian words commonly used abroad, come from the world of culture.'
	},
	vivit2: {
		ita: '<br>Sono molto diffuse anche le parole della cucina, come mostra il numero degli italianismi relativi all\'alimentazione entrati in inglese nel Novecento: nella prima metà del secolo rappresentano infatti un quarto del totale, sono circa la metà nel periodo successivo e giungono a superare il 70% verso la fine.',
		eng: '<br>Words regarding food and cooking are also wide-spread, as shown by the number of Italianisms about food that entered English during the twentieth century. Up to the 1950’s, theywere a quarter of the total, about half in the next period and exceeded 70% towards the end.'
	},
	vivit3: {
		ita: '<br>Termini d\'origine italiana relativi alla gastronomia si ritrovano nelle lingue europee già nel XVI secolo: ad esempio, maccheroni nella forma adattata macarrones è attestato per la prima volta in spagnolo nel 1517 (macarons, poi macaroni in francese, 1599; macaroni in inglese, 1599).',
		eng: '<br>Terms of Italian origin related to food were found in European languages starting in the sixteenth century. For example, macaroni in the form adattata macarrones appeared for the first time in Spanish in 1517 (macarons, then macaroni in French, 1599 in English macaroni, 1599).'
	},
	vivit4: {
		ita: '<br><br>Sono di diffusione molto antica pure mortadella in francese (mortadelle, XV secolo) e vermicelli in francese (vermicelle, 1553) e inglese (vermicelli, 1669).',
		eng: '<br><br>Mortadella also appared early on in French (mortadelle, XV century) as did vermicelli in French (vermicelle, 1553) and English (vermicelli, 1669).'
	},
	vivit5: {
		ita: '<br><br>Parole come antipasto, polenta, bologna sono documentati nei dizionari inglesi a partire dal Cinquecento; le lasagne entrano in francese nello stesso secolo.',
		eng: '<br><br>Words like antipasto, polenta, bologna appear in 16th century English dictionaries; lasagna entered French during the same century.'
	},
	vivit6: {
		ita: '<br><br>La fortuna internazionale della parola confetti Risale alla fine del Settecento. Le parole pappardelle e il panettone fanno il loro ingresso in inglese alla fine del XIX secolo.',
		eng: '<br><br>The international success of the word confetti dates from the late eighteenth century. The words pappardelle and panettone entered English at the end of the nineteenth century.'
	},
	vivit7: {
		ita: '<br><br>Si riscontrano numerosi italianismi gastronomici recenti, molti dei quali sono fortemente connessi al fenomeno dell\'emigrazione.',
		eng: '<br><br>There are many recent Italianisms related to gastronomy, many of which are strongly linked to the phenomenon of emigration.'
	},
	vivit8: {
		ita: '<br>La fortuna americana di termini come lasagne (1846), salami (1852), risotto (1855), ricotta (1877), spaghetti (1888), mozzarella (1911), rigatoni (1923), scampi (1923), ziti, zucchini, prosciutto (1929), pizza (1935) è da mettere in relazione con la forte presenza della comunità di italo-americani.',
		eng: '<br>In America the success of words like lasagne (1846), salami (1852), risotto (1855), ricotta (1877), spaghetti (1888), mozzarella (1911), rigatoni (1923), scampi (1923), ziti, zucchini, prosciutto (1929), pizza (1935) is to related to the strong presence of the Italian-American community.'
	},
	vivit9: {
		ita: '<br>Il fenomeno dell\'italianismo è vivissimo soprattutto nel Novecento, e particolarmente negli ultimi decenni, grazie al rinnovato prestigio della nostra lingua nel mondo legato al successo internazionale dei prodotti made in Italy, sinonimo di eccellenza e di qualità, nei settori della gastronomia, della moda, delle produzioni manufatturiere.',
		eng: '<br>The Italianism phenomenon was very much alive in the twentieth century, and has continued to be so in recent decades, thanks to the renewed global prestige of the Italian language connected to the international success of products made-in-Italy, synonymous with quality and excellence, in the areas of food, fashion, and manufacturing.'
	},
	vivit10: {
		ita: 'Col diffondersi all\'estero di nuovi prodotti e piatti della cucina italiana, si assesta un folto gruppo di italianismi gastronomici: non vi è ormai luogo del pianeta in cui non si utilizzino termini come pizza (oggi la parola italiana più nota nel mondo insieme a ciao), spaghetti, espresso e cappuccino, seguiti da cannelloni, mortadella, panna, ravioli, risotto, salame, mediamente noti in una trentina di lingue.',
		eng: 'With the spread of new products and Italian dishes abroad, a large group of Italianisms related to gastronomy developed.  There is no place on the planet where terms like pizza (now the most famous Italian word in the world, along with ciao), spaghetti, espresso and cappuccino, followed by cannelloni, mortadella, panna, ravioli, risotto, salame, are not known and used, currently in about 30 different languages.'
	},
	vivit11: {
		ita: '<br>Dagli anni settanta e ottanta del Novecento si sono rapidamente affermati, tra gli altri, bruschetta, carpaccio, ciabatta (reso plurale nella forma ciabattas),pesto, rucola, tiramisù (una parola presente in oltre venti lingue, tra cui giapponese, indonesiano, thai e laotiano).',
		eng: '<br>During the seventies and eighties many Italiamisma were rapidly established, among them: bruschetta, carpaccio, ciabatta (often used in the plural form ciabattas),pesto, rucola, tiramisù (present in more than 20 languages, including Japanese, Indonesian, Thai and Laotian).'
	},
	vivit12: {
		ita: '<br><br>Non mancano infine termini anche più specifici, quali ad esempio parmigiano, mozzarella, olio d\'oliva, aceto balsamico, così come fra i formati di pasta le farfalle sono ormai conosciute quasi quanto le tagliatelle.',
		eng: '<br><br>Finally, there are also more specific terms, such as, parmigiano, mozzarella, olio d\'oliva, aceto balsamico, and certain types of pasta, like farfalle are as well-known as tagliatelle.'
	},
	languageTitle1: {
		ita: 'Parole italiane della cucina nelle lingue del mondo',
		eng: 'Italian words regarding cuisine in world languages'
	},
	languageTitle2: {
		ita: 'Seleziona una lingua',
		eng: 'Choose a language'
	},
	languageTitle3: {
		ita: 'Dove si usa la parola',
		eng: 'Where the word isused'
	},
	termsTitle1: {
		ita: 'Parole italiane della cucina nelle lingue del mondo',
		eng: 'Italian words regarding cuisine in world languages'
	},
	termsTitle2: {
		ita: 'Parole italiane',
		eng: 'Italian words'
	},
	termsTitle3: {
		ita: 'Usate nel mondo',
		eng: 'Used in the world'
	},
	termsTitle4: {
		ita: 'Parole italiane in',
		eng: 'Italian words in'
	},
	termsSearchPH: {
		ita: 'Cerca una parola',
		eng: 'Search for a word'
	},
	termsNotFound: {
		ita: 'Non è stata trovata nessuna parola corrispondente alla tua ricerca. <br> Desideri aggiungere il termine cercato?',
		eng: 'No words match your search.<br>Would you like to add the search term?'
	},
	termsNotFoundLink: {
		ita: 'Aggiungi una parola straniera',
		eng: 'Add a foreign word'
	},
	cardSentence1: {
		ita: 'Parole italiane della cucina nelle lingue del mondo',
		eng: 'Italian words regarding cuisine in world languages'
	},
	cardSentence2: {
		ita: 'Parola Italiana',
		eng: 'Italian word'
	},
	cardSentence3: {
		ita: 'Italianismo',
		eng: 'Italianism'
	},
	cardSentence4: {
		ita: 'Questa parola è presente in',
		eng: 'This word is present in'
	},
	cardSentence5: {
		ita: 'Lingua selezionata',
		eng: 'Language selected'
	},
	formTitle: {
		ita: 'Aggiungi una parola straniera',
		eng: 'Add a word foreign word'
	},
	formText: {
		ita: 'Lo scopo del progetto è Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
		eng: 'sentence'
	},
	formPh1: {
		ita: 'Nome / Cognome',
		eng: 'Name / Surname'
	},
	formPh2: {
		ita: 'E-mail',
		eng: 'E-mail address'
	},
	formPh3: {
		ita: 'Nuova Parola',
		eng: 'New word'
	},
	formPh4: {
		ita: 'Lingua',
		eng: 'Language'
	},
	formPh5: {
		ita: 'Significato e note',
		eng: 'Meaning and notes'
	},
	formSubmit: {
		ita: 'Invia',
		eng: 'Send'
	},
	formCancel: {
		ita: 'Annulla',
		eng: 'Cancel'
	},
	confirmText1: {
		ita: 'Grazie $$name.<br>The word <span>$$term</span> è stata inserita<br> fra gli italianismi in lingua <span>$$language</span>',
		eng: 'Thank you $$name,<br> $$term has been added to Italianisms in the $$language language'
	},
	confirmText2: {
		ita: 'Il tuo aiuto è prezioso per arricchire<br>il nostro “vocabolario degli italianismi”.<br>Conosci altri termini utili?',
		eng: 'Thank you for help in enrich the “Archivio internazionale delle parole italiane della cucina”.<br>Do you know other words?'
	}
}

/**
 * @ngdoc overview
 * @name italianismiApp
 * @description
 * # italianismiApp
 *
 * Main module of the application.
 */
angular
  .module('italianismiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/terms/:language?/:search?', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl',
        resolve: {
          terms: function(engine) {
            return engine.termsPromise;
          }
        }
      })
      .when('/languages/:term?/:language?/:search?', {
        templateUrl: 'views/languages.html',
        controller: 'LanguagesCtrl',
        resolve: {
          languages: function(engine) {
            return engine.termsPromise && engine.languagePromise;
          }
        }
      })
      .when('/card/:term?/:language?/:search?', {
        templateUrl: 'views/card.html',
        controller: 'CardCtrl',
        resolve: {
          terms: function(engine) {
            return engine.termsPromise
          },
		  languages: function(engine) {
			return engine.languagePromise;  
		  }
        }
      })
      .when('/vivit', {
        templateUrl: 'views/vivit.html',
        controller: 'VivitCtrl'
      })
      .when('/form/:term?', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .when('/credits', {
        templateUrl: 'views/credits.html',
        controller: 'CreditsCtrl'
      })
      .when('/confirm/:name/:term/:language', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $window, $location, $templateCache, engine) {
	  $rootScope.languageSel = engine.getLanguage();
	  $rootScope.languageMap = languageMap;
	  
	  $rootScope.changeLanguage = function(language) {
		  if ($rootScope.languageSel !== language) {
			  engine.setLanguage(language);
			  $window.location.reload();
		  }
	  }
	  
	  $rootScope.go = function(path) {
		  $location.path(path);
	  }

	  $rootScope.goBack = function(path) {
		  window.history.back();;
	  }
});


window.idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 1 second

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        window.idleTime = 0;
    });
    $(this).keypress(function (e) {
        window.idleTime = 0;
    });

	
	var initKeyboard = function() {
		if ($('#virtualKeyboardChromeExtensionOverlayScrollExtend').length) {
			$('#virtualKeyboardChromeExtensionOverlayScrollExtend').attrchange({
				callback: function (event) { 
					if ($('#virtualKeyboardChromeExtensionOverlayScrollExtend').css('display') === 'none') {
						$( 'input' ).blur();
						$('html').animate({top: '0'});
					}
					else {
						if ($('#formverde').length)
						{
							$('html').animate({top: '-250px'});
						}        
					}
				}
			});	
		}
		else {
			setTimeout(initKeyboard, 100);
		}
	};
	initKeyboard();

});

function timerIncrement() {
    window.idleTime = window.idleTime + 1;
    if (window.idleTime > 119 && window.location.hash !== '#/') { // 2 minutes
        window.location = '.';
    }
}  