import './app.css';
import Header from '../coffee-header/coffee-header';
import MainBlock from '../coffee-main-block/coffee-main-block';
import OfferForm from '../coffee-offer-form/coffee-offer-form';
import SliderBlock from '../coffee-slider-block/coffee-slider-block';
import Footer from '../coffee-footer/coffee-footer';

const App = () => {
	return (
		<div className='main'>
			<Header />
			<MainBlock />
			<SliderBlock />
			<OfferForm />
			<Footer />
		</div>
	);
};

export default App;