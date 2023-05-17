let monAge = 42;
let blag = "tu blagues ou bien";
console.log(monAge);
console.log(blag);

// Utiliser les constructeurs d'objet
// L'objet est de type 'Perso' qui contient les proprietes
// 'nom', 'prenom' et 'age'
function Perso(nom, prenom, age) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
}
// Creer une instance 'batman' de l'objet 'Perso' en utilisant 'new'
let batMan = new Perso("Wayne", "Bruce", 42);

console.log(batMan);

// on peut ajouter une propriete a un constructeur ou a un Object
// On peut meme ajouter un objet en propriete d'un objet
// en tapant le nom de l'objet sans guillement ni autre

batMan.pref = "nuit";

console.log(Perso);
console.log(batMan);

// SYNTAXE CONSTRUCTEUR D'OBJET - Les proprietes ont generalement
// le meme nom que les parametres, mais ce n'est pas une obligation

//function Nom(parametre1, parametre2, parametren, ...){
// 	this.propriete1 = parametre1(valeur passee en propriete est le parametre);
// 	this.propriete2 = parametre2;
// 	this.proprieten = parametren;
//	}

function Ticket(salle, rang, siege) {
  this.sa = salle;
  this.r = rang;
  this.si = siege;
}

let francois = new Ticket("A2", 3, 12);
francois.film = "batman forever";

console.log(francois);

// TABLEAUX
// ce sont des 'container'
// on y acced en faisant maCollectionDeFilms[0]ou [1], etc

// const maCollectionDeFilms = ["Titanic", "Le Seigneur des Anneaux"]

// --> ici on va acceder a la propriete 'length' de l'objet 'maCollectionDeFilms
// const nombreDeFilms = maCollectionDeFilms.length
// console.log(nombreDeFilms)
// nombreDeFilms vaut 2

// METHODES
// Les méthodes s’utilisent avec des parenthèses  ( )  .
// À l’intérieur de ces parenthèses vous pouvez passer des valeurs,
// c'est-à-dire des données, qui serviront à la méthode pour
// modifier les données de votre tableau.
// Vous avez déjà utilisé une méthode fournie par JavaScript :
// console.log() !
