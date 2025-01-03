/* ----------------------- Initialize express ------------------------ */
const express = require('express');
const app = express();
const port = 3000;

/* ----------------------- Morgan ------------------------ */
const morgan = require('morgan');
app.use(morgan('dev'));

/* ----------------------- Body Parser ------------------------ */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ----------------------- Home Page ------------------------ */
app.get('/', (req, res) => {
    res.send('This is the home page');
});

/* ----------------------- Initalizing constants ------------------------ */
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];



/* ----------------------- Task 1 ------------------------ */
app.get('/greetings/:username', (req, res) => {
    res.send(`What a delight it is to see you once more, ${req.params.username}!`)
    }
);

/* ----------------------- Task 2 ------------------------ */
app.get('/roll/:num', (req, res) => {
    let num = req.params.num;
    if (isNaN(num)) {
        res.send('Please enter a valid number');
        return;
    }
    else{
    let roll = Math.floor(Math.random() * num) + 1;
    res.send(`You rolled a ${roll}`);
    }
});

/* ----------------------- Task 3 ------------------------ */


/* ----------------------- Task 4 ------------------------ */


/* ----------------------- App listener ------------------------ */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});