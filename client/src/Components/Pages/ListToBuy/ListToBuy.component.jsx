import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { addProductToListToBuy, deleteProductFromListToBuy, getGroupInfo } from "../../../Services/GroupsService.service";
import { addProduct, updateQuentityProduct } from "../../../Services/ProductService.service";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component";
import ListToBuyCard from "../ListToBuyCard/ListToBuyCard.component";

export default function ListToBuy() {
  const { auth } = useContext(authContext)
  const [groupListToBuy, setGroupListToBuy] = useState({})
  const [productInfo, setProductInfo] = useState({});
  const [showFormToAddProductToList, setShowFormToAddProductToList] = useState(false);
  const [quantityCounter, setQuantityCounter] = useState(0)


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

  // let addToQuentity = (id,quantity) => {
  //   setQuantityCounter(quantity => quantity +1)
  //   setQuantityCounter( quantityCounter => quantityCounter)
  //   console.log(id,quantity,quantityCounter);
  // }

  // let substractTheQuentity = (id,quantity) => {
    
  //   if(quantityCounter == 0) return
  //   setQuantityCounter(quantity => quantity -1)
  //   setQuantityCounter(quantityCounter => quantityCounter)
  //   console.log(id,quantity,quantityCounter);
  // }

  let deleteProductFromList = (id) => {
    deleteProductFromListToBuy(auth.groupName, id)
      .then((data) => {
        console.log(data)
        setProductInfo(productInfo)
      }).catch((err) => {
        console.log(err);
      })
      .catch((err) => console.log(err))
  }

  let handleListToBuy = (listToBuy) => {

    listToBuy.forEach(item => {
      if (item._id) {
        
        updateQuentityProduct(item._id,item.quantity).then((data) => {
          console.log(data)
        })
        .catch((err) => console.log(err))

      } else {
        addProduct(item, auth.groupName)
          .then((data) => {
            console.log(data)
          })
          .catch((err) => console.log(err))
      }
    });

    // deleteProductFromListToBuy(auth.groupName, id)
    // .then((data) => {
    //   console.log(data)
    //   setProductInfo(productInfo)
    // }).catch((err) => {
    //   console.log(err);
    // })
    // .catch((err) => console.log(err))


  }



  return (
    <section>

      <div>listToBuy</div>
      <button>Offer Me Products</button>

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
          // const { productName, quantity, price, _id, productImage } = item;

          return (
            // <article key={_id}>
            //   <img src={productImage} alt="product" />
            //   <h1>Product Name : {productName}</h1>
            //   <h1>Price : {price}</h1>
            //   <button onClick={() => addToQuentity(_id ? _id : productName,quantity)}>Up +</button>
            //   <h1>Quantity : {quantity}</h1>
            //   <button onClick={() => substractTheQuentity(_id ? _id : productName,quantity)}>Down -</button>
            //   <h1>id : {_id}</h1>
            //   {/* <UpdateProduct item={item} /> */}
            //   <button onClick={() => { deleteProductFromList(_id ? _id : productName) }}>Delete</button>
            // </article>
            <ListToBuyCard item={item} deleteProductFromList={deleteProductFromList}/>
          )
        })
        :
        <h1>The Are No Products In The List</h1>}
      <button onClick={() => handleListToBuy(groupListToBuy)}>Done</button>

    </section>
  )
}
