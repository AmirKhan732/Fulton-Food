// import React from 'react'
// import { useLocation } from 'react-router-dom'

// const GoBack = () => {
//   const location = useLocation()
//   const pageName = location.pathname.replace("/", "") || "Home"

//   return (
//     <div className="d-flex align-items-center mx-5 p-5">
//       <a href="/" className="text-white fs-2 nav-link">
//         Home
//       </a>
//       {pageName !== "Home" && (
//         <a
//           href={`/${pageName.toLowerCase()}`}
//           className="theme-color d-flex align-items-center justify-content-center fs-2 nav-link"
//         >
//           <i className="bi bi-chevron-compact-right"></i> {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
//         </a>
//       )}
//     </div>
//   )
// }

// export default GoBack



import React from "react";
import { Link, useLocation } from "react-router-dom";

const GoBack = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Capitalize each segment (e.g., "blogs" -> "Blogs")
  const formatName = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1).replace("-", " ");

  return (
    <div className="d-flex align-items-center mx-5 p-5">
      <Link to="/" className="text-white fs-2 nav-link">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const routeTo = "/" + pathSegments.slice(0, index + 1).join("/");
        const isLast = index === pathSegments.length - 1;

        return (
          <span
            key={index}
            className={`d-flex align-items-center fs-2 ${
              isLast ? "theme-color" : "text-white"
            }`}
          >
            <i className="bi bi-chevron-compact-right mx-2"></i>
            {isLast ? (
              formatName(segment)
            ) : (
              <Link to={routeTo} className="nav-link text-white">
                {formatName(segment)}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default GoBack;
