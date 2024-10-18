import React from 'react';
import { Link } from 'react-router-dom';

function ShopPage() {
   // Mock dummy data for shop items
    const shopItems = [
        { id: 1, name: 'Farm Fresh Eggs' },
        { id: 2, name: 'Organic Vegetables' },
        { id: 3, name: 'Handmade Soaps' }
    ];

    return (
        <div>
        <h2>Shop</h2>
        <ul>
            {shopItems.map(item => (
            <li key={item.id}>
                <Link to={`/shop/item/${item.id}`}>{item.name}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ShopPage;
