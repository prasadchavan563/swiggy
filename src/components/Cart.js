import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../config";
import { clearItem } from "../Utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);//subscribing the selected portion of the store
    console.log("cartItems", cartItems);

    const dispatch = useDispatch()

    const handleClearItem= () =>{
        dispatch(clearItem())
    }

    return (
        <div className="text-center">
        <div>
            <button className="border text-white bg-black p-1 rounded-md m-2 mt-5" onClick={handleClearItem}>Clear</button>
        </div>
            {cartItems.map((item, index) => (
                <div key={index} className="flex border-b-2 text-center w-6/12 mx-auto my-2 justify-between rounded-2xl bg-gray-50 shadow-sm p-2">
                    <div className="my-3 w-9/12 text-left">
                        <p className="font-medium">{item.name}</p>
                        <p className="font-medium mb-5">
                            {item.price ? "₹ " + item.price / 100 : "₹ " + item.defaultPrice / 100}
                        </p>
                        <p className="font-thin from-neutral-200 mt-20">{item.description}</p>
                    </div>
                    <div className="w-3/12">
                        <img src={IMG_CDN + item.imageId} className="p-4 my-10 rounded-2xl" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
