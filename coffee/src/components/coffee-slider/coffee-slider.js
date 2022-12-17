import { Carousel } from "react-bootstrap";

const Slider = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Solimo Coffee Beans</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Presto Coffee Beans</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://plus.unsplash.com/premium_photo-1667336906826-b800ab208825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>AROMISTICO Coffee</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;