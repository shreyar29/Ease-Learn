import React from 'react';
import { useParams } from 'react-router-dom';

const dummyCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    content: "Full details about the Web Dev course...",
  },
  {
    id: 2,
    title: "Data Science with Python",
    content: "Detailed curriculum for Data Science...",
  },
  {
    id: 3,
    title: "Machine Learning A-Z",
    content: "Comprehensive ML concepts and projects...",
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const course = dummyCourses.find(c => c.id === parseInt(id));

  if (!course) return <p>Course not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{course.title}</h2>
      <p>{course.content}</p>
    </div>
  );
};

export default CourseDetails;