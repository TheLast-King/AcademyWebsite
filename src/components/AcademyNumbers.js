import React, { useState, useEffect } from 'react';

const RunningNumberInfo = () => {
  const [batches, setBatches] = useState(0);
  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [experience, setExperience] = useState(0);
  const [stop, setStop] = useState(false);

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
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col items-center m-4 rounded-md border bg-cyan-100 border-black p-2 hover:bg-cyan-200 transition duration-300">
        <div className="text-lg">Number of batches</div>
        <div className="text-lg">{batches}+</div>
      </div>
      <div className="flex flex-col items-center m-4 rounded-md border bg-cyan-100 border-black p-2 hover:bg-cyan-200 transition duration-300">
        <div className="text-lg">Number of students</div>
        <div className="text-lg">{students}+</div>
      </div>
      <div className="flex flex-col items-center m-4 rounded-md border bg-cyan-100 border-black p-2 hover:bg-cyan-200 transition duration-300">
        <div className="text-lg">Number of Courses</div>
        <div className="text-lg">{courses}+</div>
      </div>
      <div className="flex flex-col items-center m-4 rounded-md border bg-cyan-100 border-black p-2 hover:bg-cyan-200 transition duration-300">
        <div className="text-lg">Years of experience</div>
        <div className="text-lg">{experience}+</div>
      </div>
    </div>
  );
};

export default RunningNumberInfo;










// import React, { useState, useEffect } from 'react';

// const RunningNumberInfo = () => {
//   const [batches, setBatches] = useState(0);
//   const [students, setStudents] = useState(0);
//   const [courses, setCourses] = useState(0);
//   const [experience, setExperience] = useState(0);
//   const [stop, setStop] = useState(false);

//   const stopLimit = {
//     batches: 50,
//     students: 800,
//     courses: 10,
//     experience: 5,
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (stop) {
//         clearInterval(interval);
//         return;
//       }

//       setBatches((prevBatches) => (prevBatches + 1 >= stopLimit.batches ? stopLimit.batches : prevBatches + 1));
//       setStudents((prevStudents) => (prevStudents + 5 >= stopLimit.students ? stopLimit.students : prevStudents + 5));
//       setCourses((prevCourses) => (prevCourses + 1 >= stopLimit.courses ? stopLimit.courses : prevCourses + 1));
//       setExperience((prevExperience) => (prevExperience + 0.5 >= stopLimit.experience ? stopLimit.experience : prevExperience + 0.5));

//       // Check if any limit is reached
//       if (
//         batches === stopLimit.batches ||
//         students === stopLimit.students ||
//         courses === stopLimit.courses ||
//         experience === stopLimit.experience
//       ) {
//         setStop(true);
//       }
//     }, 50); // Reduced interval to 50 milliseconds

//     return () => clearInterval(interval);
//   }, [stop, batches, students, courses, experience]);

//   return (
//     <div className="flex flex-row justify-center items-center">
//       <div className="flex flex-col items-center m-4 rounded-md border p-2 overflow-hidden">
//         <div className="text-lg">Number of batches</div>
//         <div
//           className="text-lg bg-cyan-100 hover:bg-cyan-300 transition-all duration-300 rounded-full p-2"
//         >
//           {batches}+
//         </div>
//       </div>
//       <div className="flex flex-col items-center m-4 rounded-md border p-2 overflow-hidden">
//         <div className="text-lg">Number of students</div>
//         <div
//           className="text-lg bg-cyan-100 hover:bg-cyan-300 transition-all duration-300 rounded-full p-2"
//         >
//           {students}+
//         </div>
//       </div>
//       <div className="flex flex-col items-center m-4 rounded-md border p-2 overflow-hidden">
//         <div className="text-lg">Number of Courses</div>
//         <div
//           className="text-lg bg-cyan-100 hover:bg-cyan-300 transition-all duration-300 rounded-full p-2"
//         >
//           {courses}+
//         </div>
//       </div>
//       <div className="flex flex-col items-center m-4 rounded-md border p-2 overflow-hidden">
//         <div className="text-lg">Years of experience</div>
//         <div
//           className="text-lg bg-cyan-100 hover:bg-cyan-300 transition-all duration-300 rounded-full p-2"
//         >
//           {experience}+
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RunningNumberInfo;

