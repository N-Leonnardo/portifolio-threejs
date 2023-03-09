import React from "react";
import react from "../media/react-svgrepo-com.svg";
import mysql from "../media/mysql-svgrepo-com.svg";
import nodejs from "../media/nodejs-svgrepo-com.svg";
import python from "../media/python-svgrepo-com.svg";
import ProjectCard from "./projects/ProjectCard";
import myDriverApp from "../media/myDriverApp.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mydriverappBg from "../media/mydriverapp-background.jpg";
import mydriverappLogo from "../media/myDriverApp.svg";

// IMAGES IMPORTER

import mda2 from "../media/projects-images/mydriverapp/mediamodifier_image.png";
import mda3 from "../media/projects-images/mydriverapp/mediamodifier_image (1).png";
import mda1 from "../media/projects-images/mydriverapp/iphone202.png";

export default function Projects() {
  return (
    <div
      className={
        "w-screen h-screen flex justify-center lg:items-start overflow-y-scroll z-50 rounded-lg"
      }
    >
      <div className="flex flex-col ">
        <ProjectCard
          bg={mydriverappBg}
          doc={"client/src/media/MyDriverApp.pdf"}
          desc={
            "The application enables users to order trips by utilizing the Google Maps API, which calculates prices based on distance and time. It has been developed using a combination of React, Express, Node.js, and MySQL technologies."
          }
          title={"My Driver App"}
          logo={mydriverappLogo}
          technologies={[react, nodejs, mysql]}
          image1={mda1}
          image2={mda2}
          image3={mda3}
          projSc={""}
          projLive={"https://mydriverapp.leonascimento.dev/login"}
        />
        <ProjectCard
          bg={mydriverappBg}
          doc={"client/src/media/MyDriverApp.pdf"}
          desc={
            "The application enables users to order trips by utilizing the Google Maps API, which calculates prices based on distance and time. It has been developed using a combination of React, Express, Node.js, and MySQL technologies."
          }
          title={"My Smart Camera "}
          logo={mydriverappLogo}
          technologies={[python]}
          classes={"flex-row-reverse"}
        />
        <ProjectCard
          bg={mydriverappBg}
          doc={"client/src/media/MyDriverApp.pdf"}
          desc={
            "The application enables users to order trips by utilizing the Google Maps API, which calculates prices based on distance and time. It has been developed using a combination of React, Express, Node.js, and MySQL technologies."
          }
          title={"Cisco | Software Engineering Experience Program"}
          logo={"https://www.svgrepo.com/show/473567/cisco.svg"}
          technologies={[react, nodejs]}
          classes={"flex-row-reverse"}
          projSc={"https://github.com/N-Leonnardo/cisco-starter-repo"}
          projLive={""}
        />
      </div>
    </div>
  );
}
