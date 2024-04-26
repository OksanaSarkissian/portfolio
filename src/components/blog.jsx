import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
export function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/blogger/v3/blogs/3213900/posts/search?q=documentation&key=AIzaSyCReeZEiFfjtyzkJqnAAdw4tYrBxlihwoY`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
          setBlogData(result.items);
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
                      <div className="card" key={index}>
                        <h1>{blog.title}</h1>
                        <img
                          className="rounded-circle col-lg-4 col-md-4 col-sm-4"
                          src={blog?.author.image}
                          alt="Description"
                          width="500px"
                          height="auto"
                        />
                        <p>{blog.content}</p>
                      </div>
                      ;
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}
