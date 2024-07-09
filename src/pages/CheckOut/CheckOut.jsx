import LeftForm from "./LeftForm";
import RightCart from "./RightCart";

const CheckOut = ({item}) => {
  return (
    <section className="container mx-auto max-w-[70%] py-32">
      <div className="flex justify-center">
        <LeftForm/>
        <RightCart/>
      </div>
    </section>
  );
};

export default CheckOut;
