import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink = `/${crumb}`;
      return (
        <div
          className=" after:content-['>'] after:mx-2 last:after:hidden"
          // eslint-disable-next-line react/no-array-index-key
          key={`${crumb}_${index}`}
        >
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <div className="flex flex-row justify-center my-2 mx-48 p-2 text-lg rounded-2xl bg-slate-300">
      {location.pathname === "/" ? (
        <div>Accueil</div>
      ) : (
        <>
          <div className="mr-4">
            <Link to="/">Accueil</Link>
          </div>
          <p className="mr-4">{">"}</p>
          {crumbs}
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
