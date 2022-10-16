import { Outlet, Link } from "react-router-dom";
export default function Footer(props) {
  return (
    <div>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

                

                <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><Link to={`home_page/`} class="nav-link px-2 text-muted">Home Page</Link></li>
                <li class="nav-item"><Link to={`login/`} class="nav-link px-2 text-muted">Login</Link></li>
                <li class="nav-item"><Link to={`signup/`} class="nav-link px-2 text-muted">Sign up</Link></li>
                <li class="nav-item"><Link to={`investment_info_page/`} class="nav-link px-2 text-muted">Investments</Link></li>
                </ul>
            </footer>
        </div>
    </div>
  );
}
