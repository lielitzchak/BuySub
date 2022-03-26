import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { addProductToListToBuy, getGroupProducts } from "../../../Services/GroupsService.service";
import Loading from "../../Features/Loading/Loading.component";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component";
import { addProduct, deleteProduct, updateProduct, updateQuentityProduct } from "../../../Services/ProductService.service";

export default function Inventory() {

  const { auth, loading, setLoading } = useContext(authContext);
  const [groupProducts, setGroupProducts] = useState([])
  const [productInfo, setProductInfo] = useState({})
  const [quantityCounter, setQuantityCounter] = useState('')
  const [showFormToAddProductToInventory, setShowFormToAddProductToInventory] = useState(false);


  useEffect(() => {
    setLoading(true)
    getGroupProducts(auth.groupName).then((data) => {
      console.log(data);
      if (data.length >= 1) {
        setGroupProducts(data)
        console.log(groupProducts);

      } else {
        console.log('empty');
      }
      setLoading(true)
    }).catch((err) => {
      console.log(err);
    }).finally(() => setLoading(false))

  }, [])

  let addToGroupList = (item) => {
    addProductToListToBuy(auth.groupName, item).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
    // <ListToBuy groupListToBuy={item}/>
  }

  let deleteProductFromInventory = (id) => {

    deleteProduct(id, auth.groupName).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

  let updateProductInfo = (event) => {
    productInfo[event.target.name] = event.target.value;
  }

  let addProductToInventory = (event) => {
    event.preventDefault();
    addProduct(productInfo, auth.groupName)
      .then((data) => {
        console.log(data)
        setProductInfo(productInfo)
      })
      .catch((err) => console.log(err))

  }

  let cancelAddProductToInventory = () => {
    setShowFormToAddProductToInventory(!showFormToAddProductToInventory);
  }

  let addToQuentity = (id,quantity) => {
    setQuantityCounter(quantity +1)
    updateQuentityProduct(id,quantityCounter).then((data) => {
      console.log(data)
      setQuantityCounter(quantityCounter)
    })
    .catch((err) => console.log(err))
  }

  let substractTheQuentity = (id,quantity) => {
    console.log(id,quantity,quantityCounter);
    setQuantityCounter(quantity -1)
    console.log(id,quantity,quantityCounter);

    updateQuentityProduct(id,quantityCounter).then((data) => {
      console.log(data)
      setQuantityCounter(quantityCounter)
    })
    .catch((err) => console.log(err))
  }
  // let addToQuentity = (id,quantity) => {
  //   setQuantityCounter(quantity +1)
  //   updateProduct(id,quantityCounter).then((data) => {
  //     console.log(data)
  //     setQuantityCounter(quantityCounter)
  //   })
  //   .catch((err) => console.log(err))
  // }

  // let substractTheQuentity = (id,quantity) => {
  //   console.log(id,quantity,quantityCounter);
  //   setQuantityCounter(quantity -1)
  //   console.log(id,quantity,quantityCounter);

  //   updateProduct(id,quantityCounter).then((data) => {
  //     console.log(data)
  //     setQuantityCounter(quantityCounter)
  //   })
  //   .catch((err) => console.log(err))
  // }


  return (

    loading ? <Loading /> :

      <section>

        <div>Inventory Page</div>

        {showFormToAddProductToInventory ?
          <section>
            <h1>Add Product to Inventory</h1>
            <form action="" autoComplete="on" onSubmit={addProductToInventory}>

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

            <button onClick={cancelAddProductToInventory}>Cancel</button>

          </section> : <button onClick={() => setShowFormToAddProductToInventory(!showFormToAddProductToInventory)}>Add Product to Inventory</button>}


        <section>
          {groupProducts.length >= 1
            ?
            groupProducts.map((item) => {
              const { productName, quantity, expirationDate, price, _id, productImage } = item;

              return (
                <article key={_id}>
                  <img src={productImage} alt="product" />
                  <h1>Product Name : {productName}</h1>
                  <h1>Price : {price}</h1>
                  <button onClick={() => addToQuentity(_id,quantity)}>Up +</button>
                  <h1>Quantity : {quantity}</h1>
                  <button onClick={() => substractTheQuentity(_id,quantity)}>Down -</button>
                  <h1>Expiration Date :{expirationDate}</h1>
                  <button onClick={() => addToGroupList(item)}>Add To List</button>
                  <button onClick={() => deleteProductFromInventory(_id)}>Delete</button>
                  <UpdateProduct item={item} />
                </article>
              )
            })
            :
            <h1>The Are No Products</h1>}
        </section>
      </section>
  );
};
