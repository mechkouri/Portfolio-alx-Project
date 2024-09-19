import React from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

// OnlineCourses Component: Renders a section displaying a list of online courses
const OnlineCourses = () => {
  return (
    <>
      {/* Section for displaying online courses */}
      <section className="online">
        <div className="container">
          
          {/* Heading for the section */}
          <Heading subtitle="COURSES" title="Browse Our Online Courses" />
          
          {/* Grid layout for course items */}
          <div className="content grid3">
            
            {/* Loop through online courses data to dynamically create each course item */}
            {online.map((val, index) => (
              <div className="box" key={index}>
                {/* Course image and hover image */}
                <div className="img">
                  <img src={val.cover} alt={val.courseName} />
                  <img src={val.hoverCover} alt={`${val.courseName} hover`} className="show" />
                </div>
                
                {/* Course title and description */}
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
