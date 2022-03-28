import { useState } from "react"

export default function ListToBuyCard(props) {
    const { productName, quantity, price, _id, productImage,deleteProductFromList } = props.item

    const [quantityCounter, setQuantityCounter] = useState(quantity)

    let addToQuentity = (id,quantity) => {
        setQuantityCounter(quantity => quantity +1)
        setQuantityCounter( quantityCounter => quantityCounter)
        console.log(id,quantity,quantityCounter);
      }
    
      let substractTheQuentity = (id,quantity) => {
        
        if(quantityCounter == 0) return
        setQuantityCounter(quantity => quantity -1)
        setQuantityCounter(quantityCounter => quantityCounter)
        console.log(id,quantity,quantityCounter);
      }

      
  return (
    <article key={_id}>
    <img src={productImage} alt="product" />
    <h1>Product Name : {productName}</h1>
    <h1>Price : {price}</h1>
    <button onClick={() => addToQuentity(_id ? _id : productName,quantity)}>Up +</button>
    <h1>Quantity : {quantity}{quantityCounter}</h1>
    <button onClick={() => substractTheQuentity(_id ? _id : productName,quantity)}>Down -</button>
    <h1>id : {_id}</h1>
    {/* <UpdateProduct item={item} /> */}
    <button onClick={() => { deleteProductFromList(_id ? _id : productName) }}>Delete</button>
  </article>

  )
}
