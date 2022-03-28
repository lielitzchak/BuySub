import { Outlet, Link } from "react-router-dom";


export default function Team(){

  return (

    <div>
      <section>
        <h1>Team component</h1>

        <Link to="Inventory">Inventory</Link>
        <Link to="ListToBuy">List To Buy</Link>
        <Link to="Setting">Setting</Link>

      </section>

      <Outlet />
    </div>
  );
};

