import express from "express";
import minimist from "minimist";
import {roll} from './lib/roll.js';


const app = express();
const args = minimist(process.argv.slice(2));
app.use(express.urlencoded({extended: true}));

const port = args.port || 5000;

app.get('/app/', (req, res) => {
	res.type('html');
	res.status(200).send('200 OK');
});

app.get('/app/roll/', (req, res) => {
	res.send(roll(6,2,1));
});

app.post('/app/roll', (req, res) => {
	const sides = parseInt(req.body.sides);
	const dice = parseInt(req.body.dice);
	const rolls = parseInt(req.body.rolls);
	res.send(roll(sides,dice,rolls));
});

app.get('/app/roll/:sides/', (req, res) => {
	res.send(roll(parseInt(req.params.sides), 2, 1));
});

app.get('/app/roll/:sides/:dice/', (req, res) => {
	res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
});

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
});

app.use((req, res) => {
	res.status(404).send("404 NOT FOUND");
});

app.listen(port);

