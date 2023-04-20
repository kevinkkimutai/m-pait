import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ userRole }) {
  return (
    <div>
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-0 mt-4">
            <a
              href="/"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachoeter-alt fa-fw me-3"></i>
              <span>ADMIN</span>
            </a>
            {userRole === "admin" && (
              <Link to="/admindashboard" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-user-tie fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>
            )}
            {userRole === "student" && (
              <Link to="/studentdashboard" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-envelope fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>
            )}
            <a
              href="/pairing"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-building fa-fw me-3"></i>
              <span>Pairing</span>
            </a>
            <a
              href="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-calendar fa-fw me-3"></i>
              <span>Calendar</span>
            </a>
            <a
              href="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-users fa-fw me-3"></i>
              <span>Users</span>
            </a>
            <a
              href="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-money-bill fa-fw me-3"></i>
              <span>Sales</span>
            </a>
            <i className="profile">
              <a
                href="/"
                className="list-group-item list-group-item-action py-2 ripple "
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>PROFILE</span>
              </a>
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
