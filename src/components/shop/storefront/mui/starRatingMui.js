import React from 'react'
import Icon from '@material-ui/core/Icon'

const styles = {
  Div: {
		marginTop: 10, 
		marginLeft: 7
	},
	FullStarIcon: {
		color:'#F9A825'
	},
	EmptyStarIcon: {
		color:'#F9A825'
	}
}

export const Div = ({ children }) =>
  <div style={styles.div}>
    {children}
  </div>

export const FullStarIcon = () => 
  <Icon style={styles.FullStarIcon}>
    star
  </Icon>

export const EmptyStarIcon = () => 
  <Icon style={styles.EmptyStarIcon}>
    star_border
  </Icon>