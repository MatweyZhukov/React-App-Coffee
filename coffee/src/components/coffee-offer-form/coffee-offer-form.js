import './coffee-offer-form.css';
import OfferList from '../coffee-offer-list/coffee-offer-list';

const OfferForm = () => {
	return (
		<div className="offer">
			<img className="img-bg-offer" src="https://plus.unsplash.com/premium_photo-1669061096266-9f09113ff587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80" alt="bg" />
			<OfferList />
		</div>
	);
};

export default OfferForm;