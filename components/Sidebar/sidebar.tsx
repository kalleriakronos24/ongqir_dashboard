import React from "react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="logo">
          <a
            className="simple-text logo-normal"
            style={{ textAlign: "center" }}
          >
            Test App Dashboard
          </a>
        </div>
        <ul className="nav">
          <li className="active">
            <Link href="/">
              <a>
                <i className="tim-icons icon-chart-pie-36"></i>
                <p className="side-bar-text-list">Dashboard</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/courier/deposit/">
              <a>
                <i className="tim-icons icon-atom"></i>
                <p className="side-bar-text-list">Deposits</p>
              </a>
            </Link>
          </li>
          <li>
            <a href="./map.html">
              <i className="tim-icons icon-pin"></i>
              <p className="side-bar-text-list">Users</p>
            </a>
          </li>
          <li>
            <Link href="/courier/list">
              <a>
                <i className="tim-icons icon-bell-55"></i>
                <p className="side-bar-text-list">Courier</p>
              </a>
            </Link>
          </li>
          <li>
            <a href="./user.html">
              <i className="tim-icons icon-single-02"></i>
              <p className="side-bar-text-list">All Courier Location</p>
            </a>
          </li>
          <li>
            <a href="./tables.html">
              <i className="tim-icons icon-puzzle-10"></i>
              <p className="side-bar-text-list">All Orders History</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
