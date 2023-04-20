import React, { useState, useEffect } from 'react';

function Feedback(){
    const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch('/api/feedback')
      .then(response => response.json())
      .then(data => setFeedback(data));
  }, []);

  return (
    <div>
      <h1>Feedback</h1>
      <ul>
        {feedback.map((item) => (
          <li key={item.id}>{item.comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Feedback;