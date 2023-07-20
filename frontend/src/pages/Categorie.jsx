import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import connexion from "../services/connexion";

function Categorie() {
  const [article, setArticle] = useState([]);

  const getArticles = async () => {
    try {
      const art = await connexion.get("/articles");
      setArticle(art);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <div className=" flex justify-center  gap-8">
        {article.map((art) => (
          <div className=" pt-10">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src="" alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {art.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {art.info}
                </p>
                <Link to={`/categorie/${art.id}`}>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    En savoir +
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Categorie;
