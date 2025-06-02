import React from "react";
function Experience(props) {
  return (
    <React.Fragment>
        <div className="experience-container">
            {props.experienceContentArray.map((item) => (
                <div className="job" key={item.objectId}>
                    <h1>{item.title}</h1>
                    <h2>{item.companyName}</h2>
                    <p>{item.duties}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    </React.Fragment>

  );
}
export default Experience;