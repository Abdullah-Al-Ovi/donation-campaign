import PropTypes from 'prop-types';

const DonationCard = ({donation}) => {
    const {image,category,title,price,category_bg,card_bg,text_color} = donation

    return (
        <div className="card card-side mb-3 shadow-xl" style={{backgroundColor:card_bg}}>
  <div className="h-[100%] bg-cover bg-center">
  <img className="h-[100%] bg-cover bg-center" src={image} alt="Movie"/>
  </div>
  <div className="card-body">
 <div> <button className={` mb-2 p-1 rounded text-sm font-medium`} style={{backgroundColor:category_bg, color: text_color}}>{category}</button></div>
    <h2 className="text-xl font-medium my-2 " >{title}</h2>
    <p className="font-medium mb-2" style={{ color: text_color}}>${price}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary text-white mb-1" style={{ backgroundColor: text_color}}>View Details</button>
    </div>
  </div>
</div>
    );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired
}

export default DonationCard;