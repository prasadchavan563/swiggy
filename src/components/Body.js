import { RestaurantCard } from './RestaurantCard'; /* Import using Named Import */
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer'; /* Shimmer component to display before page load */
import { GET_RES_API_URL } from '../config'; /* url to get Restaurant data */
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';
import { WithRestaurantLable } from './RestaurantCard';
import Restaurant from './Restaurant';
// import UserContext from '../Utils/UsrContext';
import UserContext from '../Utils/UsrContext';

const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
}


const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const {setUserName,loggedInUser}=useContext(UserContext);
  console.log("loggedInUser",setUserName,loggedInUser);

  useEffect(() => {
    console.log("useEffect");
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(GET_RES_API_URL);
      const res_data = await response.json();
      console.log(res_data,"res_data");
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId=24420")
      const json = await data.json()
      console.log("jsondata@@@@@@@@@",json);
      console.log("seconddata",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((data)=>data?.card?.info));
      console.log("thirdddata",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map((data)=>data?.card?.info));
      console.log(res_data,"res_data");
      const restaurantsData = res_data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant.info);
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

  const EnhancedRestaurantCard = WithRestaurantLable(RestaurantCard);

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
        <span className='ml-10 mr-5'>Set UserName :</span>
        <input type='text' className='border border-none p-2  rounded-lg' value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
      </div>
      <div>
      
      </div>
      {errorMsg && (
        <div className="error-container" id="error">
          <span className="error-msg" id="error-msg">{errorMsg}</span>
        </div>
      )}
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}>
          {restaurant.avgRating>4.4 ? <EnhancedRestaurantCard {...restaurant}/> : <RestaurantCard {...restaurant} />}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;




