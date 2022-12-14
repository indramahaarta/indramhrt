import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./ProjectList.module.css";
import Indramhrt from "../../static/indramhrt.png";
import PiggyTracker from "../../static/piggytracker.png";
import TemeninIsoman from "../../static/temeninisoman.png";
import Css from "../../static/css.png";
import Html from "../../static/html.png";
import Javascript from "../../static/javascript.png";
import Reactjs from "../../static/react.png";
import Springboot from "../../static/springboot.png";
import Django from "../../static/django.png";
import Java from "../../static/java.png";
import Python from "../../static/python.png";
import Postgresql from "../../static/postgresql.png";

const ProjectList = (props) => {
  const [isHover, setIsHover] = useState(false);
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();

  const projectLists = [
    {
      id: "1",
      title: "Personal Website",
      img: Indramhrt,
      summary:
        "My newest project for displaying all of my portfolios. I work for both backend and frontend",
      stack: [Html, Css, Javascript, Reactjs],
      url: "https://github.com/indramahaarta/indramhrt",
      ref: ref1,
      inView: inView1,
    },
    {
      id: "2",
      title: "Piggy Tracker",
      img: PiggyTracker,
      summary:
        "Responsible for integrating API from Brick to fetch transaction list data & user balance and building dream saver feature",
      stack: [Html, Css, Javascript, Java, Springboot, Postgresql],
      url: "https://github.com/indramahaarta/nagos-tamel-app",
      ref: ref2,
      inView: inView2,
    },
    {
      id: "3",
      title: "Temenin Isoman",
      img: TemeninIsoman,
      summary:
        "Working on COVID-19 self-detection feature to screen user healthy risk and authentication & authorization system",
      stack: [Html, Css, Javascript, Python, Django],
      url: "https://github.com/indramahaarta/temenin-isoman",
      ref: ref3,
      inView: inView3,
    },
  ];

  function mouseOverHandler(event) {
    setIsHover(event.target.id);
  }

  function mouseOffHanlder() {
    setIsHover(false);
  }

  let projects = [];

  if (props.isFullProjectoaded) {
    projects = projectLists.map((item) => item);
  } else {
    projects = projectLists.filter((item) => item.id === "1");
  }

  return (
    <React.Fragment>
      <ul>
        {projects.map((item) => {
          return (
            <li ref={item.ref} key={item.id} className={`${classes.container}`}>
              <div
                className={`${classes.left} ${
                  item.inView ? classes.slideup : ""
                }`}
              >
                <img
                  className={`${classes.foto} ${
                    isHover === item.id ? classes.hovering : ""
                  }`}
                  alt="project-foto"
                  src={item.img}
                  id={item.id}
                  onMouseOver={mouseOverHandler}
                  onMouseOut={mouseOffHanlder}
                ></img>

                <a
                  className={`${isHover === item.id ? "" : classes.btnoff}`}
                  href={item.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <button
                    id={item.id}
                    onMouseOver={mouseOverHandler}
                    className={classes.btnfoto}
                  >
                    Visit Repo
                  </button>
                </a>
              </div>
              <div
                className={`${classes.right} ${
                  item.inView ? classes.bump : ""
                }`}
              >
                <div className={classes.projecttitle}>
                  {item.title}
                  <div className={classes.summary}>{item.summary}</div>
                </div>
                <div className={classes.techstack}>
                  Technology
                  <ul>
                    {item.stack.map((data, index) => {
                      return (
                        <li key={index}>
                          <img
                            className={classes.stackimg}
                            alt={`img${item.title}${index}`}
                            src={data}
                          ></img>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProjectList;
