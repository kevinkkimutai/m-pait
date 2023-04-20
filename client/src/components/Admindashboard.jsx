import React from "react";

function Admindashboard() {
  return (
 
   
      <div className="container text-center pt-5 me-5">
  <div className="row align-items-center me-5">
    <div className="col">
     <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Students</span></h4>
   <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Feedbacks</span></h4>
    <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Pairs</span></h4>
    <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
  </div>
</div>
  
   
  );
}

export default Admindashboard;
