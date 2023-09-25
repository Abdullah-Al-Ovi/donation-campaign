import background from '../../assets/background_image.png'

const Banner = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        opacity: 0.3
      };
    return (
        <div className="relative  h-[60vh] flex justify-center items-center w-[100%] ">
        <div
          className="absolute inset-0 bg-cover bg-center  bg-black opacity-50"
          style={backgroundImageStyle}
        />
        <div className="relative z-10 text-center my-7 ">
          <h1 className="sm:text-xl lg:text-3xl font-bold mb-3">
            I Grow By Helping People In Need
          </h1>
          <div className="flex justify-center">
            <input
              className="border-[1px] p-2 bg-[#DEDEDE] placeholder:text-[#0B0B0B66] rounded-l-md placeholder:p-2 placeholder:text-xs"
              type="text"
              name="category"
              placeholder="Search Here..."
              id=""
            />
            <input className="bg-[#FF444A] p-2 rounded-r-md text-white font-medium" type="submit" value="Search" />
          </div>
        </div>
      </div>
    );
};

export default Banner;
