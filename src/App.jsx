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
import { HelmetProvider, Helmet } from "react-helmet-async"

const queryClient = new QueryClient()
const description = "I am a web and react applications developer with a passion for creating visually appealing and user-friendly websites. My background includes extensive experience in HTML, CSS, and JavaScript, as well as a strong knowledge of responsive design and cross-browser compatibility. I am always eager to learn new technologies and stay updated with the latest trends in web development"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Helmet prioritizeSeoTags>
            <meta charSet="utf-8" />
            <title>Web & IT Genius | Home</title>
            <meta name="description" content={`${description}`} />
            <link rel="canonical" href="https://webitgenius.com/" />
          </Helmet>
          <Header />
          <div className="mx-6">
            <ScrollToTop />
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
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export default App
