import './coffee-slider-block.css';
import Slider from '../coffee-slider/coffee-slider';

const SliderBlock = () => {
	return (
		<div className="slider-block">
			<img className='bg-slider' src="https://images.unsplash.com/photo-1656536665960-7bc8547e2e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="bg" />
			<div className="main-slider">
				<p className="slider-title">Check our beans</p>
				<div className="slider">
					<Slider />
				</div>
			</div>
		</div>
	);
};

export default SliderBlock;