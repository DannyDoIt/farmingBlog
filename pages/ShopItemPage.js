import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShopItemPage() {
    const { id } = useParams(); // <use this to get item IDs>
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/shop/items/${id}`)
        .then(response => response.json())
        .then(data => {
            setItem(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching item:', error);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!item) {
        return <div>Item not found.</div>;
    }

    return (
        <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <div>
            <h3>Reviews</h3>
            {item.reviews && item.reviews.length > 0 ? (
            item.reviews.map((review, index) => (
                <div key={index}>
                <p><strong>{review.user}</strong>: {review.comment}</p>
                </div>
            ))
            ) : (
            <p>No reviews yet. Be the first to review!</p>
            )}
        </div>
        </div>
    );
}

export default ShopItemPage;
