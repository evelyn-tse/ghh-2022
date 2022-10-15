import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Nav Bar</h1>
          <nav>
            <ul>
              <li>
                <Link to={`contacts/1`}>Home Page</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>Log In</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>Sign up</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>Investment Info Page</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }