import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";

// CoursesCard Component: Renders a section displaying a list of course cards
const CoursesCard = () => {
  return (
    <>
      {/* Section for displaying course cards */}
      <section className='coursesCard'>
        <div className='container grid2'>
          
          {/* Loop through coursesCard data to dynamically create each course card */}
          {coursesCard.map((val) => (
            <div className='items' key={val.coursesName}> {/* Use unique key for each item */}
              
              {/* Course card content */}
              <div className='content flex'>
                <div className='left'>
                  {/* Course image */}
                  <div className='img'>
                    <img src={val.cover} alt={val.coursesName} /> {/* Added alt text for accessibility */}
                  </div>
                </div>
                
                <div className='text'>
                  {/* Course title */}
                  <h1>{val.coursesName}</h1>
                  
                  {/* Rating section */}
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''> (5.0)</label> {/* Rating value */}
                  </div>
                  
                  {/* Course details */}
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <div className='box' key={details.name}> {/* Use unique key for each detail */}
                        <div className='dimg'>
                          <img src={details.dcover} alt={details.name} /> {/* Added alt text for accessibility */}
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4> {/* Instructor's name */}
                        </div>
                        <span>{details.totalTime}</span> {/* Total course time */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Price section */}
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer} {/* Price details */}
                </h3>
              </div>
              
              {/* Enroll button */}
              <button className='outline-btn'>ENROLL NOW!</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
