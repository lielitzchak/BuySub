import Product from "../Product/Product.component";


export default function Inventory(props) {
  // const {groupProducts} = props;

  return (
    <section>
      <div>Inventory Page</div>

      <section>
        {props.groupProducts ? props.groupProducts.map((item) => {
           return  <Product productInfo={item}/>
        }) : console.log('asd')}
      </section>
      {/* <section>
        {groupProducts ? groupProducts.map((item) => {
           return  <Product productInfo={item}/>
        }) : console.log('asd')}
      </section> */}
      
    </section>
  )
}
