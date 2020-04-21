import React from "react"
import Course from "./Course"
import Header from "./Header"


const Courses = ({courses}) => {

    return(
        <>
        <Header text = "Web development curriculum" type={2}></Header>
        {courses.map((course)=> <Course key={course.id} course={course}/>)}
        </>
    )
    
}

export default Courses