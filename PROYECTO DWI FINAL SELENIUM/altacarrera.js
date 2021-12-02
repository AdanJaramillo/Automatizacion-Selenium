//chrome driver
require("chromedriver");

//selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Obtenga las credenciales del archivo JSON 
let { carrera } = require("./altacarrera.json");

// Abrir la Pagina de alta carrera
let tabToOpen =
	tab.get("http://localhost:4200/altacarrera");
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

		//localizar la entrada de la carrera
		let promiseCarreraBox =
			tab.findElement(swd.By.css("#carrera"));
		return promiseCarreraBox;
	})
	.then(function (carreraBox) {

		//Ingresando el nombre de la carrera
		let promiseFillCarrera =
		carreraBox.sendKeys(carrera);
		return promiseFillCarrera;
	})
	.then(function () {
		console.log(
			"carrera ingresada exitosamente en" +
			"'Alta carrera"
		);

	

		// Encontrar el botón Guardar
		let promiseSignInBtn = tab.findElement(
			swd.By.css(".form-control.btn.btn-register")
		);
		return promiseSignInBtn;
	})
	.then(function (signInBtn) {

		// Hacer clic en el botón Iniciar sesión
		let promiseClickSignIn = signInBtn.click();
		return promiseClickSignIn;
	})
	.then(function () {
		console.log("Carrera dada de alta con Exito XD");
	})
	.catch(function (err) {
		console.log("Error ", err, " :( ");
	});
