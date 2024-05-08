import fav01 from "../assets/images/fav1.png";
import fav02 from "../assets/images/fav2.png";
const Reserve = () => {
  return (
    <div className="">
      <div className="flex flex-col">
        <h1 className="text-headingColor font-semibold text-[32px] leading-7 text__para">
          Room in Paris, France
        </h1>
        <p className="font-medium text-headingColor text-[16px]">
          1 double bed - Shared bathroom
        </p>
        <div className="flex flex-row border border-black">
          <div className="flex justify-between">
            <img src={fav01} alt="" />
            <span className="my-auto w-14 leading-7 text-center text__para font-normal text-[20px]">
              Guest favorite
            </span>
            <img src={fav02} alt="" />
          </div>
          <p className="text__para text-[20px] w-80 text-center my-auto ml-12">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
