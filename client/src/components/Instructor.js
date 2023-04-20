import React, { useState, useEffect } from "react";

function Instructor() {
  const [instructor, setInstructor] = useState({});
  const [pairings, setPairings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/instructor");
      const data = await response.json();
      setInstructor(data.instructor);
      setPairings(data.pairings);
    };

    fetchData();
  }, []);

  return (
    <div className="instructor-page">
      <div className="instructor-sidebar">
        <h3>Instructor Page</h3>
        <ul>
            <li>Dashboard</li>
            <li>Student List</li>
            <li>Pair List</li>
            <li>Feedback</li>
        </ul>
        <ul>
          <li>View Pairing History</li>
          <li>Update Preferences</li>
          {/* Add more sidebar items as necessary */}
        </ul>
      </div>
      <div className="content">
        {/* Add existing content here */}
        <div className="instructor-header">
          <img src={instructor.profilePicture} alt="ProfilePicture" />
          <h1>{instructor.name}</h1>
        </div>
        <div className="instructor-pairings">
          <h2>Current Pairings for the Week</h2>
          <ul>
            {pairings.map((pairing) => (
              <li key={pairing.id}>
                {pairing.student1} - {pairing.student2}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary">Update Pairings</button>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
