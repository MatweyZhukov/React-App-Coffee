import './coffee-offer-list.css';
// import OfferListItem from '../coffee-offer-list-item/coffee-offer-list-item';
import Cards from '../coffee-offer-list-cards/coffee-offer-list-cards';

const OfferList = () => {
	return (
		<div className="main-offer">
			<p className="offer-text">Our best</p>
			{/* <OfferListItem /> */}
			<Cards />
		</div>
	);
};

export default OfferList;