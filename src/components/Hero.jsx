const App = () => {
  return (
    <>
      <section className="flex flex-row justify-between w-full overflow-hidden">
        <div className="flex items-center">
          <svg
            className="w-12 h-12 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 15V17C5 18.0544 5.81588 18.9182 6.85074 18.9945L7 19H10V21H7C4.79086 21 3 19.2091 3 17V15H5ZM18 10L22.4 21H20.245L19.044 18H14.954L13.755 21H11.601L16 10H18ZM17 12.8852L15.753 16H18.245L17 12.8852ZM8 2V4H12V11H8V14H6V11H2V4H6V2H8ZM17 3C19.2091 3 21 4.79086 21 7V9H19V7C19 5.89543 18.1046 5 17 5H14V3H17ZM6 6H4V9H6V6ZM10 6H8V9H10V6Z"></path>
          </svg>
          <span className="text-headingColor text-[18px] sm:text-[22px] leading-4 sm:leading-5 md:leading-6 md:text-[25px] lg:text-[30px] font-medium md:font-semibold text__para">
            Paris: Chambre en duplex à la Villette
          </span>
        </div>
        <div className="flex items-center flex-row">
          <div className="mr-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2.58582L18.2071 8.79292L16.7929 10.2071L13 6.41424V16H11V6.41424L7.20711 10.2071L5.79289 8.79292L12 2.58582ZM3 18V14H5V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14H21V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18Z"></path>
            </svg>
            <span className="ml-1 underline">Share</span>
          </div>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path>
            </svg>
            <span className="ml-1 underline">Save</span>
          </div>
        </div>
      </section>
      <section className="my-8 h-full overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img
            className="rounded-2xl pb-1 md:rounded-l-2xl md:row-span-2 pr-2 h-full"
            src="https://images.pexels.com/photos/17746496/pexels-photo-17746496/free-photo-of-park-and-hotel-des-invalides-in-paris.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="md:pr-1 md:pl-1 lg:ml-0 pb-1 rounded-2xl md:rounded-none md:rounded-r-2xl lg:rounded-none"
            src="https://images.pexels.com/photos/4287277/pexels-photo-4287277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <img
            className="md:pl-1 pb-1 rounded-2xl md:rounded-none md:rounded-r-2xl"
            src="https://images.pexels.com/photos/4287277/pexels-photo-4287277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <img
            className="md:pr-1 md:mt-1 pb-1 rounded-2xl md:rounded-none md:rounded-l-2xl lg:rounded-none"
            src="https://images.pexels.com/photos/4287277/pexels-photo-4287277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <img
            className="pl-1 mt-1 rounded-2xl md:rounded-none md:rounded-r-2xl"
            src="https://images.pexels.com/photos/4287277/pexels-photo-4287277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="relative bottom-16 mr-3 float-end">
          <button className="flex bg-[#e8e8e8] active:bg-[#d8d2d2] flex-row text-center w-[200px] h-[40px] border border-black items-center justify-center rounded-md">
            <svg
              className="w-5 h-5 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
            </svg>
            <span className="">Show all photos</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
