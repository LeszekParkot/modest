// animacja górnego menu oraz animacje po przewinięciu
let topMenu = $("#mainNav"),
	topMenuHeight = topMenu.outerHeight(),
    // wszystkie elementy listy
    menuItems = topMenu.find("a"),
	 // przycisk menu
	 navbarToggler = $(".navbar-toggler"),
    // kotwice do pozycji menu
    scrollItems = menuItems.map(function(){
      let item = $($(this).attr("href"));
      if (item.length) { return item; }
	}),
	// elementy formularza
	name = $("#name"),
	email = $("#email"),
	message = $("textarea"),
	submit = $(".submitBtn button"),
	nameVal,
	emailVal,
	messageVal;


// animacje po kliknięciu w pozycję menu
menuItems.click(function(e){
  let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
});

// zmiana kierunku strzałki
$('.collapse').on('shown.bs.collapse', function () {
	$(this).prev().find("i").toggleClass("up");
});
$('.collapse').on('hidden.bs.collapse', function () {
	$(this).prev().find("i").toggleClass("up");
});


// KONTROLA FORMULARZA
// kontrola input name
function checkName(){
	nameVal = /^[A-Z][a-ząęśćńźżół]+$/.test(name[0].value);

	if (nameVal) {
		name.css("background-color", "#f2ffe6");
	}else {
		name.css("background-color", "#ffe6e6");
	}
	return nameVal;
};

// kontrola email
function checkEmail(){
	emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email[0].value);

	if (emailVal) {
		email.css("background-color", "#f2ffe6");
	}else {
		email.css("background-color", "#ffe6e6");
	}
	return emailVal;
};

// kontrola textarea
function checkMessage(){
	messageVal = (message[0].value) !== "";

	if (messageVal) {
		message.css("background-color", "#f2ffe6");
	}else {
		message.css("background-color", "#ffe6e6");
	}
	return messageVal;
};

name.on("input", checkName);
email.on("input", checkEmail);
message.on("input", checkMessage);

// zdarzenie wysłania formularza
submit.on("click", function(event){
	checkName();
	checkEmail();
	checkMessage();
	if (!nameVal || !emailVal || !messageVal) {
	  event.preventDefault();
	  $(this).next().removeClass("text-hide");
  }
});






















/*asd*/
