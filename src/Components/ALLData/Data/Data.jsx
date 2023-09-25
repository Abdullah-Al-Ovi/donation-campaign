

const Data = ({data}) => {
    const {image,category,title,category_bg,card_bg,text_color} = data
    
 

    return (
        <div className={`flex flex-col shadow-xl rounded-md ${card_bg}`} style={{backgroundColor:card_bg}}>
            <div className="flex-grow rounded-md h-[80%] bg-cover bg-center ">
              <img className="h-[100%] rounded-md " src={image} alt="Shoes" />
            </div>
           
                <div className="my-3 p-2">
                <button className={` mb-2 p-1 rounded text-sm font-medium`} style={{backgroundColor:category_bg, color: text_color}}>{category}</button>
                <p className={`text-lg font-medium`} style={{ color: text_color}}>{title}</p>
                </div>
                
                
           
        </div>
    );
};

export default Data;