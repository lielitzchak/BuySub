import { useContext, useState } from "react"
import { authContext } from "../../../Context/AuthProvider.component"
import { updateListToBuyQuentityProduct } from "../../../Services/GroupsService.service"

export default function ListToBuyCard(props) {
    const {auth} = useContext(authContext);
    const { productName, quantity, price, _id, productImage,deleteProductFromList} = props.item
    const [quantityCounter, setQuantityCounter] = useState(quantity)

    let addToQuentity = (id,quantity) => {

        setQuantityCounter(quantity => quantity +1)
        console.log(id,quantity,quantityCounter);
        updateListToBuyQuentityProduct(auth.groupName,id,quantityCounter +1).then((data) => {
            console.log(data);
            setQuantityCounter(quantityCounter => quantityCounter)
            console.log(id,quantity,quantityCounter);

        }).catch((err) => {
            console.log(err);
        })
    }
    
      let substractTheQuentity = (id,quantity) => {

        if(quantityCounter == 0) return
        setQuantityCounter(quantity => quantity -1)

        updateListToBuyQuentityProduct(auth.groupName,id,quantityCounter -1).then((data) => {
            console.log(data);
            setQuantityCounter(quantityCounter => quantityCounter)
            console.log(id,quantity,quantityCounter);

        }).catch((err) => {
            console.log(err);
        })
                // setGroupListToBuy(props.groupListToBuy => props.groupListToBuy);
      }

      
  return (
    <article className="inventoryProducts">
        <img src={productImage} alt="product" />
    
        <div className="productsInfo">
            <h1>Product Name : {productName}</h1>
            <h1>Price : {price}</h1>
        </div>
    
        <div className="quantityControls">
            <button onClick={() => addToQuentity(_id ? _id : productName,quantity)}>+</button>
            {/* <h1>Quantity : {quantity}{quantityCounter}</h1> */}
            <h1>Quantity : {quantity}</h1>
            <button onClick={() => substractTheQuentity(_id ? _id : productName,quantity)}>-</button>
        </div>
    
        <div className="productsOpertaions">
            <button onClick={() => { deleteProductFromList(_id ? _id : productName) }}>Delete</button>
        {/* <UpdateProduct item={item} /> */}
        </div>
  </article>

  )
}
