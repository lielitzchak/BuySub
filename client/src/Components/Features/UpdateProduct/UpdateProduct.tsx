import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { updateProduct,getProductById } from "../../../Services/ProductService.service";

export default function UpdateProduct(id:any) {
    const [productDetail, setProductDetail]: any = useState({});
    const [prevProductDetail, setPrevProductDetail]: any = useState({});
    const { auth } = useContext(authContext);

    useEffect(()=>{
        getProductById(id)
        .then((data)=>{ setPrevProductDetail(data)})
    },[])
    let updateProductInfo = (event: any): void => {
        productDetail[event.target.name] = event.target.value;
        // setProductDetail(prevProductDetail);

        if (productDetail.productName == ""){
            productDetail.productName = prevProductDetail.productName
        }
        if (productDetail.price == ""){
            productDetail.price = prevProductDetail.price
        }
        if (productDetail.quantity == ""){
            productDetail.quantity = prevProductDetail.quantity
        }
        if (productDetail.expirationDate == ""){
            productDetail.expirationDate = prevProductDetail.expirationDate
        }
    }
    // let updateProductInfo = (event: any): void => {
    //     productDetail[event.target.name] = event.target.value;
    //     if (event.target.value == "" ) {
    //         switch (productDetail[event.target.name]) {
    //             case "productName":
    
    //                 break;
    //             case "price":
    
    //                 break;
    //             case "quantity":
    
    //                 break;
    //             case "expirationDate":
    
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
       
    // }

    let editProduct = (event: any): void => {
        event.preventDefault();
        updateProduct(id,productDetail)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err);
        })
        
    }
    console.log(prevProductDetail);
    
    return (
        <section>
            <h1>Update Product</h1>
            <form action="" autoComplete="on" onSubmit={editProduct}>

                <label>Product Name</label>
                <input type="text" name="productName" value={prevProductDetail.productName} onChange={updateProductInfo} required />

                <label>Price</label>
                <input type="text" name="price" value={prevProductDetail.price} onChange={updateProductInfo} />

                <label>Quantity</label>
                <input type="number" name="quantity" value={prevProductDetail.quantity} onChange={updateProductInfo} required />

                <label>Expiration Date</label>
                <input type="date" name="expirationDate" value={prevProductDetail.expirationDate} onChange={updateProductInfo} />

                <button>Update Product</button>
            </form>
            {console.log(prevProductDetail)}

        </section>
    )
}
