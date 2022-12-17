import { Container, Row, Col, Card } from 'react-bootstrap';

const Cards = () => {
	return (
		<Container className="mt-5 mb-5">
			<Row>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="https://images.unsplash.com/photo-1525088553748-01d6e210e00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
						<Card.Body>
							<Card.Title>Solimo Coffee Beans 2kg</Card.Title>
							<Card.Text>
								10.73$
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
						<Card.Body>
							<Card.Title>Presto Coffee Beans 1kg</Card.Title>
							<Card.Text>
								15.99$
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1667336906826-b800ab208825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
						<Card.Body>
							<Card.Title>AROMISTICO Coffee 1kg</Card.Title>
							<Card.Text>
								6.99$
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Cards;