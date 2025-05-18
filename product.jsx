import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {
    const[productCode, setProductCode]=useState('')
    const[productName, setProductName]=useState('')
    const navigate =useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/product',{productCode,productName})
        .then((res) => {
            console.log(res.data)
            alert(res.data.message)
            window.location.reload()
            })
        .catch((err) => {
            console.log(err)
            })
          }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit} method='post'>
            <h1>Product Form</h1>
            ProductCode:⤵ <br />
            <input type="text" value={productCode} onChange={e=>
            setProductCode(e.target.value)} placeholder='Enter Product Code' />
            ProductName:⤵ <br />
            <input type="text" value={productName} onChange={e=>
             setProductName(e.target.value)} placeholder='Enter Product Name' />
             <button type='submit'>Insert✔</button>
        </form>

    </div>
  )
}

export default Product