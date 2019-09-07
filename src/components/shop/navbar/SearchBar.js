import React from 'react'
import {
  Div,
  SearchIcon,
  Input
} from './mui/searchBarMui'

const SearchBar = () => 
  <Div>
    <SearchIcon/>
    <Input placeholder="Search…"/>
  </Div>

export default SearchBar