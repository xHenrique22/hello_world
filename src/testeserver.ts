import * as express from "express";

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>');
});

app.get('/mentalidades', (request, response) => {
    response.send('<h2>Mentalidades de Crescimento:</h2>' +
    '<ul>' + 
    '<li>Persistência</li>' +
    '<li>Responsabilidade pessoal</li>' +
    '<li>Orientação ao futuro</li>' +
    '<li>Mentalidade de crescimento</li>' +
    '</ul>' +
    '</br>' +
    '<h2>Habilidades:</h2>' +
    '<ul>' +
    '<li>Trabalho em equipe</li>' +
    '<li>Atenção aos detalhes</li>' +
    '<li>Proatividade</li>' +
    '<li>Comunicação</li>' +
    '</ul>')
});

app.get('/objetivos', (request, response) => {
    response.send('<h2>Objetivo da semana:</h2>' +
    '<p>Desejo adquirir conhecimento para contribuir no projeto integrador ao final do bootcamp')
});

app.listen(port, () => {
    console.log('Servidor rodando na porta 3000!')
});