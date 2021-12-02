//chrome driver
require("chromedriver");

//selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Obtenga las credenciales del archivo JSON 
let { nombre } = require("./altaacademia.json");

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

		//localizar la entrada del nombre de la academia
		let promiseNombreBox =
			tab.findElement(swd.By.css("#nombreAcademia"));
		return promiseNombreBox;
	})
	.then(function (nombreBox) {

		//Ingresando el nombre de la academia a dar de alta
		let promiseFillNombre =
		nombreBox.sendKeys(nombre);
		return promiseFillNombre;
	})
	.then(function () {
		console.log(
			"Academia ingresada exitosamente en" +
			"'Alta academia"
		);


		// Encontrar el botón Guardar
		let promiseSignInBtn = tab.findElement(
			swd.By.css(".form-control.btn.btn-register")
		);
		return promiseSignInBtn;
	})
	.then(function (signInBtn) {

		// Hacer clic en el botón Guardar
		let promiseClickSignIn = signInBtn.click();
		return promiseClickSignIn;
	})
	.then(function () {
		console.log("Alta de academia Exitosa XD");
	})
	.catch(function (err) {
		console.log("Error ", err, " :( ");
	});
