import { Link } from "react-router-dom"

function Sidebar () {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        
        <Link class="sidebar-brand d-flex align-items-center justify-content-center" to={"/"}>
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </Link>

        
        <hr class="sidebar-divider my-0"/>

        
        <li class="nav-item active">
        <Link class="nav-link collapsed" to={"/list-users"}  data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Dashboard</span>
            </Link>
        </li>
       

        
        <hr class="sidebar-divider"/>

        
       

        
       

        
        
    </ul>
    )
}
export default Sidebar