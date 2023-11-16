import BasicLayout from "./Layout/BasicLayout"
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/Index'
import Providers from "./providers/Providers";
import { ToastContainer } from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      <Providers>
        <BasicLayout>
          <Routes />
        </BasicLayout>
      </Providers>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  )
}

// status: 'idle', // idle | loading | successful | failed
// error: null


export default App
