import React from "react";
import ProjectCard from "./projects/ProjectCard";
import myDriverApp from "../media/myDriverApp.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mydriverappBg from "../media/mydriverapp-background.jpg";
import mydriverappLogo from "../media/myDriverApp.svg";

export default function Projects() {
  return (
    <div className="w-screen h-screen flex justify-center lg:items-start overflow-y-scroll">
      <div className="flex flex-col ">
        <ProjectCard
          bg={mydriverappBg}
          doc={"client/src/media/MyDriverApp.pdf"}
          desc={
            "The application enables users to order trips by utilizing the Google Maps API, which calculates prices based on distance and time. It has been developed using a combination of React, Express, Node.js, and MySQL technologies."
          }
          title={""}
          logo={mydriverappLogo}
        />
      </div>
    </div>
  );
}
