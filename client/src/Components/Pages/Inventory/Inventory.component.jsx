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

  // let edit = (id) => {
  //   return <section>{id}</section>
  // }
  return (
    <section>

      <div>Inventory Page</div>

      <section>
        {groupProducts.length >= 1
          ?
          groupProducts.map((item) => {
            const { productName, quantity, expirationDate, price, _id } = item;

            return (
              <article key={_id}>
                <h1>Product Name : {_id}</h1>
                <h1>Price : {price}</h1>
                <h1>Quantity : {quantity}</h1>
                <h1>Expiration Date :{expirationDate}</h1>
                <button onClick={() => UpdateProduct(item)}>Edit</button>
              </article>
            )
          })
          :
          <h1>The Are No Products</h1>}
      </section>
    </section>
  );
};
