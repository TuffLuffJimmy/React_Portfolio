import React from 'react'
import { Button, Card } from 'react-bootstrap'

const MyCard = (props) => {
	console.log(props)
	return (
		<div>
			{/* <h1>{props.title}</h1>
			<h3>{props.link}</h3>
			<p>{props.description}</p> */}

			<Card>
				<Card.Img
					variant="top"
					src={props.image}
					style={{ width: '400px', height: '400px' }}
				/>
				<Card.Body>
					<Card.Title>{props.Title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
					<a href={props.link}>
						<Button variant="primary">Go to Project</Button>
					</a>
				</Card.Body>
			</Card>
		</div>
	)
}

export default MyCard
