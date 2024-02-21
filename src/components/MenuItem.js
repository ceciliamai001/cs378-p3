import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, updateCart, cost, handleItemChange }) => {
    var [itemCount, setItemCount] = useState(0);

    const add = () => {
        handleItemChange(title, itemCount + 1);
        setItemCount(itemCount + 1);
        updateCart(price);
    };

    const remove = () => {
        if (itemCount > 0) {
            handleItemChange(title, itemCount - 1);
            setItemCount(itemCount - 1);
            updateCart(-price);
        }
    };

    if (itemCount !== 0 && cost === 0) {
        setItemCount(0);
    };
    
    return (
        <div className='container'>
            <div class="row"> 
                <div class = "col-4">
                    <img className="menu-image-rounded" src={require(`../images/${imageName}`)} alt={title} />
                </div>
                <div class = "col-8">
                    <div style={{ paddingLeft: '30px' }}>
                        <div className='left'><div className='item'>{title}</div></div>
                        <p className='description'>{description}</p>
                        <div class="row">
                            <div class="col-4">
                                <div className='left'><p>{price}</p></div>
                            </div>
                            <div className="col-8">
                                <div >
                                    <button className="btn btn-outline-primary" onClick={remove}>-</button>
                                    <span style={{ marginLeft: '10px', marginRight: '10px' }}>{itemCount}</span>
                                    <button className="btn btn-outline-primary" onClick={add}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12"></div>
            </div>
        </div>
    );
};

export default MenuItem;