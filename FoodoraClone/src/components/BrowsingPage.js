import { useState, useEffect } from "react";
import logo from "../logo.svg"
import restaurant from "../restarauntMenu/restaurant.js"

export default function BrowsingSection({ isFood = false, isRestaurant = false }) {
    const [itemList, setItemList] = useState([]);
    const [restaurantItems, setRestaurantItems] = useState(restaurant);
    const [positionTracker, setPositionTracker] = useState(0);

    useEffect(() => {
        if (isFood) {
            setItemList(foodItems);
        }
        else if (isRestaurant) {
            setItemList(restaurantItems);
        }
        else {
            setItemList([]);
        }
    }, [restaurantItems]);

    function handleListUpdate({ updatedPosition }) {
        setPositionTracker(updatedPosition);
    }

    function filterRestaurantSection({ item }) {
        for (let i = 0; i < restaurantItems.length; i++) {
            restaurantItems.category.forEach((element) => {
                alert(element);
            });
        }
        
        //alert(restaurantItems[1].category);
    }

    return (
        <section>
            <div className="navButtonContainer">
                <NavButton updateList={handleListUpdate} direction={"<--"}
                itemList={itemList} isFood={isFood} positionTracker={positionTracker}  />
                <NavButton updateList={handleListUpdate} direction={"-->"} 
                itemList={itemList} isFood={isFood} positionTracker={positionTracker} />
            </div>

            <ul className="itemList">
                {itemList.map((item) => (
                    <SectionItem key={item.name} item={item} filterRestaurantSection={filterRestaurantSection} />
                ))}
            </ul>
        </section>
    );
}

function NavButton({ updateList, direction, itemList, isFood, positionTracker }) {
    function handleListClick() {
        const listElements = document.querySelectorAll(".itemList");
        const element = isFood ? listElements[0] : listElements[1];

        const initialVisibleItems = 3; //how many items are visible within section

        if (direction === "<--" && positionTracker > 0) {
            const updatedPosition = positionTracker - 1;
            element.style.transform = `translateX(${updatedPosition * -10}em)`;
            
            updateList({ updatedPosition });
            
        }
        else if (direction === "-->" && positionTracker < itemList.length - initialVisibleItems) {  
            const updatedPosition = positionTracker + 1;
            element.style.transform = `translateX(${updatedPosition * -10}em)`;
            
            updateList({ updatedPosition });
        }
    }

    return (
        <button className="navButton" onClick={handleListClick}>
            {direction}
        </button>
    );
}

function SectionItem({ item, filterRestaurantSection }) {
    function handleClick() {
        filterRestaurantSection(item);
    }

    return (
        <li className="item">
            <button className="itemButton" onClick={handleClick}>
                <img src={item.image} alt={item.name}></img>
                <h4>{item.name}</h4>
            </button>
        </li>
        
    )
}

const images = require.context('../media', true);
const imageList = images.keys().map(image => images(image));

const foodItems = [
    { name: 'Burgers', image: imageList[0] },
    { name: 'Kebab', image: imageList[1] },
    { name: 'Pasta', image: imageList[2] },
    { name: 'Pizza', image: imageList[3] },
    { name: 'Salad', image: imageList[4] },
    { name: 'Sushi', image: imageList[5] },
    { name: 'Thai', image: imageList[6] }
];