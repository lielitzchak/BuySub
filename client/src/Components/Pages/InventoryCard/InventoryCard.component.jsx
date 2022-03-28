import { useContext, useState } from "react"
import { authContext } from "../../../Context/AuthProvider.component";
import { addProductToListToBuy } from "../../../Services/GroupsService.service";
import { deleteProduct, updateQuentityProduct } from "../../../Services/ProductService.service";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component"

export default function InventoryCard(props) {
    const { productName, quantity, expirationDate, price, _id, productImage } = props.item;

    const { auth} = useContext(authContext);
    const [quantityCounter, setQuantityCounter] = useState(quantity)

    let addToGroupList = (item) => {
        addProductToListToBuy(auth.groupName, item).then((data) => {
          console.log(data);
        }).catch((err) => {
          console.log(err);
        })
      }
    
      let deleteProductFromInventory = (id) => {
    
        deleteProduct(id, auth.groupName).then((data) => {
          console.log(data);
        }).catch((err) => {
          console.log(err);
        })
      }
    

    
      let addToQuentity = (id,quantity) => {
        setQuantityCounter(quantity => quantity +1)
    
    
        console.log(id,quantity,quantityCounter);
    
        updateQuentityProduct(id,quantityCounter +1).then((data) => {
          console.log(data)
              setQuantityCounter( quantityCounter => quantityCounter)
        })
        .catch((err) => console.log(err))
      }
    
      let substractTheQuentity = (id,quantity) => {
        
        if(quantityCounter == 0) return
        setQuantityCounter(quantity => quantity -1)
        console.log(id,quantity,quantityCounter);
    
    
        updateQuentityProduct(id,quantityCounter -1).then((data) => {
          console.log(data)
              setQuantityCounter(quantityCounter => quantityCounter)
        })
        .catch((err) => console.log(err))
      }
    

  return (
    <article  className={quantity >= 3 ? 'inventoryProducts quentityLessThen3' : 'inventoryProducts'} >
        <img src={productImage} alt="product"/>
        <div className="productsInfo">
            <h1>Product Name : {productName}</h1>
            <h1>Price : {price ? price : 'None'}</h1>
            <h1>Expiration Date : {expirationDate.toString().substr(0,10)}</h1>
        </div>
        <div className="quantityControls">
            <button onClick={() => addToQuentity(_id,quantity)}>+</button>
            <h1>Quantity : {quantityCounter}</h1>
            <button onClick={() => substractTheQuentity(_id,quantity)}>-</button>
        </div>
        <div className="productsOpertaions">
            <button onClick={() => addToGroupList(props.item)}>Add To List</button>
            <button onClick={() => deleteProductFromInventory(_id)}>Delete</button>
            <UpdateProduct item={props.item} />
        </div>
  </article>
  )
}
