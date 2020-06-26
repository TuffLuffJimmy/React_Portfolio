import React from 'react'
import { Button, Card } from 'react-bootstrap'

const MyCard = (props) => {
	console.log(props)
	return (
		<div>
			{/* <h1>{props.title}</h1>
			<h3>{props.link}</h3>
			<p>{props.description}</p> */}

			<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={props.image} />
			<Card.Body>
		<Card.Title>{props.Title}</Card.Title>
				<Card.Text>
					{props.description}
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
		</div>
	)
}

export default MyCard
