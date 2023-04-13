// VALIDACIJA//

function validateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  if (fname == "") {
    alert("Името и презимето недостасуваат");
    return false;
  }

  let fcompany = document.forms["myForm"]["fcompany"].value;
  if (fcompany == "") {
    alert("Името на компанијата недостасува");
    return false;
  }

  let fcontact = document.forms["myForm"]["fcontact"].value;
  if (fcontact == "") {
    alert("Имејлот за контакт недостасува");
    return false;
  }

  let fnumber = document.forms["myForm"]["fnumber"].value;
  if (fnumber == "") {
    alert("Телефонот за контакт недостасува");
    return false;
  }

  let ftype = document.forms["myForm"]["ftype"].value;
  if (ftype == "") {
    alert("Изберете тип на студент");
    return false;
  }
}

// --------------------//

// NAVBAR BLACK BACKGROUND //

function mobileBg() {
  toggleFunction();
  bgColor();
}

function toggleFunction() {
  var x = document.getElementById("toggleHide");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function bgColor() {
  var element = document.getElementById("nav");
  element.classList.toggle("toggle-dark");
}

// ------------------------------------//

// FILTRIRANJE//

document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    document.querySelector(".filter-card-coding").classList.add("active");
    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "flex"; // <----- тука ти беше display: inline-block;
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector(".filter-card-design").classList.remove("active");

    document.querySelector("#filter-marketing").checked = false;
    document.querySelector(".filter-card-marketing").classList.remove("active");
  } else {
    showAllCards();
    document.querySelector(".filter-card-coding").classList.remove("active");
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    document.querySelector(".filter-card-design").classList.add("active");
    var designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "flex"; // <----- тука ти беше display: inline-block;
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector(".filter-card-coding").classList.remove("active");

    document.querySelector("#filter-marketing").checked = false;
    document.querySelector(".filter-card-marketing").classList.remove("active");
  } else {
    showAllCards();
    document.querySelector(".filter-card-design").classList.remove("active");
  }
}

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    document.querySelector(".filter-card-marketing").classList.add("active");
    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "flex"; // <----- тука ти беше display: inline-block;
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector(".filter-card-design").classList.remove("active");

    document.querySelector("#filter-coding").checked = false;
    document.querySelector(".filter-card-coding").classList.remove("active");
  } else {
    showAllCards();
    document.querySelector(".filter-card-marketing").classList.remove("active");
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "flex";
  });
}

// ----------//

// PAGINACIJA//

const loadmore = document.querySelector(".loadmore");
let currentItems = 2;
loadmore.addEventListener("click", (e) => {
  const elementList = [...document.querySelectorAll(".cards .card")];
  for (let i = currentItems; i < currentItems + 2; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "block";
    }
  }
  currentItems += 2;

  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
});

// ---------------//
