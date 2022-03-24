import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { addProductToListToBuy, deleteProductFromListToBuy, getGroupInfo } from "../../../Services/GroupsService.service";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component";

export default function ListToBuy() {
  const { auth } = useContext(authContext)
  const [groupListToBuy, setGroupListToBuy] = useState({})
  // const [groupListToBuy, setGroupListToBuy] = useState(props.groupListToBuy)
  const [productInfo, setProductInfo] = useState({});
  const [showFormToAddProductToList, setShowFormToAddProductToList] = useState(false);
  useEffect(() => {

    getGroupInfo(auth.groupName).then((data) => {
      setGroupListToBuy(data.listToBuy)
      console.log(data.listToBuy);
    })
  }, [])

  let updateProductInfo = (event) => {
    productInfo[event.target.name] = event.target.value;
  }

  let addProductToList = (event) => {
    event.preventDefault();
    addProductToListToBuy(auth.groupName, productInfo)
      .then((data) => {
        console.log(data)
        setProductInfo(productInfo)
      }).catch((err) => {
        console.log(err);
      })
  }

  let deleteProductFromList = (id) => {
    deleteProductFromListToBuy(auth.groupName,id)
      .then((data) => {
        console.log(data)
        setProductInfo(productInfo)
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <section>

      <div>listToBuy</div>
      {showFormToAddProductToList ?
        <section>
          <h1>Add Product to List</h1>
          <form action="" autoComplete="on" onSubmit={addProductToList}>

            <label>Product Name</label>
            <input type="text" name="productName" onChange={updateProductInfo} required />

            <label>Price</label>
            <input type="text" name="price" onChange={updateProductInfo} />

            <label>Quantity</label>
            <input type="number" name="quantity" onChange={updateProductInfo} required />

            <label>Expiration Date</label>
            <input type="date" name="expirationDate" onChange={updateProductInfo} />

            <label>image product</label>
            <input type="text" name="productImage" onChange={updateProductInfo} />

            <button>Add Product</button>
          </form>

          <button onClick={() => setShowFormToAddProductToList(!showFormToAddProductToList)}>Cancel</button>

        </section> :
        <button onClick={() => setShowFormToAddProductToList(!showFormToAddProductToList)}>Add Product to List</button>}

      {groupListToBuy.length >= 1
        ?
        groupListToBuy.map((item) => {
          const { productName, quantity, price, _id, productImage } = item;

          return (
            <article key={_id}>
              <img src={productImage} alt="product" />
              <h1>Product Name : {productName}</h1>
              <h1>Price : {price}</h1>
              <h1>Quantity : {quantity}</h1>
              <UpdateProduct item={item} />
              <button onClick={() => {deleteProductFromList(_id)}}>Delete</button>
            </article>
          )
        })
        :
        <h1>The Are No Products In The List</h1>}
    </section>
  )
}
