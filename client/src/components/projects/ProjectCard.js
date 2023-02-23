import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="w-screen h-96 mb-2">
      <div className="card w-full h-full bg-base-100 shadow-xl image-full hover:bg-base-200 rounded-none-important">
        <figure className="">
          <img src={props.bg} className="w-full h-full" />
        </figure>
        <div className="card-body h-full">
          <div className="flex flex-col items-end justify-end h-full ">
            <img src={props.logo} className="w-64" />
            <h2 className="text-3xl text-white font-medium ">{props.title}</h2>
            <span className="w-96">{props.desc}</span>
            <Link
              className="cursor-pointer"
              to={props.doc}
              target="_blank"
              download
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
