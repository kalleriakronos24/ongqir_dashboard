import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Sidebar } from "../Sidebar/sidebar";
import { NavBar } from "../Navbar";
import { Footer } from "../Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/img/apple-icon.png"
      />
      <link rel="icon" type="image/png" href=" /img/favicon.png" />
      <title>Dashboard</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
        rel="stylesheet"
      />
      <link href="/css/nucleo-icons.css" rel="stylesheet" />
      <link href="/css/main.css?v=1.1.0" rel="stylesheet" />
      <link href="/demo/demo.css" rel="stylesheet" />

      <script src="/js2/core/jquery.min.js"></script>
      <script src="/js2/core/popper.min.js"></script>
      <script src="/js2/core/bootstrap.min.js"></script>
      <script src="/js2/plugins/perfect-scrollbar.jquery.min.js"></script>
      {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
      <script src="/js2/plugins/chartjs.min.js"></script>
      <script src="/js2/plugins/bootstrap-notify.js"></script>
      <script src="/js2/black-dashboard.min.js?v=1.0.0"></script>
      <script src="https://cdn.trackjs.com/agent/v3/latest/t.js"></script>
    </Head>
    <div className="wrapper">
     <Sidebar/>
      <div className="main-panel">
        <NavBar/>
        {children}
       <Footer/>
      </div>
    </div>
    {/* Gear Icon or Setting */}
    {/* <div className="fixed-plugin">
      <div className="dropdown show-dropdown">
        <a href="#" data-toggle="dropdown">
          <i className="fa fa-cog fa-2x"> </i>
        </a>
        <ul className="dropdown-menu">
          <li className="header-title"> Sidebar Background</li>
          <li className="adjustments-line">
            <a href="" className="switch-trigger background-color">
              <div className="badge-colors text-center">
                <span className="badge filter badge-primary active" data-color="primary"></span>
                <span className="badge filter badge-info" data-color="blue"></span>
                <span className="badge filter badge-success" data-color="green"></span>
              </div>
              <div className="clearfix"></div>
            </a>
          </li>
          <li className="adjustments-line text-center color-change">
            <span className="color-label">LIGHT MODE</span>
            <span className="badge light-badge mr-2"></span>
            <span className="badge dark-badge ml-2"></span>
            <span className="color-label">DARK MODE</span>
          </li>
          <li className="button-container">
            <a href="https://www.creative-tim.com/product/black-dashboard" target="_blank" className="btn btn-primary btn-block btn-round">Download Now</a>
            <a href="https://demos.creative-tim.com/black-dashboard/docs/1.0/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block btn-round">
              Documentation
          </a>
          </li>
          <li className="header-title">Thank you for 95 shares!</li>
          <li className="button-container text-center">
            <button id="twitter" className="btn btn-round btn-info"><i className="fab fa-twitter"></i> &middot; 45</button>
            <button id="facebook" className="btn btn-round btn-info"><i className="fab fa-facebook-f"></i> &middot; 50</button>
            <br />
            <br />
            <a className="github-button" href="https://github.com/creativetimofficial/black-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
          </li>
        </ul>
      </div>
    </div> */}
  </div>
);

export default Layout;
