import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupInfo } from "../../../Services/GroupsService.service";
import UpdateProduct from "../../Features/UpdateProduct/UpdateProduct.component";

export default function ListToBuy() {
    const {auth} = useContext(authContext)
    const [groupListToBuy, setGroupListToBuy] = useState({})
    // const [groupListToBuy, setGroupListToBuy] = useState(props.groupListToBuy)

    useEffect(() => {

      getGroupInfo(auth.groupName).then((data) => {
        setGroupListToBuy(data.listToBuy)
           console.log(data.listToBuy);
      })
    },[])

  return (
    <section>

    <div>listToBuy</div>

    {groupListToBuy.length >= 1
     ?
     groupListToBuy.map((item) => {
       const { productName, quantity, expirationDate, price, _id,productImage } = item;

       return (
         <article key={_id}>
           <img src={productImage} alt="product"/>
           <h1>Product Name : {productName}</h1>
           <h1>Price : {price}</h1>
           <h1>Quantity : {quantity}</h1>
           <UpdateProduct item={item} />
         </article>
       )
     })
     :
     <h1>The Are No Products In The List</h1>}
</section> 
  )
}
