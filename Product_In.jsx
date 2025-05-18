import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Product_In() {
    const [ProductCode, setProductCode] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [UniquePrice, setUniquePrice] = useState('')
    const [TotalPrice, setTotalPrice] = useState('')
    const [Product,setProduct]=useState([])
    const navigate =useNavigate()
     
    return (
        <div>

        </div>
    )
}

export default Product_In