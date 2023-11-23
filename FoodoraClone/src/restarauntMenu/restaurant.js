import logo from "../logo.svg";

const images = require.context('../restaurantImages', true);
const imageList = images.keys().map(image => images(image));

const RestaurantItems = [
    {id: 1, name: 'Kalles korvkiosk', image:{logo},  ingredients: ['Korv', 'Potatismos'], category: ['Hamburgare', 'Kebab']},
    {id: 2, name: 'Pelles peniskorv', image:{logo}, ingredients: ['Nötkött', 'Sallad', 'Lök'], category: ['Sushi', 'Sallad']}
];

export default RestaurantItems;