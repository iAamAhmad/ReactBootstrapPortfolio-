import React from 'react'

const ProjectOne = () => {
   return (
      <div className="container">
         <div className="row mt-5">
            {/* card one */}
            <div className="col-md-6">
               <div className="card rounded-4 shadow-lg mb-4 border-0">
                  <div className="card-body">
                     <div className="">
                        <h4 className="fw-bold">Free</h4>
                        <p className="text-muted">For Freelancers</p>
                     </div>
                     <h2>$0</h2>
                     <ul className="list-group list-group-flush fs-5 mb 5 vstack gap-3">
                        {/* list One */}
                        <li className="list-group-item border-0">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                     </ul>
                     <div className="d-grid">
                        <button className="mt-5 mb-4 btn btn-dark rounded-4">Subscribe</button>
                     </div>
                  </div>
               </div>
            </div>



         {/* Card two */}
            <div className="col-md-6 ">
            <div className="card rounded-4 shadow-lg mb-4 border-0 text-bg-dark">
                  <div className="card-body">
                     <div className="">
                        <h4 className="fw-bold">Pro</h4>
                        <p className="">For Agencies</p>
                     </div>
                     <h2>$100</h2>
                     <ul className="list-group list-group-flush fs-5 mb 5 vstack gap-3">
                        {/* list One */}
                        <li className="list-group-item border-0 text-bg-dark">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0 text-bg-dark">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0 text-bg-dark">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0 text-bg-dark">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                        {/* list One */}
                        <li className="list-group-item border-0 text-bg-dark">
                           <i className="bi bi-check2">Single User</i>
                        </li>
                     </ul>
                     <div className="d-grid">
                        <button className="mt-5 mb-4 btn btn-light rounded-4">Subscribe</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectOne
