import { useState } from "react";
import { updateProduct } from "../../../Services/ProductService.service";

export default function UpdateProduct(props: any) {
    const [productDetail, setProductDetail]: any = useState({});
    const [prevProductDetail, setPrevProductDetail]: any = useState(props.item);
    const [showUpdate, setshowUpdate] = useState(false)


    let updateProductInfo = (event: any): void => {
        productDetail[event.target.name] = event.target.value;        
        if (productDetail.price == ""){
            productDetail.price = prevProductDetail.price
        }
        if (productDetail.expirationDate == ""){
            productDetail.expirationDate = prevProductDetail.expirationDate
        }
        if (productDetail.productImage == ""){
            productDetail.productImage = prevProductDetail.productImage
        }
    }


    let editProduct = (event: any): void => {
        event.preventDefault();
        updateProduct(props.item._id, productDetail)
            .then((res) => { console.log(res) })
            .then(() => { setshowUpdate(!showUpdate) })
            .then(() => { setProductDetail(productDetail) })
            .catch((err) => {
                console.log(err);
            });
            

    }
    console.log(prevProductDetail);
    let cancel = ()=>{
        setshowUpdate(!showUpdate)
    }

    return (
        <>
            {showUpdate ?
                <section>
                    <h1>Update Product</h1>
                    <form action="" autoComplete="on" onSubmit={editProduct}>

                        <label>Product Name</label>
                        <input type="text" name="productName" placeholder={prevProductDetail.productName}   onChange={updateProductInfo} required />

                        <label>Price</label>
                        <input type="text" name="price" placeholder={prevProductDetail.price}  onChange={updateProductInfo} />

                        <label>Quantity</label>
                        <input type="number" name="quantity" placeholder={prevProductDetail.quantity} onChange={updateProductInfo} required />

                        <label>Expiration Date</label>
                        <input type="text" name="expirationDate" placeholder={"yyyy/mm/dd"} onChange={updateProductInfo} />

                        <label>Product Image</label>
                        <input type="text" name="productImage" placeholder={prevProductDetail.productImage} onChange={updateProductInfo} />

                        <button>Update Product</button>
                    </form>
                <button onClick={cancel}>Cancel</button> 

                    {console.log(prevProductDetail)}

                </section> :
                <button onClick={() => setshowUpdate(!showUpdate)}>Edit</button>}
        </>

    )
}
