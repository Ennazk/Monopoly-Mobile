##############################################################
#                                                            #
#					Projet Génie Logiciel					 #
#		Monopoly - The Original Edition - iPad version       #
#                                                            #
##############################################################

----------------------------------------	
Auteurs :
----------------------------------------

	ENNAZK Yassir
	ESSAMGANI Mohammed Khalil
	MADANI Ismail

----------------------------------------	
Fichiers :
----------------------------------------

	Document						Chemin

	- Rapport									./Docs/Rapport.pdf
	- Diagrammes UML (format MagicDraw)			./Docs/DiagrammesUML/MagicDraw_UML
	- Diagrammes UML (format JPEG)				./Docs/DiagrammesUML/JPEG
	- Présentation PowerPoint					./Docs/Slide.pptx
	- Fichiers images sources					./Sources/psd
	- Source (Version web)						./Sources/src_webkit
	- Source iPad								./Sources/src_xcode

----------------------------------------	
Licence :
----------------------------------------

Ce projet utilise les technologies suivantes :

 	- La version Open Source de Sencha Touch 1.1, publiée sous la licence GPL que vous pouvez lire sur ce lien : http://www.gnu.org/copyleft/gpl.html
	- PhoneGap, publié sous la licence Apache disponible sur le site officiel : http://phonegap.com/about/license/
	
	- Les images utilisées dans cette application sont la propriété de leurs propriétaires respectifs.
	
	- Vous êtes libre d'utiliser cette application et de la modifier comme bon vous semble du moment où il ne s'agit pas d'un usage commercial.
	
----------------------------------------
Installation et utilisation :
----------------------------------------

Le projet est livré en deux verisons :

	- Version web
		- Prérequis
			- Un navigateur basé sur le moteur WebKit (Google Chrome ou Apple Safari)
		- Utilisation
			- Il suffit de lancer le fichier ./Sources/src_webkit/index.html dans l'un des navigateurs mentionnés

	- Une version iOS pour iPad et iPad 2
		- Prérequis
			- Pour un déployement sur un iPad, une licence iOS Developer que vous pouvez avoir pour 99$ auprès de Apple ici http://developer.apple.com/ est requise
			- Un Mac avec processeur Intel qui tourne sous OS X Snow Leopard ou plus
			- Xcode version 4.0 ou plus
			- Version iOS de PhoneGap 1.3 ou plus installée (Téléchargeable ici : http://phonegap.com/download-thankyou)

		- Déployement
			- Ouvrir le fichier ./Sources/src_xcode/Monopoly.xcodeproj dans Xcode
			- Choisir entre le iPad Simulator ou votre iPad physique (lisense requise)
			- Build and Run!