import { ScrollArea } from "@/components/ui/scroll-area";
import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";
import CartCheckout from "./CartCheckout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CheckOut = () => {
  const { cart } = useContext(CartContext);
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-[70%] flex ">
        <div className="w-4/6 ">left</div>
        <div className="w-2/4 bg-gray-100/50 py-5">
          <div className="h-full px-5">
            <ScrollArea className="h-[20%] p-2">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="pr-2">
                    <CartCheckout item={item} className="" />
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
                <span className="font-semibold">$35</span>
              </div>
              <div className="flex justify-between">
                <h4>Shipping</h4>
                <span><small>Calculated at next step</small></span>
              </div>
            </div>
            <div className="flex justify-between py-5">
              <h4>Total</h4>
              <span className="font-semibold"><small className="font-light">USD </small>$35</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
