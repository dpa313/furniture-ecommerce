import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import { X } from "lucide-react";
import { useContext } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
const CheckOutCart = ({ item }) => {
  const { id, title, amount, newPrice } = item;

  return (
    <div className='flex justify-between py-3'>
        <div className='relative bg-gray-200'>
          <Link to={`/product/${item.id}`}>
            <img src={item?.images?.mainImg} alt="" className="max-w-[80px] max-s" />
          </Link>
          <div className='absolute -top-2 -right-2 flex items-center justify-center size-6 bg-primary text-white text-sm rounded-full'>{item.amount}</div>
        </div>
        <div>{item.title}</div>
        <div className='font-semibold'>${item.newPrice}</div>
    </div>
  );
};

export default CheckOutCart;
