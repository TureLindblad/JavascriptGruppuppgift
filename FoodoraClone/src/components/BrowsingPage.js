import { useState, useEffect } from "react";
import restaurant from "../restarauntMenu/restaurant.js";

const images = require.context('../media', true);
const imageList = images.keys().map(image => images(image));

const foodItems = [
    { name: 'Hamburgare', image: imageList[0] },
    { name: 'Kebab', image: imageList[1] },
    { name: 'Pasta', image: imageList[2] },
    { name: 'Pizza', image: imageList[3] },
    { name: 'Sallad', image: imageList[4] },
    { name: 'Sushi', image: imageList[5] },
    { name: 'Thai', image: imageList[6] },
    { name: 'Korv', image: imageList[0] }
];

export default function BrowsingPage() {
    const [restaurantItems, setRestaurantItems] = useState(restaurant);

    return (
        <main className="browsingMain">
            <BrowsingSection
                isFood={true}  
                itemList={foodItems}
                restaurantItems={restaurantItems}
                setRestaurantItems={setRestaurantItems}
            />
            <BrowsingSection
                isRestaurant={true}
                itemList={restaurantItems}
                restaurantItems={restaurantItems}
                setRestaurantItems={setRestaurantItems}
            />
        </main>
    );
}

function BrowsingSection({ isFood, setRestaurantItems, itemList }) {
    const [positionTracker, setPositionTracker] = useState(0);
    const [clickedItem, setClickedItem] = useState(null);

    function handleListUpdate({ updatedPosition }) {
        setPositionTracker(updatedPosition);
    }

    function handleItemClick(item) {
        if (clickedItem === item) {
            setClickedItem(null);
            setRestaurantItems(restaurant);
        }
        else {
            //setPositionTracker(0);

            setClickedItem(prevClickedItem => (prevClickedItem === item ? null : item));

            setRestaurantItems(restaurant);
            setRestaurantItems(prevRestaurantItems => {
                const newRestaurants = [];
    
                for (let i = 0; i < prevRestaurantItems.length; i++) {
                    prevRestaurantItems[i].categories.forEach(category => {
                        if (category === item.name) {
                            newRestaurants.push(prevRestaurantItems[i]);
                        }
                    });
                }
    
                return newRestaurants;
            });
        }
    }

    return (
        <section className="browsingSection">
            <div className="navButtonContainer">
                <NavButton 
                    updateList={handleListUpdate} 
                    direction={"left"}
                    itemList={itemList} 
                    isFood={isFood} 
                    positionTracker={positionTracker}  
                />
                <NavButton 
                    updateList={handleListUpdate} 
                    direction={"right"} 
                    itemList={itemList} 
                    isFood={isFood} 
                    positionTracker={positionTracker} 
                />
            </div>

            <ul className="itemList">
                {itemList.map((item) => (
                    <SectionItem 
                        key={item.name} 
                        item={item}
                        isFood={isFood} 
                        onClick={() => handleItemClick(item)}
                        isClicked={clickedItem === item}
                    />
                ))}
            </ul>
        </section>
    );
}

function NavButton({ updateList, direction, itemList, isFood, positionTracker }) {
    function handleListClick() {
        const listElements = document.querySelectorAll(".itemList");
        const element = isFood ? listElements[0] : listElements[1];

        const initialVisibleItems = 5;

        if (direction === "left" && positionTracker > 0) {
            const updatedPosition = positionTracker - 1;
            element.style.transform = `translateX(${updatedPosition * -10}em)`;
            
            updateList({ updatedPosition });
            
        }
        else if (direction === "right" && positionTracker < itemList.length - initialVisibleItems) {  
            const updatedPosition = positionTracker + 1;
            element.style.transform = `translateX(${updatedPosition * -10}em)`;
            
            updateList({ updatedPosition });
        }
    }

    if (direction === "left") {
        return (
            <button className="navButton" onClick={handleListClick}>
                <i className="arrow left"></i>
            </button>
        );
    }
    else {
        return (
            <button className="navButton" onClick={handleListClick}>
                <i className="arrow right"></i>
            </button>
        );
    }
}

function SectionItem({ item, isFood, onClick, isClicked }) {
    const [itemStyle, setItemStyle] = useState({});

    useEffect(() => {
        if (isClicked) {
            setItemStyle(categoryClickStyles);
        } else {
            setItemStyle({
                transform: "scale(1)",
                transition: "transform 0.7s ease"
            });
        }
    }, [isClicked]);

    function handleClick() {
        if (isFood) {
            if (isClicked) {
                onClick(null);
            } else {
                onClick(item);
            }
        } else {
            alert("link to restaurant goes here");
        }
    }

    return (
        <li className="item" style={itemStyle}>
            <button className="itemButton" onClick={handleClick}>
                <img src={item.image} alt={item.name}></img>
                <h4>{item.name}</h4>
            </button>
        </li>
    );
}


const categoryClickStyles = {
    borderStyle: "solid",
    borderWidth: "0.1em",
    margin: "0.9em",
    borderRadius: "1em",
    borderColor: "blue",
    transform: "scale(1.2)",
    transition: "transform 0.7s ease"
}