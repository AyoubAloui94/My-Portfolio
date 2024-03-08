import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"

import Header from "./components/Header"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="mx-6">
        <Header />
        <Routes>
          <Route index element={<Navigate replace to={"home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000
            },
            error: {
              duration: 5000
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)"
            }
          }}
        />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
