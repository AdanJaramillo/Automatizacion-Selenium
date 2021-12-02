//chrome driver
require("chromedriver");

//selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

//Obtenga las credenciales del archivo JSON 
let { email, nombre, priApellido, SegApellido, password, confirmPass } = require("./registro.json");

// Abrir la Pagina del inicio de sesión 
let tabToOpen =
	tab.get("http://localhost:4200/register");
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

		//localizar la entrada del correo de usuario
		let promiseValidationServerUsernameBox =
			tab.findElement(swd.By.css("#validationServerUsername"));
		return promiseValidationServerUsernameBox;
	})
	.then(function (validationServerUsernameBox) {

		//Ingresando el correo de usuario
		let promiseFillValidationServerUsername  =
		validationServerUsernameBox.sendKeys(email);
		return promiseFillValidationServerUsername;
	})
	.then(function () {
		console.log(
			"Correo ingresado exitosamente en" +
			"'el registro"
		);

		//localizar la entrada del nombre de usuario
		let promiseValidationServer96Box =
			tab.findElement(swd.By.css("#validationServer96"));
		return promiseValidationServer96Box;
	})
	.then(function (validationServer96Box) {

		//Ingresando el nombre de usuario
		let promiseFillValidationServer96  =
		validationServer96Box.sendKeys(nombre);
		return promiseFillValidationServer96;
	})
	.then(function () {
		console.log(
			"nombre ingresado exitosamente en" +
			"'el registro"
		);

		//localizar la entrada del priApellido de usuario
		let promiseValidationServer02Box =
			tab.findElement(swd.By.css("#validationServer02"));
		return promiseValidationServer02Box;
	})
	.then(function (validationServer02Box) {

		//Ingresando el priApellido de usuario
		let promiseFillValidationServer02  =
		validationServer02Box.sendKeys(priApellido);
		return promiseFillValidationServer02;
	})
	.then(function () {
		console.log(
			"priApellido ingresado exitosamente en" +
			"'el registro"
		);

		//localizar la entrada del SegApellido de usuario
		let promiseValidationServer069Box =
			tab.findElement(swd.By.css("#validationServer069"));
		return promiseValidationServer069Box;
	})
	.then(function (validationServer069Box) {

		//Ingresando el SegApellido de usuario
		let promiseFillValidationServer069  =
		validationServer069Box.sendKeys(SegApellido);
		return promiseFillValidationServer069;
	})
	.then(function () {
		console.log(
			"SegApellido ingresado exitosamente en" +
			"'el registro"
		);

		//localizar la entrada del password de usuario
		let promiseValidationServer070Box =
			tab.findElement(swd.By.css("#validationServer070"));
		return promiseValidationServer070Box;
	})
	.then(function (validationServer070Box) {

		//Ingresando el password de usuario
		let promiseFillValidationServer070  =
		validationServer070Box.sendKeys(password);
		return promiseFillValidationServer070;
	})
	.then(function () {
		console.log(
			"password ingresado exitosamente en" +
			"'el registro"
		);

		//localizar la entrada de confirmacion password de usuario
		let promiseVal1Box =
			tab.findElement(swd.By.css("#val1"));
		return promiseVal1Box;
	})
	.then(function (val1Box) {

		//Ingresando la confirmacion de password de usuario
		let promiseFillVal1  =
		val1Box.sendKeys(confirmPass);
		return promiseFillVal1;
	})
	.then(function () {
		console.log(
			"Confirmacion de password ingresado exitosamente en" +
			"'el registro"
		);

		// Encontrar el botón Iniciar sesión
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
		console.log("Registro de usuario Exitoso XD");
	})
	.catch(function (err) {
		console.log("Error ", err, " :( ");
	});
