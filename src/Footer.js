import { Outlet, Link } from "react-router-dom";
import React from "react";

export default function Footer(props) {
  return (
    <div>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

                <ul class="nav justify-content-end">
                <li class="nav-item"><Link to={`home_page/`} class="nav-link px-2 text-muted">Home</Link></li>
                <li class="nav-item"><Link to={`budget_guide/`} class="nav-link px-2 text-muted">Budget Guide</Link></li>
                <li class="nav-item"><Link to={`budgeting/`} class="nav-link px-2 text-muted">Budgeting</Link></li>
                <li class="nav-item"><Link to={`investment_guide/`} class="nav-link px-2 text-muted">Investment Guide</Link></li>
                <li class="nav-item"><Link to={`investing/`} class="nav-link px-2 text-muted">Investmenting</Link></li>
                </ul>
            </footer>
        </div>
    </div>
  );
}
