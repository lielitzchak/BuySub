import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404 from "../Page404/Page404.component";
import Test from "./Test";
export const Admin = (): JSX.Element => {
  return (
    <Router>
      <Link to="./Test.tsx" />
      <Router>
        <Link to="/admin">link to admin</Link>
        <Link to="/addGroup">add group</Link>
        <Link to="/admin">update to admin</Link>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/AddNewTeam" />
          <Route path="/AddNewUser" />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      jhg
    </Router>
  );
};
