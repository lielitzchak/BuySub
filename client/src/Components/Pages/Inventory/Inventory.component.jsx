import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupProducts } from "../../../Services/GroupsService.service";
import Loading from "../../Features/Loading/Loading.component";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component";
import ListToBuy from "../ListToBuy/ListToBuy.component";

export default function Inventory() {

  const { auth,loading, setLoading  } = useContext(authContext);
  const [groupProducts, setGroupProducts] = useState([])
  
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
    <ListToBuy groupListToBuy={item}/>
  }



  return (

    loading ? <Loading/> :

    <section>
      
      <div>Inventory Page</div>

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
