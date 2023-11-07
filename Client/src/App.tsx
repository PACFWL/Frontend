import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import VLibras from '@moreiraste/react-vlibras'
import Header from "./pages/modules/user/components/Header/Header"
import Footer from "./pages/modules/user/components/Footer/Footer"
import Login from "./pages/modules/user/components/Login/Login";
import { CssBaseline } from "@mui/material";

import { UserProvider } from './UserContext';

export default function App() {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  }

  const closeLoginModal = () => {
    setShowLoginModal(false);
  }

  return (
    <BrowserRouter>
      <UserProvider>                                       
        <CssBaseline />
        <Header openLoginModal={openLoginModal} />
        <VLibras forceOnload={true}/>
        <AppRoutes />
        <Footer />
        <Login showLoginModal={showLoginModal} closeLoginModal={closeLoginModal} />
      </UserProvider>
    </BrowserRouter>
  )
}