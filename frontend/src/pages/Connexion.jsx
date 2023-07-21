import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import Breadcrumbs from "../components/Breadcrumbs";

function Connexion() {
  const [auth, setAuth] = useState({
    mail: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleAuth = (event) => {
    setAuth({ ...auth, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const log = await connexion.post("/connexion", auth);

      if (log.role === 1) {
        navigate("/admin/article");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Breadcrumbs />
      <div className=" flex justify-center mt-20">
        <form onSubmit={(event) => login(event)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Votre email
            </label>
            <input
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={auth.mail}
              type="email"
              name="mail"
              placeholder="xxx@xxx.com"
              onChange={(event) => handleAuth(event)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Votre mot de passe
            </label>
            <input
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              name="password"
              value={auth.password}
              onChange={(event) => handleAuth(event)}
              placeholder="******************"
              required
            />
          </div>
          <button
            type="submit"
            className=" text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
