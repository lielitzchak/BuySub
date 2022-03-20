import { Link, Outlet } from "react-router-dom";
export const Admin = (): JSX.Element => {
  return (
    <>
      <Link to="AddProduct">add product</Link>
      <Link to="AddMembers">add members</Link>
      <section>
        <Outlet />
      </section>
    </>
  );
};
