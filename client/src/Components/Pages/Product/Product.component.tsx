const Product = (props: any) => {
  // const {productName,expirationDate} = productInfo;

  return (
    <article>
      <h1>{props.productInfo.productName}</h1>
      <h1>{props.productInfo.expirationDate}</h1>
    </article>
    // <article>
    //     <h1>{productName}</h1>
    //     <h1>{expirationDate}</h1>
    // </article>
  );
};
export default Product;
