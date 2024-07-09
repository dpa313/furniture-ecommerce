import { CartContext } from "@/context/CartContext";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
// import { IoMdArrowForward } from "react-icons/io";
// import CartItem from "../CartItem/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import CheckOutCart from "./CheckOutCart";
import { Input } from "@/components/ui/input";
const RightCart = () => {
  const { cart,maxTotal} = useContext(CartContext);
  console.log(cart);
  return (
    <div className="w-2/5 bg-gray-100/50 py-5">
      <div className="h-full px-5">
          <ScrollArea className={`${cart.length > 0 ? "h-[20%]" : "h-0"}`}>
            {cart.map((item) => {
              return (
                <div key={item.id} className="pr-2">
                  <CheckOutCart item={item} className="" />
                </div>
              );
            })}
          </ScrollArea>

        <div className="flex w-full max-w-sm items-center space-x-2 py-5 border-y-[1px]">
          <Input type="text" placeholder="Gift card or discount code" />
          <Button type="submit">Apply</Button>
        </div>
        <div className="py-5 border-b">
          <div className="flex justify-between">
            <h4>Subtotal</h4>
            <span className="font-semibold">${maxTotal}</span>
          </div>
          <div className="flex justify-between">
            <h4>Shipping</h4>
            <span>
              <small>Calculated at next step</small>
            </span>
          </div>
        </div>
        <div className="flex justify-between py-5">
          <h4>Total</h4>
          <span className="font-semibold">
            <small className="font-light">USD </small>${maxTotal}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightCart;
