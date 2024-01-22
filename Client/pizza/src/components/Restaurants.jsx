import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  function handleDelete(id) {
    fetch(`/restaurants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setRestaurants((restaurants) =>
          restaurants.filter((restaurant) => restaurant.id !== id)
        );
      }
    });
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: 'black', color: 'red', padding: '20px' }}>
      <h1 className="display-4 mb-4">Restaurants 🍕🛎️👨🏻‍🍳</h1>
      <div style={{ paddingBottom: 20 }}>
        <button type="button"><Link className="btn btn-outline-info" to="/restaurant_pizzas/new">Add Pizza</Link></button>
      </div>

      <ul className="list-group">
        {restaurants.map(restaurant => (
          <li key={restaurant.id} className="list-group-item bg-transparent">
            <Link to={`/restaurants/${restaurant.id}`} className="text-warning p-3" style={{ textDecoration: 'none' }}>{restaurant.name} 🥗</Link>
            <p className="text-warning p-3">{restaurant.address} ⛟</p>
            <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(restaurant.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurant;
