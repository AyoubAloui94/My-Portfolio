import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"

import Header from "./components/Header"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import ScrollToTop from "./components/ScrollToTop"
import { HelmetProvider } from "react-helmet-async"
import About from "./pages/About"
import MyStory from "./components/MyStory"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Header />
          <div className="mx-6">
            <ScrollToTop />
            <Routes>
              <Route index element={<Navigate replace to={"home"} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/mystory" element={<MyStory />} />
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
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
