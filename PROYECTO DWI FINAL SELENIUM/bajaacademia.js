//chrome driver
require("chromedriver");

//selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Obtenga las credenciales del archivo JSON 
let { nombre } = require("./bajaacademia.json");

// Abrir la Pagina de Academia
let tabToOpen =
	tab.get("http://localhost:4200/academia");
tabToOpen
	.then(function () {

		// Tiempo de espera agotado si la conexión es lenta
		let findTimeOutP =
			tab.manage().setTimeouts({
				implicit: 10000, // 10 segundos
			});
		return findTimeOutP;
	})
	.then(function () {

		// Encontrar el botón de baja de academia
		let promiseSignInBtn = tab.findElement(
			swd.By.css(".btnDelete")
		);
		return promiseSignInBtn;
	})
	.then(function (signInBtn) {

		// Hacer clic en el botón eliminar
		let promiseClickSignIn = signInBtn.click();
		return promiseClickSignIn;
	})

	.then(function () {

		// Encontrar el botón de confirmacion
		let promiseSignInBtn = tab.findElement(
			swd.By.css(".swal2-confirm.btn.btn-success")
		);
		return promiseSignInBtn;
	})
	.then(function (signInBtn) {

		// Hacer clic en el botón de confirmar
		let promiseClickSignIn = signInBtn.click();
		return promiseClickSignIn;
	})

	
	
	.then(function () {
		console.log("Baja de academia Exitosa XD");
	})
	.catch(function (err) {
		console.log("Error ", err, " :( ");
	});
