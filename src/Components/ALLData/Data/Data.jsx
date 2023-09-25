import { Link, NavLink } from "react-router-dom";


const Data = ({data}) => {
    const {donation_id,image,category,title,category_bg,card_bg,text_color} = data
    
 

    return (
        <NavLink to={`/donation/${donation_id}`} className={`flex flex-col mb-3  shadow-xl rounded-md `} style={{backgroundColor:card_bg}}>
              <div className="flex-grow rounded-md  h-[80%] bg-cover bg-center ">
                 <img className="h-[100%] w-[100%]  rounded-md " src={image} alt="Shoes" />
             </div>
           
             <div className=" my-3 p-[5px]">
                <button className={` mb-2 p-1 rounded text-sm font-medium`} style={{backgroundColor:category_bg, color: text_color}}>{category}</button>
                <p className={`text-lg font-medium`} style={{ color: text_color}}>{title}</p>
             </div>
                
           </NavLink>
    );
};

export default Data;
