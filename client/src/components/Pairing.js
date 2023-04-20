import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pairing() {
  const [pairs, setPairs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState({});

  useEffect(() => {
    axios.get('/api/pairs/current-week')
      .then(response => {
        setPairs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handlePairChange = () => {
    axios.put(`/api/pairs/${selectedPair.id}`, selectedPair)
      .then(response => {
        setPairs(response.data);
        setModalOpen(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handlePairSelect = (pair) => {
    setSelectedPair(pair);
    setModalOpen(true);
  };

  const handlePairClose = () => {
    setModalOpen(false);
  };

  const handlePairSwap = () => {
    const tempPair = {
      ...selectedPair,
      student1: selectedPair.student2,
      student2: selectedPair.student1
    };
    setSelectedPair(tempPair);
  };

  return (
    <div>
      <h1>Pairing Page</h1>
      <table>
        <thead>
          <tr>
            <th>Pair ID</th>
            <th>Student 1</th>
            <th>Student 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map(pair => (
            <tr key={pair.id}>
              <td>{pair.id}</td>
              <td>{pair.student1}</td>
              <td>{pair.student2}</td>
              <td>
                <button onClick={() => handlePairSelect(pair)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Pair</h2>
            <label htmlFor="student1">Student 1:</label>
            <input
              type="text"
              id="student1"
              value={selectedPair.student1}
              onChange={e => setSelectedPair({...selectedPair, student1: e.target.value})}
            />
            <label htmlFor="student2">Student 2:</label>
            <input
              type="text"
              id="student2"
              value={selectedPair.student2}
              onChange={e => setSelectedPair({...selectedPair, student2: e.target.value})}
            />
            <button onClick={handlePairSwap}>Swap Students</button>
            <button onClick={handlePairChange}>Save Changes</button>
            <button onClick={handlePairClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pairing;
