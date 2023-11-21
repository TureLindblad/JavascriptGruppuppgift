import { useState, useEffect } from "react";
import logo from "../logo.svg";

export default function BrowsingSection({ isFood = false, isRestaurant = false }) {
    const [itemList, setItemList] = useState([]);
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
    }, [isFood, isRestaurant]);

    function handleListUpdate({ updatedPosition }) {
        //setItemList(newList);
        setPositionTracker(updatedPosition);
    }

    return (
        <section>
            <div className="navButtonContainer">
                <NavButton updateList={handleListUpdate} direction={"<--"}
                itemList={itemList} isFood={isFood} positionTracker={positionTracker} />
                <NavButton updateList={handleListUpdate} direction={"-->"} 
                itemList={itemList} isFood={isFood} positionTracker={positionTracker} />
            </div>

            <ul className="itemList">
                {itemList.map((item) => (
                    <SectionItem key={item} item={item} />
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

function SectionItem({ item }) {
    function handleClick() {
        alert("clicked");
    }
    return (
        <li className="item">
            <button className="itemButton" onClick={handleClick}>
                <img src={logo} alt={item}></img>
                <h4>{item}</h4>
            </button>
        </li>
        
    )
}
//{name:"Burgers", image:logo} use objects as items??
const foodItems = ["Burgers", "Pizza", "Sushi", "Kebab", "Pasta", "Sallad", ];

const restaurantItems = ["Restaurant1", "Restaurant2", "Restaurant3", "Restaurant4", "Restaurant5"];