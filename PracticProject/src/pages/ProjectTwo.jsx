import React from 'react'

const ProjectTwo = () => {
   return (
      <div className="container">
         <div className="card bg-light border-0 shadow-lg rounded-4 mt-5">
            <div className="card-body">
               <div className="row p-5">
                  <div className="col-7">
                     <h2 className="fw-bold">
                        What others Think?
                     </h2>

                  </div>
                  <div className="col-5">
                     <div className="card">
                        <div className="card-body">
                           <h3 className="display-5 fw-semibold">
                              <i className="fa fa-star text-warning">4.8</i>
                           </h3>
                           <p className="text-center">Average Rating</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectTwo
