import { Outlet, Link } from "react-router-dom";


export default function Team(){

  return (

    <div className="teamContainer">
      <section className="teamNavigation">

        <span>
        <Link to="Inventory">Inventory</Link>

        </span>
        <span>
        <Link to="ListToBuy">List To Buy</Link>

        </span>
        <span>
        <Link to="Setting">Setting</Link>
        </span>

        <div></div>

      </section>
         <Outlet />
    </div>
  );
};

