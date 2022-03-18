import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";
import { getGroupProducts } from "../../../Services/GroupsService.service";
import Inventory from "../Inventory/Inventory.component";

const Team = (): JSX.Element => {
  const { auth } = useContext(authContext);
  // const [groupProducts, setGroupProducts] = useState([])

  return (
    <div>
      <h1>Team component</h1>
      <Link to="Inventory">Inventory</Link>
      <Link to="Setting">Setting</Link>

      {/* <section>
        {getGroupProducts(auth.groupName).then((data) => {

          // return <Inventory groupProducts={data} />
          setGroupProducts(data)
        })
        }
      </section> */}
      <section>
        {async () => {
          console.log(auth.groupName);
          // getGroupProducts(auth.groupName).then((data) => {
          await getGroupProducts("testgroup").then((data) => {
            console.log(data);
            <Inventory groupProducts={data} />;

            // setGroupProducts(data)
          });
        }}
      </section>
      {/* {getGroupProducts(auth.groupName).then((data) => {

        // return <Inventory groupProducts={data} />
        setGroupProducts(data)
      })
      } */}

      {/* <section>
        {
        () => {getGroupProducts(auth.groupName).then((data) => {

          data.map((item) => {

            return  <h1>{item.productName}</h1>
          })
          // setGroupProducts(data)
        })
        }
      }
      </section> */}
      <Outlet />
    </div>
  );
};

export default Team;
