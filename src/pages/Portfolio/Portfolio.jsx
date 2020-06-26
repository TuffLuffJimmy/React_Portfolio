import React from 'react'
import MyCard from '../../components/MyCard'

const Portfolio = () => {
	return (
		<>
			<h1>Portfolio</h1>
			<MyCard
				title="CoZone"
				description="Our mission is to provide you with up to date stats about the global situation so that you can stay informed. Our info updates daily so you can view the current number of confirmed cases, recoveries, and deaths in any country that you wish to see."
				link="https://tuffluffjimmy.github.io/CoZone/"
				image="https://tuffluffjimmy.github.io/responsive_design2/resources/CoZone.jpg"
			/>
			<MyCard
				title="Movie Blog"
				description="We have all been in quarentine for a long time now and had a lot of time on our hands. If you're anything like me, that means you have watched a lot of movies over the last few months. This page is a place for you to share your thoughts on these movies and read what others thought as well. To begin simply login/sign up for free at the top of the page or search any movie in the top right corner to read others' reviews."
				link="https://salty-reef-54366.herokuapp.com/"
				image="https://tuffluffjimmy.github.io/responsive_design2/resources/movieTicket.jpg"
			/>
		</>
	)
}

export default Portfolio
