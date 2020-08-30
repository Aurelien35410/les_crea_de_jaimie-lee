const article =[];
const articleNaissance =[];
const articleMode =[];
const articleCuisine =[];
const articleBeaute =[];
var basket =[];

const objet101 = {
  id: 101,
  photo: "img/obj101",
  titre: "Bavoir bandana",
  description: "Bavoir pour protéger bébé, lorsqu'il boit son biberon. Bavoir en tissu et tissu éponge",
  prix: 1.00,
  categorie: "Naissance",
  quantite: 0
};

articleNaissance.push(objet101);

const objet102 = {
  id: 102,
  photo: "img/obj102",
  titre: "Couverture",
  description: "Couverture pour protéger bébé du froid. Couverture en tissu",
  prix: 10.00,
  categorie: "Naissance",
  quantite: 0
};

articleNaissance.push(objet102);

const objet103 = {
  id: 103,
  photo: "img/obj103",
  titre: "Protège carnet de santé",
  description: "Protège carnet de santé pour protéger votre carnet de santé avec style. En tissu",
  prix: 5.00,
  categorie: "Naissance",
  quantite: 0
};

articleNaissance.push(objet103);

const objet104 = {
  id: 104,
  photo: "img/obj104",
  titre: "Doudou",
  description: "Doudou qui sera le meilleur ami de votre bébé. En tissu",
  prix: 5.00,
  categorie: "Naisssance",
  quantite: 0
};

articleNaissance.push(objet104);

const objet105 = {
  id: 105,
  photo: "img/obj105",
  titre: "Headband",
  description: "Headband pour qui ira à ravir à votre fille. En tissu",
  prix: 2.00,
  categorie: "Naissance",
  quantite: 0
};

articleNaissance.push(objet105);

const objet106 = {
  id: 106,
  photo: "img/obj106",
  titre: "Guirlande de fanions",
  description: "Guirlande de fanion pour décorer la chambre de bébé. En tissu",
  prix: 2.00,
  categorie: "Naissance",
  quantite: 0
};

articleNaissance.push(objet106);

const objet107 = {
  id: 107,
  photo: "img/obj107",
  titre: "Lingettes",
  description: "Lingettes pour nettoyer les fesse de bébé. Plus écologique et économique que les lingettes en coton. En tissu et tissu éponge",
  prix: 10.00,
  categorie: "Naissance",
  quantite: 0
};

articleNaissance.push(objet107);

const objet201 = {
  id: 201,
  photo: "img/obj201",
  titre: "Robe",
  description: "Robe d'été en tissu. Plusieurs tailles diponible",
  prix: 10.00,
  categorie: "Mode",
  quantite: 0
};

articleMode.push(objet201);

const objet202 = {
  id: 202,
  photo: "img/obj202",
  titre: "Sac Dragon",
  description: "Sac tendance idéale pour faire ses courses. En tissu et simili-cuir",
  prix: 30.00,
  categorie: "Mode",
  quantite: 0
};

articleMode.push(objet202);

const objet203 = {
  id: 203,
  photo: "img/obj203",
  titre: "Tote bag",
  description: "Sac tendance idéal pour la plage. En tissu",
  prix: 20.00,
  categorie: "Mode",
  quantite: 0
};

articleMode.push(objet203);

const objet301 = {
  id: 301,
  photo: "img/obj301",
  titre: "Sac à tarte",
  description: "Sac à tarte idéal pour transporter vos tartes et gateaux circulaires. En tissu",
  prix: 10.00,
  categorie: "Cuisine",
  quantite: 0
};

articleCuisine.push(objet301);

const objet302 = {
  id: 302,
  photo: "img/obj302",
  titre: "Essuie-tout",
  description: "Essuie-tout écologique et économique pour remplacer votre essuie-tout papier. En tissu et tissu éponge",
  prix: 2.00,
  categorie: "Cuisine",
  quantite: 0
};

articleCuisine.push(objet302);

const objet401 = {
  id: 401,
  photo: "img/obj401",
  titre: "Panier et lingettes démaquillantes",
  description: "Panier avec lingettes démaquillantes écologique et économique pour remplacer vos lingettes en coton. En tissu et tissu éponge",
  prix: 10.00,
  categorie: "Beauté",
  quantite: 0
};

articleBeaute.push(objet401);

const objet402 = {
  id: 402,
  photo: "img/obj402",
  titre: "Panier à maquillage",
  description: "Panier pour ranger votre maquillage. En tissu",
  prix: 10.00,
  categorie: "Beauté",
  quantite: 0
};

articleBeaute.push(objet402);

var naissanceInput = document.querySelector("input[name='naissance']");
var modeInput = document.querySelector("input[name='mode']");
var cuisineInput = document.querySelector("input[name='cuisine']");
var beauteInput = document.querySelector("input[name='beaute']");
var articleDisplay = document.querySelector("#articleDisplay");
var badge = document.querySelector("#badge");
var basketButton = document.querySelector("#basketButton");
var shop_direction = document.querySelector("#shop_direction");
var shop_page = document.querySelector("#shop_page");
var basket_page = document.querySelector("#basket_page");
var empty_basket = document.querySelector("#empty_basket");
var validate_order = document.querySelector("#validate_order");

var naissance = true;
var mode = true;
var cuisine = true;
var beaute = true;


console.log(article);

window.onload = naissanceDisplay();
window.onload = modeDisplay();
window.onload = cuisineDisplay();
window.onload = beauteDisplay();

naissanceInput.addEventListener('change', (e) => {
  e.preventDefault();
  if (naissance == false) {
    naissance = true;
  } else {
    naissance = false;
  }
  naissanceDisplay();
});

modeInput.addEventListener('change', (e) => {
  e.preventDefault();
  if (mode == false) {
    mode = true;
  } else {
    mode = false;
  }
  modeDisplay();
});

cuisineInput.addEventListener('change', (e) => {
  e.preventDefault();
  if (cuisine == false) {
    cuisine = true;
  } else {
    cuisine = false;
  }
  cuisineDisplay();
});

beauteInput.addEventListener('change', (e) => {
  e.preventDefault();
  if (beaute == false) {
    beaute = true;
  } else {
    beaute = false;
  }
  beauteDisplay();
});

function naissanceDisplay () {
  switch (naissance) {
    case true:
      articleNaissanceDiv = document.createElement('div');
      articleNaissanceDiv.className = "articleNaissanceDiv"
      articleDisplay.appendChild(articleNaissanceDiv);
      articleNaissance.forEach((article, i) => {
        for (var i = 0; i < 1; i++) {
          uniqueNaissanceArticle = document.createElement('div');
          uniqueNaissanceArticle.className = "uniqueNaissanceArticle";
          articleNaissanceDiv.appendChild(uniqueNaissanceArticle);
          uniqueNaissanceArticle.innerHTML = article.titre+"</br>"+article.description+"</br>"+"Prix: "+article.prix+"€";
          uniqueNaissanceArticle.setAttribute("value", article);
        }
        uniqueNaissanceArticle.addEventListener('click' , function () {
          quantiteUtilisateur = prompt("Quantité?")
          if (isNaN(quantiteUtilisateur) || quantiteUtilisateur<1 || Number.isInteger(quantiteUtilisateur))   {
            alert("Vous devez renseigner un nombre entier supérieur à 0, veuillez reselectionner l'article pour recommencer");
          }
          else {
            article.quantite = quantiteUtilisateur;
            console.log(article);
            basket.push(article);
            basketAlert();
          }
        })
      })
      break;
    case false:
      articleDisplay.removeChild(articleNaissanceDiv);
      break;
  }
}

function modeDisplay () {
  switch (mode) {
    case true:
    articleModeDiv = document.createElement('div');
    articleModeDiv.className = "articleModeDiv"
    articleDisplay.appendChild(articleModeDiv);
    articleMode.forEach((article, i) => {
      for (var i = 0; i < 1; i++) {
        uniqueModeArticle = document.createElement('div');
        uniqueModeArticle.className = "uniqueModeArticle";
        articleModeDiv.appendChild(uniqueModeArticle);
        uniqueModeArticle.innerHTML = article.titre+"</br>"+article.description+"</br>"+"Prix: "+article.prix+"€";
        uniqueModeArticle.setAttribute("value", article);
        }
        uniqueModeArticle.addEventListener('click', function () {
          quantiteUtilisateur = prompt("Quantité?")
          if (isNaN(quantiteUtilisateur) || quantiteUtilisateur<1 || Number.isInteger(quantiteUtilisateur))   {
            alert("Vous devez renseigner un nombre entier supérieur à 0, veuillez reselectionner l'article pour recommencer");
          }
          else {
            article.quantite = quantiteUtilisateur;
            console.log(article);
            basket.push(article);
            basketAlert();
          }
        })
    })
      break;
    case false:
      articleDisplay.removeChild(articleModeDiv);
      break;
  }
}

function cuisineDisplay () {
  switch (cuisine) {
    case true:
    articleCuisineDiv = document.createElement('div');
    articleCuisineDiv.className = "articleCuisineDiv"
    articleDisplay.appendChild(articleCuisineDiv);
    articleCuisine.forEach((article, i) => {
      for (var i = 0; i < 1; i++) {
        uniqueCuisineArticle = document.createElement('div');
        uniqueCuisineArticle.className = "uniqueCuisineArticle";
        articleCuisineDiv.appendChild(uniqueCuisineArticle);
        uniqueCuisineArticle.innerHTML = article.titre+"</br>"+article.description+"</br>"+"Prix: "+article.prix+"€";
        uniqueCuisineArticle.setAttribute("value", article);
        }
        uniqueCuisineArticle.addEventListener('click' , function () {
          quantiteUtilisateur = prompt("Quantité?")
          if (isNaN(quantiteUtilisateur) || quantiteUtilisateur<1 || Number.isInteger(quantiteUtilisateur))   {
            alert("Vous devez renseigner un nombre entier supérieur à 0, veuillez reselectionner l'article pour recommencer");
          }
          else {
            article.quantite = quantiteUtilisateur;
            console.log(article);
            basket.push(article);
            basketAlert();
          }
        })
    })
      break;
    case false:
      articleDisplay.removeChild(articleCuisineDiv);
      break;
  }
}

function beauteDisplay () {
  switch (beaute) {
    case true:
    articleBeauteDiv = document.createElement('div');
    articleBeauteDiv.className = "articleBeauteDiv"
    articleDisplay.appendChild(articleBeauteDiv);
    articleBeaute.forEach((article, i) => {
      for (var i = 0; i < 1; i++) {
        uniqueBeauteArticle = document.createElement('div');
        uniqueBeauteArticle.className = "uniqueBeauteArticle"
        articleBeauteDiv.appendChild(uniqueBeauteArticle);
        uniqueBeauteArticle.innerHTML = article.titre+"</br>"+article.description+"</br>"+"Prix: "+article.prix+"€";
        uniqueBeauteArticle.setAttribute("value", article);
        }
        uniqueBeauteArticle.addEventListener('click' , function () {
          quantiteUtilisateur = prompt("Quantité?")
          if (isNaN(quantiteUtilisateur) || quantiteUtilisateur<1 || Number.isInteger(quantiteUtilisateur))   {
            alert("Vous devez renseigner un nombre entier supérieur à 0, veuillez reselectionner l'article pour recommencer");
          }
          else {
            article.quantite = quantiteUtilisateur;
            console.log(article);
            basket.push(article);
            basketAlert();
          }
        })
    })
      break;
    case false:
      articleDisplay.removeChild(articleBeauteDiv);
      break;
  }
}

function basketAlert () {
    if (basket.length == 0) {
      badge.innerHTML = "0";
    }
    else {
      badge.innerHTML = basket.length;
    }
  }

  window.onload = basketAlert();
  window.onload = basket_page.style.display = "none";

  basketButton.addEventListener('click', (e) => {
    e.preventDefault();
    shop_page.style.display = "none";
    basket_page.style.display = "block";
    basketDisplay.innerHTML = "";
    basketListGenerator();
  });

  shop_direction.addEventListener('click', (e) => {
    e.preventDefault();
    shop_page.style.display = "block";
    basket_page.style.display = "none";
  })



    function basketListGenerator () {
      basketList = document.createElement('table');
      basketList.className = "basketList";
      basketDisplay.appendChild(basketList);
      basketItemRow = document.createElement('tr');
      basketList.appendChild(basketItemRow);
      basketItemId = document.createElement('td');
      basketItemRow.appendChild(basketItemId);
      basketItemId.innerHTML = "Référence";
      basketItemDescritption = document.createElement('td');
      basketItemRow.appendChild(basketItemDescritption);
      basketItemDescritption.innerHTML = "Description de l'article";
      basketItemQuantite = document.createElement('td');
      basketItemRow.appendChild(basketItemQuantite);
      basketItemQuantite.innerHTML = "Quantité";
      basketItemUnitaire = document.createElement('td');
      basketItemRow.appendChild(basketItemUnitaire);
      basketItemUnitaire.innerHTML = "Prix Unitaire";
      basketItemTotal = document.createElement('td');
      basketItemRow.appendChild(basketItemTotal);
      basketItemTotal.innerHTML = "Prix Total";

      basket.forEach((basketArticle, j) => {
        for (var i = 0; i < 1; i++) {
          itemBasket = document.createElement('tr');
          itemBasket.className = "itemBasket";
          basketList.appendChild(itemBasket);
          itemReference = document.createElement('td');
          itemBasket.appendChild(itemReference);
          itemReference.innerHTML = basketArticle.id;
          itemDescription = document.createElement('td');
          itemBasket.appendChild(itemDescription);
          itemDescription.innerHTML = basketArticle.titre;
          itemQuantite = document.createElement('td');
          itemBasket.appendChild(itemQuantite);
          itemQuantite.innerHTML = basketArticle.quantite;
          itemUnitaire = document.createElement('td');
          itemBasket.appendChild(itemUnitaire);
          itemUnitaire.innerHTML = basketArticle.prix;
          itemTotal = document.createElement('td');
          itemBasket.appendChild(itemTotal);
          itemTotalCalculator = basketArticle.quantite*basketArticle.prix;
          itemTotal.innerHTML = itemTotalCalculator;
          }
      });

      }

      empty_basket.addEventListener('click', (e) => {
        e.preventDefault();
        basket = [];
        basketDisplay.removeChild(basketList);
        basketListGenerator();
        basketAlert();
      })

      validate_order.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Ceci est un site de démonstration, vous ne pouvez pas commander réellement. Cependant, je vous remercie d'avoir pris le temps de l'explorer");
      })
