import * as React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <Navbar pageTitle={"Not Found"} />
      <div className="mx-auto max-w-xl items-center">
        <h1 className="text-3xl font-bold pl-3 pb-3">Not found</h1>
        <p className="pl-3 pb-3">
          The page you are looking for does not exist.
        </p>
        <button>
          <a href="/" className="text-white flex">
            <svg
              className="w-6 h-6 mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                fill-rule="nonzero"
              />
            </svg>
            {/* line */}
            <span className="ml-2"> Return Home</span>
          </a>
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default NotFoundPage
