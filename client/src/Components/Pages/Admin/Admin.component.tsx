import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404 from "../Page404/Page404.component";
export const Admin = (): JSX.Element => {
  return (
    // <div>heoolo </div>
    <Router>
      <Link to="/admin">link to admin</Link>
      <Link to="/addGroup">add group</Link>
      <Link to="/admin">update to admin</Link>
      <Routes>
        <Route path="/" />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};
