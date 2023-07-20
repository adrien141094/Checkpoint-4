import React, { useState, useEffect } from "react";
import connexion from "../../services/connexion";

const articleModel = {
  id: null,
  title: "",
  info: "",
  price: "",
  color: "",
  description: "",
  stock: "",
};

function ArticleAdmin() {
  const [article, setArticle] = useState(articleModel);
  const [allArticles, setAllArticles] = useState([]);

  const handleArticle = (name, value) => {
    setArticle({ ...article, [name]: value });
  };

  const updateArticleState = (id) => {
    if (id === "") {
      setArticle(articleModel);
    } else {
      setArticle(allArticles.find((art) => art.id === +id));
    }
  };

  const getArticles = async () => {
    try {
      const art = await connexion.get("/articles");
      setAllArticles(art);
    } catch (error) {
      console.error(error);
    }
  };

  const postArticle = async (event) => {
    event.preventDefault();
    try {
      const art = await connexion.post("/articles", article);
      setArticle(art);
      getArticles();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteArticle = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/articles/${article.id}`);
      setArticle(articleModel);
      getArticles();
    } catch (error) {
      console.error(error);
    }
  };

  const updateArticle = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/articles/${article.id}`, article);
      getArticles();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="flex  flex-1 flex-col mx-6">
      <div className="my-8 p-4 text-center bg-slate-200 rounded-2xl">
        <h1>Gestion des Articles</h1>
      </div>
      <div className="pt-14 pb-4">
        <label htmlFor="" className="grid md:grid-cols-2 md:gap-6">
          Choisir un Article :
          <select
            name=""
            id=""
            onChange={(event) => updateArticleState(event.target.value)}
            className="block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={article.id}
          >
            <option value="">Rafraichir</option>
            {allArticles.map((art) => (
              <option key={art.id} value={art.id}>
                {art.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <form onSubmit={(event) => postArticle(event)}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="title"
              value={article.title}
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Titre de l'Article
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="info"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="info"
              value={article.info}
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="info"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Infos percutante
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="Price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="price"
              value={article.price}
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="Price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prix en €
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="stock"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="stock"
              value={article.stock}
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="stock"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Stock
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              id="color"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="color"
              value={article.color}
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="color"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Color
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              id="description"
              rows="4"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              name="description"
              value={article.description}
              onChange={(event) =>
                handleArticle(event.target.name, event.target.value)
              }
              required
            />
            <label
              htmlFor="decription"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          {!article.id && (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ajouter
            </button>
          )}
        </form>
        {article.id && (
          <>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(event) => deleteArticle(event)}
            >
              Supprimer
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(event) => updateArticle(event)}
            >
              Modifier
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ArticleAdmin;
