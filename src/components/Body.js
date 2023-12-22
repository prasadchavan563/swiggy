import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'; /* Shimmer component to display before page load */
import { GET_RES_API_URL } from '../config'; /* url to get Restaurant data */
import { Link } from 'react-router-dom';

const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
}


const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    console.log("useEffect");
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(GET_RES_API_URL);
      const res_data = await response.json();
      const restaurantsData = res_data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info);
      setAllRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
      console.log(allRestaurants,"filteredRestaurants");
    } catch (error) {
      console.log(error);
    }
  };

  const searchData = (searchText, restaurants) => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
    setErrorMsg(data.length === 0 ? 'No matches found' : '');
  };

  console.log("render");

  if (!allRestaurants || allRestaurants.length === 0) {
    console.log("early return");
    return <Shimmer />;
  }

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder=" Search for restaurant"
          value={searchText}
          className="search-input"
          key="input-text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => searchData(searchText, allRestaurants)}
        >
          Search
        </button>
      </div>
      {errorMsg && (
        <div className="error-container" id="error">
          <span className="error-msg" id="error-msg">{errorMsg}</span>
        </div>
      )}
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}><RestaurantCard {...restaurant}  /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
