import { useState, useEffect } from "react";
import Restaurants from "../restarauntMenu/Restaurants.js";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar.js";

///TODO restauranger visas inte korrekt om man har klickat åt höger och sedan filtrerar ner listan

//laddar in alla bilder i en mapp som används av kategoriobjekten
const images = require.context('../media', true);
const imageList = images.keys().map(image => images(image));

const foodItems = [
    { namn: 'Hamburgare', image: imageList[0] },
    { namn: 'Korv', image: imageList[1] },
    { namn: 'Kebab', image: imageList[2] },
    { namn: 'Pasta', image: imageList[3] },
    { namn: 'Pizza', image: imageList[4] },
    { namn: 'Sallad', image: imageList[5] },
    { namn: 'Sushi', image: imageList[6] },
    { namn: 'Thai', image: imageList[7] }
];

export default function BrowsingPage() {
    //listan med restauranger visas dynamiskt och är en state
    const [restaurantItems, setRestaurantItems] = useState(Restaurants);

    return (
        <div>
            <Navbar />
            <main className="browsingMain">
                <BrowsingSection
                    isFood={true}  
                    itemList={foodItems}
                    restaurantItems={restaurantItems}
                    setRestaurantItems={setRestaurantItems}
                    sectionText={"Välj kategori"}
                />
                <BrowsingSection
                    isRestaurant={true}
                    itemList={restaurantItems}
                    restaurantItems={restaurantItems}
                    setRestaurantItems={setRestaurantItems}
                    sectionText={"Välj restaurang"}
                />
            </main>
        </div>
    );
}

function BrowsingSection({ isFood, setRestaurantItems, itemList, sectionText }) {
    const [positionTracker, setPositionTracker] = useState(0);
    const [clickedItem, setClickedItem] = useState(null);

    //håller koll på positionen listan är förflyttad till med pilarna
    function handleListUpdate({ updatedPosition }) {
        setPositionTracker(updatedPosition);
    }

    //hanterar click på en kategori/food.
    function handleItemClick(item) {
        //om man clickar på samma item igen är inget item klickat, annars updatera nuvarande klickat till item
        setClickedItem(prevClickedItem => (prevClickedItem === item ? null : item));

        //resettar först till ursprungliga listan av restauranger
        setRestaurantItems(Restaurants);
        
        //sedan om ett item klickades som var "nytt" så filtreras listan ner till de restauranger som passar in på itemets kategori
        if(clickedItem !== item) {
            setRestaurantItems(prevRestaurantItems => {
                const newRestaurants = [];
    
                for (let i = 0; i < prevRestaurantItems.length; i++) {
                    prevRestaurantItems[i].categories.forEach(category => {
                        if (category === item.namn) {
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
            <div className="sectionHeaderContainer">
                <h2 className="sectionHeading">{sectionText}</h2>
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
            </div>

            <ul className="itemList">
                {itemList.map((item) => (
                    <SectionItem 
                        key={item.namn} 
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
    //flyttar x-positionen för respektive knappriktning efter begränsningarna av positiontracker
    function handleListClick() {
        const listElements = document.querySelectorAll(".itemList");
        const element = isFood ? listElements[0] : listElements[1];

        //antalet items som ska synas utan att behöva röra listan
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

    //returnerar olika för att ge rätt klassnamn beroende på pilkriktningen
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
    const navigate = useNavigate();

    //använder useEffect för att uppdatera ett items css beroende på om den är klickad
    //är dependent på isClicked från parent componenent och uppdateras när variabeln ändras
    useEffect(() => {
        if (isClicked) {
            setItemStyle({
                borderStyle: "solid",
                borderWidth: "0.1em",
                margin: "0.9em",
                borderRadius: "1em",
                borderColor: "blue",
                transform: "scale(1.2)",
                transition: "transform 0.7s ease"
            });
        } else {
            setItemStyle({
                transform: "scale(1)",
                   transition: "transform 0.7s ease"
            });
        }
    }, [isClicked]);

    //hanterar klick på item. Om item är (isFood): skickar vidare up till parent komponent för att köra handleClicked
    function handleClick() {
        if (isFood) {
            if (isClicked) {
                onClick(null);
            }
            else {
                onClick(item);
            }
        }
        //om item är restaurang så ges länk till sida för restaurang
        else {
            navigate(`/SingleRestaurant/${item.id}`);
        }
    }

    //varje item är en knapp som tar in relevanta props från respektive objekt
    return (
        <li className="item" style={itemStyle}>
            <button className="itemButton" onClick={handleClick}>
                <img className="browsingItemImg" src={item.image} alt={item.namn}></img>
                <h4 className="browsingItemName">{item.namn}</h4>
            </button>
        </li>
    );
}