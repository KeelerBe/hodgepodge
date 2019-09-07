import React from 'react'
import CardMui from '@material-ui/core/Card'
import CardContentMui from '@material-ui/core/CardContent'
import CardMediaMui from '@material-ui/core/CardMedia'
import TypographyMui from '@material-ui/core/Typography'
import GridMui from '@material-ui/core/Grid'

const styles = {
  Card: {
    height: 350,
    width: 230,
  },
  CardMedia: {
    paddingTop: '56.25%', // 16:9
    minHeight: 200
  },
  CardContent: {
    marginBottom: -12
  },
  Typography1: {
    marginBottom: -2
  },
  Typography2: {
    fontWeight: 300,
    fontSize: 13,
    marginBottom: 10
  },
  Typography3: {
    color: '#555',
    fontSize: 17,
  },
  GridItem1: {
    paddingLeft: 15
  }
}

export const Card = ({ children, ...props }) => 
  <CardMui style={styles.Card}>
    {children}
  </CardMui>

export const CardMedia = props => 
  <CardMediaMui 
    style={styles.CardMedia}
    {...props}
  />

export const CardContent = ({ children }) =>
  <CardContentMui style={styles.CardContent}>
    {children}
  </CardContentMui>

export const Typography1 = ({ children }) =>
  <TypographyMui
    style={styles.Typography1}
    variant="subheading"
    noWrap
    gutterBottom
  >
    {children}
  </TypographyMui>

export const Typography2 = ({ children }) =>
  <TypographyMui
    style={styles.Typography2}
    color="textSecondary"
    gutterBottom
  >
    {children}
  </TypographyMui>

export const Typography3 = ({ children }) =>
  <TypographyMui
    style={styles.Typography3}
    variant="title"
    gutterBottom
  >
    {children}
  </TypographyMui>

export const GridContainer = ({ children }) =>
  <GridMui container
    justify="space-around" 
    alignItems="flex-end"
  >
    {children}
  </GridMui>

export const GridItem1 = ({ children }) =>
  <GridMui item
    style={styles.GridItem1}
    xs={9}
  >
    {children}
  </GridMui>

export const GridItem2 = ({ children }) =>
  <GridMui item
    xs={3}
  >
    {children}
  </GridMui>
