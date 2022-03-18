import Product from "../Product/Product.component";

const Inventory = (props: any) => {
  // const {groupProducts} = props;

  return (
    <section>
      <div>Inventory Page</div>

      <section>
        {props.groupProducts
          ? props.groupProducts.map((item:any) => {
              return <Product productInfo={item} />;
            })
          : console.log("asd")}
      </section>
      {/* <section>
        {groupProducts ? groupProducts.map((item) => {
           return  <Product productInfo={item}/>
        }) : console.log('asd')}
      </section> */}
    </section>
  );
};
export default Inventory;
