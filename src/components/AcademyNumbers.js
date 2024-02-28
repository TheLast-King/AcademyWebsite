import React, { useState, useEffect } from 'react';

const RunningNumberInfo = () => {
  const [batches, setBatches] = useState(0);
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [experience, setExperience] = useState(0);
  const [stop, setStop] = useState(false);

  const data = [
    { label: 'Batches', value: batches },
    { label: 'Students', value: students },
    { label: 'Courses', value: courses },
    { label: 'Expertise', value: experience }
  ];







  const stopLimit = {
    batches: 50,
    students: 800,
    courses: 10,
    experience: 5,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (stop) {
        clearInterval(interval);
        return;
      }

      setBatches((prevBatches) => (prevBatches + 1 >= stopLimit.batches ? stopLimit.batches : prevBatches + 1));
      setStudents((prevStudents) => (prevStudents + 5 >= stopLimit.students ? stopLimit.students : prevStudents + 5));
      setCourses((prevCourses) => (prevCourses + 1 >= stopLimit.courses ? stopLimit.courses : prevCourses + 1));
      setExperience((prevExperience) => (prevExperience + 0.5 >= stopLimit.experience ? stopLimit.experience : prevExperience + 0.5));

      // Check if any limit is reached
      if (
        batches === stopLimit.batches ||
        students === stopLimit.students ||
        courses === stopLimit.courses ||
        experience === stopLimit.experience
      ) {
        setStop(true);
      }
    }, 50); // Reduced interval to 50 milliseconds

    return () => clearInterval(interval);
  }, [stop, batches, students, courses, experience]);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {data.map((item, index) => (
        <div key={index} className={`flex flex-col items-center m-2 rounded-md border bg-cyan-100 border-black p-2 hover:bg-cyan-200 transition duration-300 ${index % 2 === 0 ? 'w-1/5 sm:w-1/2 md:w-1/3 lg:w-1/6' : 'w-1/5 sm:w-1/2 md:w-1/3 lg:w-1/6'}`}>
          <div className="sm:text-md md:text-lg xl:text-sm">{item.label}</div>
          <div className="text-lg md:text-sm">{item.value}+</div>
        </div>
      ))}
    </div>
  );
};

export default RunningNumberInfo;
