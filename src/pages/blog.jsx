import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import i18n from "../hooks/i18n";

export function Blog(props) {
  const [blogData, setBlogData] = useState([]);
  let { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Appeler la fonction pour vérifier la validité du token
    checkTokenValidity();
    fetch(`https://dummyjson.com/posts?limit=10`)
      .then((response) => response.json())
      .then(
        (result) => {
          // console.log(result);
          setBlogData(result.posts);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((e) => {
        //gérer l'erreur
      });
  }, []);
  // console.log(state);
  const checkTokenValidity = async () => {
    // Vérifier si le token est présent dans sessionStorage
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login')
    }
  
    try {
      // Effectuer une requête GET à l'API pour vérifier le token
      const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
        }, 
      });
  
      if (!response.ok) {
        throw new Error('Token invalide.');
      }
  
      // Token valide
      console.log("Token valide.");
  
      // Traiter la réponse JSON si nécessaire
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error('Erreur lors de la validation du token:', error.message);
      // Gérer les erreurs, par exemple, rediriger vers la page de connexion
      // window.location.href = '/login';
    }
  };
  
  return (
    <>
      <div className="d-flex flex-wrap my-5 flex-grow-1 justify-content-center w-100">
        <div className="rounded col-lg-8 col-md-8 sol-sm-8 pr-5">
          <Link className="App-link slideLeft" to={"post/add"}>
            <button className="m-3">{i18n.t('ok-add')}</button>
          </Link>
          {blogData &&
            blogData.map((blog, index) => {
              return (
                blog.id !== state?.idDeleted && (
                  <>
                    <Link className="App-link slideLeft" to={"post/" + blog.id}>
                      <div
                        className="App-link slideLeft bg-test card-bg rounded d-flex flex-column mb-5 p-3"
                        key={"post-"+index}
                      >
                        <h1 className="fw-semibold">
                          {blog.id === state?.id && state.title
                            ? state.title
                            : blog.title}
                        </h1>
                        <p className="fw-normal">
                          {blog.id === state?.id && state.body
                            ? state.body
                            : blog.body}
                        </p>
                        <span className="align-self-end fw-lighter fst-italic">
                          tags:{" "}
                          {blog.tags.map((tag, id) => {
                            return (
                              <span className="fw-lighter" key={"post-"+index+"-tag-"+tag}>
                                #{tag}{" "}
                              </span>
                            );
                          })}
                        </span>
                      </div>
                    </Link>
                  </>
                )
              );
            })}
        </div>
      </div>
    </>
  );
}
