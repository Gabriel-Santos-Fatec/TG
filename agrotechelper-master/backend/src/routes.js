const { request, response, Router } = require('express');
const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const AgroTechController = require('./controllers/AgroTechController');


const routes = express.Router();


routes.post('/bot', AgroTechController.busca);


module.exports = routes;

