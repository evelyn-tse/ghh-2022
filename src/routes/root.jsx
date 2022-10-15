import { Outlet, Link } from "react-router-dom";
import NavBar from "../NavBar"
export default function Root() {
    return (
      <>
        {/* <div id="sidebar"> */}
          {/* <h1>React Router Nav Bar</h1> */}
          {/* <nav>
            <ul>
              <li>
                <Link to={`home_page/`}>Home Page</Link>
              </li>
              <li>
                <Link to={`login/`}>Log In</Link>
              </li>
              <li>
                <Link to={`signup/`}>Sign up</Link>
              </li>
              <li>
                <Link to={`investment_info_page/`}>Investment Info Page</Link>
              </li>
            </ul>
          </nav> */}
        {/* </div> */}
        <NavBar />
        <div id="detail">
          <Outlet />
        </div>
        <div>FOOTER</div>
      </>
    );
  }