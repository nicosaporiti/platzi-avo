import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="align-center">Productos</h1>
        {productList.map((product) => (
          <>
            <div>{product.name}</div>
            <img src={product.image} alt={product.name} />
          </>
        ))}
      </div>
    </>
  )
}

export default HomePage
