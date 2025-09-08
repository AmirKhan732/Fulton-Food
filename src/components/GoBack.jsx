import React from 'react'
import { useLocation } from 'react-router-dom'

const GoBack = () => {
  const location = useLocation()
  const pageName = location.pathname.replace("/", "") || "Home"

  return (
    <div className="d-flex align-items-center mx-5 p-5">
      <a href="/" className="text-white fs-2 nav-link">
        Home
      </a>
      {pageName !== "Home" && (
        <a
          href={`/${pageName.toLowerCase()}`}
          className="theme-color d-flex align-items-center justify-content-center fs-2 nav-link"
        >
          <i className="bi bi-chevron-compact-right"></i> {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
        </a>
      )}
    </div>
  )
}

export default GoBack
