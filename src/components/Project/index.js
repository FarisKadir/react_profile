import React from 'react';



export function ProjectListItem({
    title,
    image,
    description,
    deployed,
    repo
  }) {
    return (
        <div className="col s4 left blue-grey darken-2">
            <h4 className="card-title blue-grey darken-2 teal-text text-lighten-5 center-align">{title}</h4>
            <div className="card blue-grey white-text">
                <div className="card-image">
                    <img src={image} alt={title}/>
                </div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a rel="noreferrer noopener" className="teal-text text-lighten-3" href={deployed} target="_blank">View Deployed Site</a>
                    <a rel="noreferrer noopener" className="teal-text text-lighten-3" href={repo} target="_blank">View Repo</a>
                </div>
            </div>
        </div>
        
    );
  }
