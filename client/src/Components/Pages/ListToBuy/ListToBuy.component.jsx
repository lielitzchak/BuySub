import { useState } from "react";

export default function ListToBuy(props) {
    const [groupListToBuy, setGroupListToBuy] = useState(props.groupListToBuy)

  return (
    <section>

    <div>listToBuy</div>

    {groupListToBuy.length >= 1
     ?
     groupListToBuy.map((item) => {
       const { productName, quantity, expirationDate, price, _id,productImage } = item;

       return (
         <article key={_id}>
           <img src={productImage} alt="product"/>
           <h1>Product Name : {productName}</h1>
           <h1>Price : {price}</h1>
           <h1>Quantity : {quantity}</h1>
           <h1>Expiration Date :{expirationDate}</h1>
           {/* <button onClick={() => addToGroupList(item)}>Add To List</button> */}
           {/* <UpdateProduct item={item} /> */}
         </article>
       )
     })
     :
     <h1>The Are No Products</h1>}
</section> 
  )
}
