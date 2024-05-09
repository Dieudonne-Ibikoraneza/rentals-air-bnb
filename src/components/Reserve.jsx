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
        <div className="sm:flex lg:flex-row grid top-4 relative items-center justify-center sm:grid-cols-2 pb-4 border border-black rounded-lg text-center sm:justify-between px-4">
          <div className="flex justify-between">
            <img src={fav01} alt="" />
            <span className="my-auto w-14 leading-7 text-center text__para font-normal text-[20px]">
              Guest favorite
            </span>
            <img src={fav02} alt="" />
          </div>

          <div className="border-l-2 border-solid hidden border-black my-6 rounded"></div>
          <p className="text__para text-[20px] w-80 hidden lg:flex text-center my-auto ml-12">
            One of the most loved homes on Airbnb, according to guests
          </p>

          <div className="border-l-2 border-solid hidden border-black my-6 rounded"></div>
          <p className="text__para text-[60px] mx-auto sm:mx-0 leading-[3rem] my-auto flex flex-col">
            4.90
            <span className="flex flex-row mx-auto hover:text-yellow-500 focus:text-yellow-200">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
              </svg>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
              </svg>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
              </svg>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
              </svg>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
              </svg>
            </span>
          </p>
          <div className="border border-l-2 border-solid w-1 h-16 hidden sm:flex bg-black"></div>
          <p className="text-[60px] flex mx-auto sm:mx-0 lg:right-3 mt-8 sm:my-auto xl:mr-12 flex-col leading-[3rem] relative">
            128
            <span className="text-[16px] leading-4 mx-auto underline">
              Reviews
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
