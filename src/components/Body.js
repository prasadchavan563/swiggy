import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'; /* Shimmer component to display before page load */
import { GET_RES_API_URL } from '../config'; /* url to get Restaurant data */
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';

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
      console.log(res_data,"res_data");
      const restaurantsData = res_data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info);
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


  const onlineStatus=useOnlineStatus()

  console.log(onlineStatus,"onlineStatus");

  if(onlineStatus===false){
    console.log("inside if condition");
    return <h1 className='onlineStatus'>Looks like you're offline!! Please check your Internet Connection</h1>
  }


  if (!allRestaurants || allRestaurants.length === 0) {
    console.log("early return");
    return <Shimmer />;
  }

  return (
    <div className="">
      <div className="m-4 p-4 justify-center">
        <input
          type="text"
          placeholder=" Search for restaurant"
          value={searchText}
          className="border-s-orange-50 rounded-sm"
          key="input-text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-0.5 m-2 bg-green-400 rounded-lg"
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
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}><RestaurantCard {...restaurant}  /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
