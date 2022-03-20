import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupProducts } from "../../../Services/GroupsService.service";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct";

export default function Inventory() {

  const { auth } = useContext(authContext);
  const [groupProducts, setGroupProducts] = useState([])

  useEffect(() => {
    // await getGroupProducts(await auth.groupName).then((data) => {
    getGroupProducts(auth.groupName).then((data) => {
    // getGroupProducts('testgroup').then((data) => {
      console.log(data);
      if (data.length >= 1) {
        setGroupProducts(data)
        console.log(groupProducts);

      } else {
        console.log('empty');
      }

    }).catch((err) => {
      console.log(err);
    })

  }, [])

  let edit = (id)=>{
    return <section>{id}</section>
  }
  return (
    <section>

      <div>Inventory Page</div>

      <section>
        {groupProducts.length >= 1 ? groupProducts.map((item) => {
          const { productName,quantity, expirationDate,price } = item;

          return (
            <article key={item._id}>
              <h1>Product Name : {productName}</h1>
              <h1>Price : {price}</h1>
              <h1>Quantity : {quantity}</h1>
              <h1>Expiration Date :{expirationDate}</h1>
              <button onClick={()=>edit(item._id)}>Edit</button>
              {/* <button onClick={()=>UpdateProduct(item._id)}>Edit</button> */}
              {console.log(item)}
              {}
            </article>
          )
        }) : <h1>The Are No Products</h1>}
      </section>
    </section>
  );
};
