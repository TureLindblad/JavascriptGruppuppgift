const images = require.context('../restaurantImages', true);
const imageList = images.keys().map(image => images(image));

function genereraRandomPris(){
  return Math.floor(Math.random() * (150 - 50 + 1)) + 50;
}

const restaurants = [
{ id: 1, namn: 'Kalles korvkiosk', categories: ['Korv', 'Hamburgare'], image: imageList[2],

menu: [{namn: 'Korv med bröd', pris: genereraRandomPris()},
       {namn: 'Två korv med bröd', pris: genereraRandomPris()},
       {namn: 'Tre korv med bröd', pris: genereraRandomPris()},
       {namn: 'Bara bröd', pris: genereraRandomPris() },
]

},
{ id: 2, namn: 'Saras Sushi', categories: ['Sushi', 'Ramen'], image: imageList[6],

menu: [ {namn: 'Big Sushi', pris: genereraRandomPris(), bild: imageList[1]},
        {namn: 'Little Sushi', pris: genereraRandomPris()},
        {namn: 'Family Sushi', pris: genereraRandomPris()},
        {namn: 'Flame-out-your-ass Sushi', pris: genereraRandomPris()},
]
},
{ id: 3, namn: 'Bertils Burgare',  categories: ['Hamburgare', 'Korv'], image: imageList[0],

menu:  [{namn: 'FemOstburgare',pris: genereraRandomPris()},
        {namn: 'Trippel Viltburgare', pris: genereraRandomPris()},
        {namn: 'Frusen Burgare', pris: genereraRandomPris()},
        {namn: 'Burgare utan kött', pris: genereraRandomPris()},
        {namn: 'Handburger', pris: genereraRandomPris()},
]
},
{ id: 4, namn: 'Kebab King', categories: ['Kebab', 'Sallad'], image: imageList[1],

menu: [ {namn: 'Kebab med bröd', pris: genereraRandomPris()},
        {namn: 'Kebabrulle', pris: genereraRandomPris()},
        {namn: 'Kebabtallrik', pris: genereraRandomPris()},
        {namn: 'Kebab med kebab o en lavett', pris: genereraRandomPris()},
]
},

{ id: 5, namn: 'Pasta Palace',  categories: ['Pasta', 'Pizza'], image: imageList[3], 

menu: [ {namn: 'Pasta utan något', pris: genereraRandomPris()},
        {namn: 'Kycklingpasta',pris: genereraRandomPris()},
        {namn: 'Pasta mera', pris: genereraRandomPris()},
        {namn: 'Pasta dig i papperskorgen', pris: genereraRandomPris()},
] 
},

{ id: 6, namn: 'Pizza Paradise',   categories: ['Pizza', 'Pasta'], image: imageList[4],

menu: [ {namn: 'Pizza a la Penne',pris: genereraRandomPris()},
        {namn: 'RäkPizza', pris: genereraRandomPris()},
        {namn: 'Fullkorns Pizza', pris: genereraRandomPris()},
] 
},

{ id: 7, namn: 'Salad Sensation',  categories: ['Sallad'], image: imageList[5],

menu: [ {namn:'Salladsrulle',pris: genereraRandomPris()},
        {namn:'CeasarsCypher Sallad',pris: genereraRandomPris()},
        {namn:'Sallad utan sallad',pris: genereraRandomPris()},
        {namn:'PizzaSallad', pris: genereraRandomPris()},
] 
},

{ id: 8, namn: 'Thai Tasty', categories: ['Thai', 'Sushi', 'Sallad'], image: imageList[7],

menu: [ {namn: 'Bajsa blod i tre dagar',pris: genereraRandomPris()},
        {namn: 'Ambulans på köpet', pris: genereraRandomPris()},
        {namn: 'PadThai utan massage', pris: genereraRandomPris()},
        {namn: 'Kyckllingspett med Holy Fuck Sauce', pris: genereraRandomPris()},]},
];

export default restaurants;