import { useContext, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { addProduct } from "../../../Services/ProductService.service";

export default function AddProduct() {
    const [productDetail, setProductDetail]: any = useState({});
    const {auth} = useContext(authContext);

    let updateProductInfo = (event: any): void => {
      productDetail[event.target.name] = event.target.value;
    }

    let addProductToGroup = (event: any): void => {
      event.preventDefault();
      // setProductDetail(productDetail)
      addProduct(productDetail,auth.groupName).then((data) => {
        console.log(data);

      }).catch((err) => {

          console.log(err); 
      })

    }

  return (
    <section>
        <h1>Add Product</h1>
        <form action="" autoComplete="true" onSubmit={addProductToGroup}>

            <label>Product Name</label>
            <input type="text" name="productName" onChange={updateProductInfo} required />

            <label>Price</label>
            <input type="text" name="price" onChange={updateProductInfo} />

            <label>Quantity</label>
            <input type="number" name="quantity" onChange={updateProductInfo} required />

            <label>Expiration Date</label>
            <input type="text" name="expirationDate" onChange={updateProductInfo} />

            <button>Add Product</button>
        </form>    

    </section> 
  )
}
