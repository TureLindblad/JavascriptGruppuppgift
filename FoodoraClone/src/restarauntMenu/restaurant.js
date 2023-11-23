const images = require.context('../restaurantImages', true);
const imageList = images.keys().map(image => images(image));

const foodItems = [
    {name: 'Burgers', image: imageList[0]},
    {name: 'Kebab', image: imageList[1]},
    {name: 'Korv', image: imageList[2]},
    {name: 'Pasta', image: imageList[3]},
    {name: 'Pizza', image: imageList[4]},
    {name: 'Sallad', image: imageList[5]},
    {name: 'Sushi', image: imageList[6]},
    {name: 'Thai', image: imageList[7]},
]

const RestaurantItems = [
    { id: 1, name: 'Kalles korvkiosk', image: imageList[2], ingredients: ['Korv', 'Potatismos'], categories: ['Korv', 'Hamburgare'] },
    { id: 3, name: 'Saras Sushi', image: imageList[6], ingredients: ['Ris', 'Fisk', 'Avokado'], categories: ['Sushi', 'Ramen'] },
    { id: 4, name: 'Bertils Burgare', image: imageList[0], ingredients: ['Nötkött', 'Bröd', 'Ost'], categories: ['Hamburgare', 'Korv'] },
    { id: 5, name: 'Kebab King', image: imageList[1], ingredients: ['Kyckling', 'Bröd', 'Sallad'], categories: ['Kebab', 'Sallad'] },
    { id: 6, name: 'Pasta Palace', image: imageList[3], ingredients: ['Pasta', 'Tomatsås', 'Ost'], categories: ['Pasta', 'Pizza'] },
    { id: 7, name: 'Pizza Paradise', image: imageList[4], ingredients: ['Deg', 'Tomatsås', 'Ost'], categories: ['Pizza', 'Pasta'] },
    { id: 8, name: 'Salad Sensation', image: imageList[5], ingredients: ['Grönsaker', 'Olivolja'], categories: ['Sallad'] },
    { id: 10, name: 'Thai Tasty', image: imageList[7], ingredients: ['Kyckling', 'Kokosmjölk', 'Curry'], categories: ['Thai', 'Sushi', 'Sallad'] },
  ];
  
  export default RestaurantItems;