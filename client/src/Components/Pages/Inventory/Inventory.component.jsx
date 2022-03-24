import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { addProductToListToBuy, getGroupProducts } from "../../../Services/GroupsService.service";
import Loading from "../../Features/Loading/Loading.component";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component";
import { deleteProduct } from "../../../Services/ProductService.service";

export default function Inventory() {

  const { auth,loading, setLoading  } = useContext(authContext);
  const [groupProducts, setGroupProducts] = useState([])
  // const [productInfo, setProductInfo] = useState({})
  
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
    addProductToListToBuy(auth.groupName,item).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
    // <ListToBuy groupListToBuy={item}/>
  }

  let deleteProductFromInventory = (id) => {

    deleteProduct(id,auth.groupName).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (

    loading ? <Loading/> :

    <section>
      
      <div>Inventory Page</div>

      <section>
        <h1>Add Product to Inventory</h1>
        <form action="" autoComplete="on" onSubmit={addProductToGroup}>

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

    </section> 

      <section>
        {groupProducts.length >= 1
          ?
          groupProducts.map((item) => {
            const { productName, quantity, expirationDate, price, _id,productImage } = item;

            return (
              <article key={_id}>
                <img src={productImage} alt="product"/>
                <h1>Product Name : {productName}</h1>
                <h1>Price : {price}</h1>
                <h1>Quantity : {quantity}</h1>
                <h1>Expiration Date :{expirationDate}</h1>
                <button onClick={() => addToGroupList(item)}>Add To List</button>
                <button onClick={() => deleteProductFromInventory(item._id)}>Delete</button>
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
