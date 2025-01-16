import React, { useEffect, useState } from 'react';
import { fetchSubmissions } from '../api/api';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const getSubmissions = async () => {
      try {
        const { data } = await fetchSubmissions();
        setSubmissions(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSubmissions();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      {submissions.length > 0 ? (
        <div className="row">
          {submissions.map((submission, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{submission.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{submission.socialMediaHandle}</h6>
                  <div className="mt-3">
                    <h6>Uploaded Images:</h6>
                    <div className="d-flex flex-wrap">
                      {submission.images.map((image, i) => (
                        <img
                          key={i}
                          src={`http://localhost:5000/${image}`}
                          alt={`Submission-${index}-${i}`}
                          className="img-thumbnail m-1"
                          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link to="/UserForm" className="btn btn-primary mt-2">Go to UserForm</Link>
        </div>
      ) : (
        <p className="text-center text-muted">No submissions available.</p>
      )}
    <footer className="bg-dark text-white text-center py-2 mt-5">
      <p className="mb-0">&copy; 2025 User Submission System</p>
    </footer>
    </div>
    
  );
};

export default AdminDashboard;
