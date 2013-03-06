var chosenNumber;
var chosenNumberStr;
var minValue;
var maxValue;
var nbrVaches;
var nbrTaureaux;
var essais;
var historique;

function vacheTaureau_NouvellePartie(min, max) {
	minValue = min;
	maxValue = max;
	chosenNumber = (Math.random() * (maxValue - minValue)) + minValue;
	chosenNumber = Math.round(chosenNumber);
	chosenNumberStr = chosenNumber.toString();
	essais = 0;
	nbrVaches = 0;
	nbrTaureaux = 0;
	historique = [];
}

function checkNumber(nbr) {
	if ((nbr >= minValue) && (nbr <= maxValue)) {
		return true;
	}
	return false;
}

function checkNumber_str(nbr_str) {
	var nbr = parseInt(nbr_str);
	return checkNumber(nbr);
}

function strVache(n) {
	var res = "";
	switch (n) {

	case 0:
		res = "aucune vache";
		break;

	case 1:
		res = "une vache";
		break;

	case 2:
		res = "deux vaches";
		break;

	case 3:
		res = "trois vaches";
		break;

	case 4:
		res = "quatres vaches";
		break;
	default:
		res = "Erreur!";
	}
	return res;
}

function strTaureau(n) {
	var res = "";
	switch (n) {

	case 0:
		res = "aucun taureau";
		break;

	case 1:
		res = "un taureau. Vous avancez!";
		break;

	case 2:
		res = "deux taureaux. C''est bien!";
		break;

	case 3:
		res = "trois taureaux. Encore un peu et vous y étes!";
		break;

	case 4:
		res = "quatre taureaux!";
		break;
	default:
		res = "Erreur!";
	}
	return res;
}
function verif(p) {
	var t = 0, i = 0, j = 0, v = 0;
	var res;
	for (i = 0; i < chosenNumberStr.length; i++) {
		j = -1;
		do {
			j++;
		} while ((chosenNumberStr.charAt(i) != p.charAt(j))
				&& (chosenNumberStr.charAt(i) == p.charAt(j)));
		if (chosenNumberStr.charAt(i) == p.charAt(i)) {
			t++;
		} else if ((j != i) && (chosenNumberStr.charAt(i) == p.charAt(j))) {
			v++;
		}

	}
	var currentdate = new Date();
	var datetime = "" + currentdate.getDate() + "/"
			+ (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear()
			+ " @ " + currentdate.getHours() + ":" + currentdate.getMinutes()
			+ ":" + currentdate.getSeconds();
	res = [ t, v ];
	nbrTaureaux = t;
	nbrVaches = v;
	historique[essais] = [ t, v, datetime ];
	essais++;
	return res;
}