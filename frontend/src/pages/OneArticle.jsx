import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import Breadcrumbs from "../components/Breadcrumbs";

function OneArticle() {
  const { id } = useParams();
  const [oneArticle, setOneArticle] = useState([]);

  const getOneArticles = async () => {
    try {
      const art = await connexion.get(`/articles/${id}`);
      setOneArticle(art);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneArticles();
  }, []);
  return (
    <div>
      <Breadcrumbs />
      <div className="grid grid-cols-2 mx-20 w-auto">
        <h1 className=" text-right pr-2">Titre :</h1>
        <h1>{oneArticle.title}</h1>
        <h1 className=" text-right pr-2">infos :</h1>
        <h1>{oneArticle.info}</h1>
        <h1 className=" text-right pr-2">Prix :</h1>
        <h1>{oneArticle.price} €</h1>
        <h1 className=" text-right pr-2">Etat:</h1>
        <h1>
          {oneArticle.stock !== 0 ? "Disponible" : "Victime de son succès"}
        </h1>
        <h1 className=" text-right pr-2">Description :</h1>
        <h1>{oneArticle.description}</h1>
      </div>
    </div>
  );
}

export default OneArticle;
