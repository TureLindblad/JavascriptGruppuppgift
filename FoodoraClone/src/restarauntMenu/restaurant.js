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
    {id: 1, name: 'Kalles korvkiosk', image:{logo},  ingredients: ['Korv', 'Potatismos'], category: ['Hamburgare', 'Kebab']},
    {id: 2, name: 'Pelles peniskorv', image:{logo}, ingredients: ['Nötkött', 'Sallad', 'Lök'], category: ['Sushi', 'Sallad']}
];

export default RestaurantItems;