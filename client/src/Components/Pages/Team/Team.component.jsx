import { Outlet, Link } from "react-router-dom";
import { themeContext } from "../../../Context/ThemeProvider/ThemeProvider";
import { productsStyle } from "../../../Context/ThemeProvider/ThemeCSS";
import { useContext } from "react";



export default function Team(){
  const {theme} = useContext(themeContext);

  return (

    <div className="teamContainer" style={theme === 'light' ? productsStyle.light : productsStyle.dark}>
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

