
const { Person } = require("./person");
const dotenv = require('dotenv');
const connect = require('./src/database/connect');

dotenv.config();

connect();

// Aprendendo a importar módulos
// const person = new Person("Camila");
//console.log(person.sayMyName());

// Aprendendo a subir um servidor usando o módulo http (nativo)
// const http = require("./test/http.js");

//Aprendendo a subir um servidor usando o express
const express = require("./test/express.js");



