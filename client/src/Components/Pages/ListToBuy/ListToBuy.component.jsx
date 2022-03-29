import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { addProductToListToBuy, deleteProductFromListToBuy, getGroupInfo } from "../../../Services/GroupsService.service";
import { addProduct, updateQuentityProduct } from "../../../Services/ProductService.service";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component";
import ListToBuyCard from "../ListToBuyCard/ListToBuyCard.component";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddchartIcon from '@mui/icons-material/Addchart';


export default function ListToBuy() {
  const { auth } = useContext(authContext)
  const [groupListToBuy, setGroupListToBuy] = useState({})
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
    <section className="listToBuyContainer">

      <button className="offerProducts">Offer Me Products <AddchartIcon/></button>

      <section className="searchBox">
             <input type="search" placeholder="Serach Product" /> <button>Search</button>
        </section>

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
        <button className="AddProduct" onClick={() => setShowFormToAddProductToList(!showFormToAddProductToList)}>Add Product<AddBoxIcon/></button>}


      {groupListToBuy.length >= 1
        ?
        groupListToBuy.map((item) => {

          return <ListToBuyCard item={item} deleteProductFromList={deleteProductFromList} groupListToBuy={groupListToBuy} setGroupListToBuy={setGroupListToBuy}/>
        })
        :
        <h1>The Are No Products In The List</h1>}
        
      <button className="doneWithProducts" onClick={() => handleListToBuy(groupListToBuy)}>Done</button>

    </section>
  )
}
