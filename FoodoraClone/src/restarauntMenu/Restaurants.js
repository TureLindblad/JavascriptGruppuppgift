const images = require.context('../restaurantImages', true);
const imageList = images.keys().map(image => images(image));
const menuImages = require.context('../menuImages', true);
const menuImageList = menuImages.keys().map(menuImage => menuImages(menuImage));

function genereraRandomPris() {
  return Math.floor(Math.random() * (150 - 50 + 1)) + 50;
}

const restaurants = [
{ id: 1, namn: 'Kalles korvkiosk', categories: ['Korv', 'Hamburgare'], image: imageList[2],

menu: [{namn: 'Korv med bröd', pris: genereraRandomPris(),  menuImage: menuImageList.find(image => image.includes('korvmed'))},
       {namn: 'Två korv med bröd', pris: genereraRandomPris(),  menuImage: menuImageList.find(image => image.includes('tvåkorv'))},
       {namn: 'Tre korv med bröd', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('trekorv'))},
       {namn: 'Bara bröd', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('bara'))},
]

},
{ id: 2, namn: 'Saras Sushi', categories: ['Sushi', 'Ramen'], image: imageList[6],

menu: [ {namn: 'Big Sushi', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('big'))},
        {namn: 'Little Sushi', pris: genereraRandomPris(),menuImage: menuImageList.find(image => image.includes('small'))},
        {namn: 'Family Sushi', pris: genereraRandomPris(),menuImage: menuImageList.find(image => image.includes('family'))},
        {namn: 'Flame-out-your-ass Sushi', pris: genereraRandomPris(),menuImage: menuImageList.find(image => image.includes('flame'))},
]
},
{ id: 3, namn: 'Bertils Burgare',  categories: ['Hamburgare', 'Korv'], image: imageList[0],

menu:  [{namn: 'FemOstburgare',pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('fem'))},
        {namn: 'Frusen Burgare', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('frozen'))},
        {namn: 'Burgare utan kött', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('burgareUtan'))},
        {namn: 'Handburger', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('hand'))},
]
},
{ id: 4, namn: 'Kebab King', categories: ['Kebab', 'Sallad'], image: imageList[1],

    menu: [
      { namn: "Kebab med bröd", pris: genereraRandomPris(),menuImage: menuImageList.find(image => image.includes('kebabMed')) },
      { namn: "Kebabrulle", pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('kebabrulle')) },
      { namn: "Kebabtallrik", pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('kebabTall')) },
      { namn: "Kebab med kebab o en lavett", pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('kebabmed')) },
    ],
  },

{ id: 5, namn: 'Pasta Palace',  categories: ['Pasta', 'Pizza'], image: imageList[3], 

menu: [ {namn: 'Pasta utan något', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('spaghettiV'))},
        {namn: 'Kycklingpasta',pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('kyckling'))},
        {namn: 'Pasta mera', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('pastaM'))},
        {namn: 'Pasta dig', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('pastaDig'))},
] 
},

  {
    id: 6,
    namn: "Pizza Paradise",
    categories: ["Pizza", "Pasta"],
    image: imageList[4],

    menu: [
      { namn: "Pizza a la Penne", pris: genereraRandomPris(),menuImage: menuImageList.find(image => image.includes('pizzaPe')) },
      { namn: "RäkPizza", pris: genereraRandomPris(),menuImage: menuImageList.find(image => image.includes('rä')) },
      { namn: "Fullkorns Pizza", pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('F'))},
    ],
  },

  {
    id: 7,
    namn: "Salad Sensation",
    categories: ["Sallad"],
    image: imageList[5],

menu: [ {namn:'Salladsrulle',pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('sallads'))},
        {namn:'CeasarsCypher Sallad',pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('Cae'))},
        {namn:'Sallad utan sallad',pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('salladUt'))},
        {namn:'PizzaSallad', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('pizzas'))},
] 
},

  {
    id: 8,
    namn: "Thai Tasty",
    categories: ["Thai", "Sushi", "Sallad"],
    image: imageList[7],

menu: [ {namn: 'Bajsa blod i tre dagar',pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('bajsa'))},
        {namn: 'Ambulans på köpet', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('amb'))},
        {namn: 'PadThai utan massage', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('pad'))},
        {namn: 'Kyckllingspett med Holy Fuck Sauce', pris: genereraRandomPris(), menuImage: menuImageList.find(image => image.includes('holy'))},
      ],
    },
];

export default restaurants;
