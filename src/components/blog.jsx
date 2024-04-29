import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const BLOGDATA = {
  items: [
    { nom: "SARKISSIAN" },
    { prénom: "oksana" },
    { hobby: "lecture" },
    {
      urlImg:
        "https://media.licdn.com/dms/image/C4E03AQF-RJ0rOcRHjA/profile-displayphoto-shrink_200_200/0/1650003575481?e=2147483647&v=beta&t=DDUSC8QdKMba_1Fec9w05C2-0n1qZNRkg3jvmuO39o0",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverraelit ut leo ullamcorper, eget volutpat mauris vehicula. Proin in lectustincidunt, fermentum odio sed, maximus felis. Vestibulum pharetra liberoet risus dapibus, non malesuada leo vehicula. Sed eget massa ac metusposuere finibus vel sit amet nulla. In hac habitasse platea dictumst.Duis vestibulum fermentum elit, et dapibus est convallis ac. Integer asapien at mauris sollicitudin accumsan. Nullam condimentum, eros sitamet pharetra sagittis, nisi quam feugiat est, a finibus mauris ante sitamet lacus. Cras at augue eget sem pulvinar vestibulum. Curabitur necdiam massa. Phasellus mattis arcu ut dolor vestibulum, et suscipitturpis vehicula. Morbi nec dolor in nisi vestibulum sodales. Donec vitaevehicula velit. Integer consectetur, nunc nec lacinia dignissim, nisilibero laoreet nisi, non pharetra dolor libero eget elit.",
    },
  ],
};
export function Blog(props) {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=10`)
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
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
  return (
    <>
      <div className="d-flex flex-wrap my-5">
        <div className="d-flex flex-wrap justify-content-end w-100">
          <div className="d-flex split left col-lg-4 justify-content-center mb-5"></div>
          <div className="rounded col-lg-8 bg-test pr-5">
            {blogData &&
              blogData.map((blog, index) => {
                return (
                  <>
                  <Link className="App-link" to={'post/'+blog.id} postId={blog.id}>
                    <div className="card d-flex mb-5 p-3" key={index}>
                      <h1 className="fw-semibold">{blog.title}</h1>
                      <p className="fw-normal">{blog.body}</p>
                      <span className="align-self-end fw-lighter fst-italic">
                        tags:{" "}
                        {blog.tags.map((tag, index) => {
                          return (
                            <span className="fw-lighter" key={index}>
                              #{tag}{" "}
                            </span>
                          );
                        })}
                      </span>
                    </div>
                  </Link></>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
