import { useState } from "react";
import { updateProduct, getProductById } from "../../../Services/ProductService.service";

export default function UpdateProduct(props: any) {
    const [productDetail, setProductDetail]: any = useState({});
    const [prevProductDetail, setPrevProductDetail]: any = useState(props.item);
    const [showUpdate, setshowUpdate] = useState(false)


    let updateProductInfo = (event: any): void => {
        productDetail[event.target.name] = event.target.value;
        // setProductDetail(prevProductDetail);

        // if (productDetail.productName == ""){
        //     productDetail.productName = prevProductDetail.productName
        // }
        // if (productDetail.price == ""){
        //     productDetail.price = prevProductDetail.price
        // }
        // if (productDetail.quantity == ""){
        //     productDetail.quantity = prevProductDetail.quantity
        // }
        // if (productDetail.expirationDate == ""){
        //     productDetail.expirationDate = prevProductDetail.expirationDate
        // }
    }


    let editProduct = (event: any): void => {
        event.preventDefault();
        updateProduct(props.item._id, productDetail)
            .then((res) => { console.log(res) })
            .catch((err) => {
                console.log(err);
            });
            

    }
    console.log(prevProductDetail);

    return (
        <>
            {showUpdate ?
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
                        <input type="text" name="expirationDate" value={prevProductDetail.expirationDate} placeholder={"yyyy/mm/dd"} onChange={updateProductInfo} />

                        <button>Update Product</button>
                    </form>
                    {console.log(prevProductDetail)}

                </section> :
                <button onClick={() => setshowUpdate(!showUpdate)}>Edit</button>}
        </>

    )
}
