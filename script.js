var formulaire = document.querySelector("input[name='valider_formulaire']");



formulaire.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Ce site est fictif. Dans le cas d'un site réel, votre formulaire aurait été soumis par mail à votre interlocuteur");
});
