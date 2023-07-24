import React from "react";
import "../styles/LayoutStyles.css";
import { userMenu } from "../Data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Layout = ({ children }) => {
  const location = useLocation();

  const SidebarMenu = userMenu;

  return (
    <>
      <div>
        <div class="topnav" id="myTopnav">
          {SidebarMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <>
                <a className={`menu-item ${isActive && "active"}`}>
                  <i className={menu.icon}></i>
                  <Link to={menu.path}>{menu.name}</Link>
                </a>
              </>
            );
          })}
        </div>
        <div className="body">{children}</div>
      </div>
      <div>
        <div className="footer">
          <div className="footer-content">
            <p>
              &copy; {new Date().getFullYear()} Anokhi Pehel. All rights
              reserved.
            </p>
            <p>Designed and Developed by:</p>
            <p>Sattwik Ranjan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
