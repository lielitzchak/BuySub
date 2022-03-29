import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupProducts } from "../../../Services/GroupsService.service";
import Loading from "../../Features/Loading/Loading.component";
import { addProduct} from "../../../Services/ProductService.service";
import InventoryCard from "../InventoryCard/InventoryCard.component";
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function Inventory() {

  const { auth, loading, setLoading } = useContext(authContext);
  const [groupProducts, setGroupProducts] = useState([])
  const [productInfo, setProductInfo] = useState({})
  const [showFormToAddProductToInventory, setShowFormToAddProductToInventory] = useState(false);


  useEffect(() => {
    setLoading(true)
    getGroupProducts(auth.groupName).then((data) => {
      console.log(data);
      if (data.length >= 1) {
        setGroupProducts(data)
        
      } else {
        console.log('empty');
      }
      setLoading(true)
    }).catch((err) => {
      console.log(err);
    }).finally(() => setLoading(false))

  }, [])

  let updateProductInfo = (event) => {
    productInfo[event.target.name] = event.target.value;
  }

  let addProductToInventory = (event) => {
    event.preventDefault();
    addProduct(productInfo, auth.groupName)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.log(err))

  }

  let cancelAddProductToInventory = () => {
    setShowFormToAddProductToInventory(!showFormToAddProductToInventory);
  }

  return (

    loading ? <Loading /> :

      <section>

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

          </section> : <button className="addProductToInventory" onClick={() => setShowFormToAddProductToInventory(!showFormToAddProductToInventory)}> Add Product <AddBoxIcon/></button>}


        <section className="inventoryContainer">

        <section className="searchBox">
             <input type="search" placeholder="Serach Product" /> <button>Search</button>
        </section>
        
          {groupProducts && groupProducts.length >= 1
            ?
            groupProducts.map((item) => {

              return <InventoryCard key={item._id} item={item}/>
              
            })
            :
            <h1>The Are No Products</h1>}
        </section>
      </section>
  );
};
