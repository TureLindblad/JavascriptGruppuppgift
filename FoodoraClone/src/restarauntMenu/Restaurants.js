import React from 'react';

//const images = require.context('../restaurantImages', true);
//const imageList = images.keys().map(image => images(image));

function genereraRandomPris(){
  return Math.floor(Math.random() * (150 - 50 + 1)) + 50;
}


const foodItems = [
{name: 'Burgers', },
{name: 'Kebab', },
{name: 'Korv', },
{name: 'Pasta', },
{name: 'Pizza', },
{name: 'Sallad', },
{name: 'Sushi', },
{name: 'Thai', },
]

const restaurants = [
{ id: 1, namn: 'Kalles korvkiosk', categories: ['Korv', 'Hamburgare'],

menu: [{namn: 'Korv med bröd', pris: genereraRandomPris()},
       {namn: 'Två korv med bröd', pris: genereraRandomPris()},
       {namn: 'Tre korv med bröd', pris: genereraRandomPris()},
       {namn: 'Bara bröd', pris: genereraRandomPris() },
]
},
{ id: 2, namn: 'Saras Sushi', categories: ['Sushi', 'Ramen'], 

menu: [ {namn: 'Big Sushi', pris: genereraRandomPris()},
        {namn: 'Little Sushi', pris: genereraRandomPris()},
        {namn: 'Family Sushi', pris: genereraRandomPris()},
        {namn: 'Flame-out-your-ass Sushi', pris: genereraRandomPris()},
]
},
{ id: 3, namn: 'Bertils Burgare',  categories: ['Hamburgare', 'Korv'], 

menu:  [{namn: 'FemOstburgare',pris: genereraRandomPris()},
        {namn: 'Trippel Viltburgare', pris: genereraRandomPris()},
        {namn: 'Burgare utan kött', pris: genereraRandomPris()},
]
},
{ id: 4, namn: 'Kebab King', categories: ['Kebab', 'Sallad'], 

menu: [ {namn: 'Kebab med bröd', pris: genereraRandomPris()},
        {namn: 'Kebabrulle', pris: genereraRandomPris()},
        {namn: 'Kebabtallrik', pris: genereraRandomPris()},
        {namn: 'Kebab med kebab o en lavett', pris: genereraRandomPris()},
]
},

{ id: 5, namn: 'Pasta Palace',  categories: ['Pasta', 'Pizza'], 

menu: [ {namn: 'Pelles pasta', pris: genereraRandomPris()},
        {namn: 'Kycklingpasta',pris: genereraRandomPris()},
        {namn: 'Pasta mera', pris: genereraRandomPris()},
        {namn: 'Pasta dig i papperskorgen', pris: genereraRandomPris()},
] 
},

{ id: 6, namn: 'Pizza Paradise',   categories: ['Pizza', 'Pasta'], 

menu: [ {namn: 'Pizza a la Penne',pris: genereraRandomPris()},
        {namn: 'RäkPizza', pris: genereraRandomPris()},
        {namn: 'Fullkorns Pizza', pris: genereraRandomPris()},
] 
},

{ id: 7, namn: 'Salad Sensation',  categories: ['Sallad'], 

menu: [ {namn:'Salladsrulle',pris: genereraRandomPris()},
        {namn:'CeasarsCypher Sallad',pris: genereraRandomPris()},
        {namn:'Sallad utan kött',pris: genereraRandomPris()},
        {namn: 'PizzaSallad', pris: genereraRandomPris()},
] 
},

{ id: 8, namn: 'Thai Tasty', categories: ['Thai', 'Sushi', 'Sallad'], 

menu: [ {namn: 'Bajsa blod i tre dagar',pris: genereraRandomPris()},
        {namn: 'Ambulans på köpet', pris: genereraRandomPris()},
        {namn: 'PadThai utan massage', pris: genereraRandomPris()},
        {namn: 'Kyckllingspett med Nitroglycerinsås', pris: genereraRandomPris()},]},
];

export default restaurants;