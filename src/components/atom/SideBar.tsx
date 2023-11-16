import { forwardRef } from "react";
import customerIcon from '../../assets/svg/sidebar/Customers.svg'
import productsIcon from '../../assets/svg/sidebar/products.svg'
import homeIcon from '../../assets/svg/sidebar/home.svg'
import logoIcon from '../../assets/svg/logo/zocketLogo.svg'
import campaignIcon from '../../assets/svg/sidebar/campaingn.svg'
import closeIcon from '../../assets/svg/close.svg'
import { Link } from "react-router-dom";
import React from "react";
const SideBar = forwardRef<HTMLElement, any>((props, ref) => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-100 h-screen w-screen sm:w-24  transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
      ref={ref}
    >
      <div className="h-full  py-6 overflow-y-auto" style={{
        backgroundColor: "#001738"
      }}>
        <div className="flex justify-end items-center p-2 block sm:hidden" onClick={props.close}>
          <img
            src={closeIcon}
            width="25" height="25"
            alt="Logo"
          />
        </div>
        <a className="flex justify-center sm:flex-col  items-center gap-2 mb-8">
          <img
            src={logoIcon}
            width="40" height="40"
            alt="Logo"
          />
          <span className=" text-xl font-semibold whitespace-nowrap text-white block sm:hidden ">Zocket</span>

        </a>
        <ul className="space-y-2 font-normal">
          <li>
            <Link
              to="/"
              className="flex group text-white hover:bg-blue-200 focus:bg-blue-200 rounded-lg sm:rounded-r-lg"
            >
              <div className="rounded-r-lg w-2 hidden sm:group-hover:block sm:group-focus:block" style={{
                backgroundColor: "#1977F3"
              }} />
              <div className=" flex-1 flex flex-col items-center p-2 text-white text-gray-600"
              >
                <img src={homeIcon} width="24" height="24" alt="custommer" />
                <span className="whitespace-nowrap pt-2">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/campaign"
              className="flex group text-white hover:bg-blue-200 focus:bg-blue-200 rounded-lg sm:rounded-r-lg"
            >
              <div className="rounded-r-lg w-2 hidden sm:group-hover:block sm:group-focus:block" style={{
                backgroundColor: "#1977F3"
              }} />
              <div className=" flex-1 flex flex-col items-center p-2 text-white text-gray-600"
              >
                <img src={campaignIcon} width="24" height="24" alt="custommer" />
                <span className="whitespace-nowrap pt-2">Campaign</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="flex group text-white hover:bg-blue-200 focus:bg-blue-200 rounded-lg sm:rounded-r-lg"
            >
              <div className="rounded-r-lg w-2 hidden sm:group-hover:block sm:group-focus:block" style={{
                backgroundColor: "#1977F3"
              }} />
              <div className=" flex-1 flex flex-col items-center p-2 text-white text-gray-600"
              >
                <img src={productsIcon} width="24" height="24" alt="custommer" />
                <span className="whitespace-nowrap pt-2">Products</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/customer"
              className="flex group text-white hover:bg-blue-200 focus:bg-blue-200  rounded-r-lg"
            >
              <div className="rounded-r-lg w-2 hidden sm:group-hover:block sm:group-focus:block bg-blue-900" style={{
                backgroundColor: "#1977F3"
              }} />
              <div className=" flex-1 flex flex-col items-center p-2 text-white text-gray-600"
              >
                <img src={customerIcon} width="24" height="24" alt="custommer" />
                <span className="whitespace-nowrap pt-2">Customers</span>
              </div>
            </Link>
          </li>

        </ul>
      </div>
    </aside>
  );
});

export default SideBar;
