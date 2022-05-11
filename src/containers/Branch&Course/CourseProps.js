import React from "react";

function CourseProps({ changeCourse }) {
  let course = "";

  if (changeCourse === "Rw1") {
    course = "Android";
  } else if (changeCourse === "Rw2") {
    course = "Node Js";
  } else if (changeCourse === "Rw3") {
    course = "React Js";
  } else if (changeCourse === "Rw4") {
    course = "Flutter";
  } else if (changeCourse === "Rw5") {
    course = "IOS";
  } else {
    course = "Invalid";
  }

  return (
    <div>
      <div>Course - {course}</div>
    </div>
  );
}

export default CourseProps;
