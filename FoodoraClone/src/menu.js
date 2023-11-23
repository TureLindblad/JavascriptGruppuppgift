import React from "react";

class Menu extends React.Component{
    render(){

        const { items } = this.props;
        
        return(
            <div>
                <h2>Menu</h2>
                <ul>
                    {items.map(item => (
                        <li key = {item.id}>
                            <strong>{item.name}</strong>
                            <ul>
                                {item.ingredients.map((ingredient, index) =>(
                                    <li key = {index}>{ingredient}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Menu;