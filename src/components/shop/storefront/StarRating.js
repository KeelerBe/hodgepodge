import React from 'react'
import {
	Div,
	FullStarIcon,
	EmptyStarIcon 
} from './mui/starRatingMui'
import Rating from 'react-rating'

const StarRating = () => 
	<Div>
		<Rating 
			fullSymbol={<FullStarIcon/>}
			emptySymbol={<EmptyStarIcon/>}
		/>
	</Div>


export default StarRating