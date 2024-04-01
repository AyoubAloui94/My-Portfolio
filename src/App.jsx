import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import ScrollToTop from "./components/ScrollToTop"
import { HelmetProvider } from "react-helmet-async"

import { Suspense, lazy } from "react"
import Spinner from "./components/Spinner"

const queryClient = new QueryClient()

const Home = lazy(() => import("./pages/Home"))
const Portfolio = lazy(() => import("./pages/Portfolio"))
const Contact = lazy(() => import("./pages/Contact"))
const About = lazy(() => import("./pages/About"))
const MyStory = lazy(() => import("./pages/MyStory"))

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Header />
          <div className="px-6 font-sans max-w-[100rem] mx-auto">
            <ScrollToTop />
            <Suspense
              fallback={
                <div className="h-[calc(100vh-10rem)]">
                  <Spinner />
                </div>
              }
            >
              <Routes>
                <Route index element={<Navigate replace to={"home"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/mystory" element={<MyStory />} />
                <Route path="*" element={<Navigate to={"/"} />} />
              </Routes>
            </Suspense>
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
                  backgroundColor: "text-gray-50",
                  color: "text-gray-700"
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
