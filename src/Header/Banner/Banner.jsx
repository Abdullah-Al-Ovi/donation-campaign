import PropTypes from 'prop-types';
import background from '../../assets/background_image.png'


const Banner = ({setVal}) => {

    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        opacity: 0.3
      };

      const handleSearch=e=>{
        e.preventDefault()
        const input = e.target.category.value
        setVal(input.toLowerCase());
        
      }

    return (
        <div className="relative  h-[60vh] flex justify-center items-center w-[100%] ">
        <div
          className="absolute inset-0 bg-cover bg-center  bg-black opacity-50"
          style={backgroundImageStyle}
        />
        <div className="relative z-10 text-center my-7 ">
          <h1 className="sm:text-xl lg:text-3xl font-bold mb-3">
            We Grow By Helping People In Need
          </h1>
          <div className="flex justify-center">
           <form onSubmit={handleSearch}>
           <input
              className="border-[1px] p-2 bg-[#DEDEDE] placeholder:text-[#0B0B0B66] rounded-l-md placeholder:p-2 placeholder:text-xs"
              type="text"
              name="category"
              title='Search by category name'
              placeholder="Search Here..."
              id=""
            />
            <input className="bg-[#FF444A] p-2 rounded-r-md text-white font-medium"  type="submit" value="Search" />
           </form>
            
          </div>
        </div>
      </div>
    );
};
Banner.propTypes ={
  setVal: PropTypes.func.isRequired
}


export default Banner;
