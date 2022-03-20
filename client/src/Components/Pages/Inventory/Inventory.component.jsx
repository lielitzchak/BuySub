import { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupProducts } from "../../../Services/GroupsService.service";

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


  return (
    <section>
      <Link to="/AddProduct">AddProduct</Link>

      <div>Inventory Page</div>

      <section>
        {groupProducts.length >= 1 ? groupProducts.map((item) => {
          const { productName,quantity, expirationDate } = item;

          return (
            <article key={item._id}>
              <h1>Product Name : {productName}</h1>
              <h1>Quantity : {quantity}</h1>
              <h1>Expiration Date :{expirationDate}</h1>
            </article>
          )
        }) : <h1>The Are No Products</h1>}
      </section>
    </section>
  );
};
