import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './mui/addNewProductButtonMui'

const AddNewProductButton = ({ classes }) => 
  <Link to="/admin/inventory/add">
    <Button>
      Add New Product
    </Button>
  </Link>

export default AddNewProductButton