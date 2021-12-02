//chrome driver
require("chromedriver");

//selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Obtenga las credenciales del archivo JSON 
let { email, pass } = require("./login.json");

// Abrir la Pagina del inicio de sesión 
let tabToOpen =
	tab.get("http://localhost:4200/login");
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

		//localizar la entrada del nombre de usuario
		let promiseUsernameBox =
			tab.findElement(swd.By.css("#username"));
		return promiseUsernameBox;
	})
	.then(function (usernameBox) {

		//Ingresando el nombre de usuario
		let promiseFillUsername =
			usernameBox.sendKeys(email);
		return promiseFillUsername;
	})
	.then(function () {
		console.log(
			"Correo ingresado exitosamente en" +
			"'login"
		);

		// Localizar la entrada de la contraseña
		let promisePasswordBox =
			tab.findElement(swd.By.css("#password"));
		return promisePasswordBox;
	})
	.then(function (passwordBox) {

		//Ingresando la contraseña
		let promiseFillPassword =
			passwordBox.sendKeys(pass);
		return promiseFillPassword;
	})
	.then(function () {
		console.log(
			"Contraseña ingresada exitosamente en" +
			" 'login"
		);

		// Encontrar el botón Iniciar sesión
		let promiseSignInBtn = tab.findElement(
			swd.By.css(".form-control.btn.btn-login")
		);
		return promiseSignInBtn;
	})
	.then(function (signInBtn) {

		// Hacer clic en el botón Iniciar sesión
		let promiseClickSignIn = signInBtn.click();
		return promiseClickSignIn;
	})
	.then(function () {
		console.log("Inicio de Sesión Exitoso XD");
	})
	.catch(function (err) {
		console.log("Error ", err, " :( ");
	});
