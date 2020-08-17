import React from "react"

const ApplicationMobile = ({name, url, imgName, HTML, CSS, Sass, Bootstrap, JavaScript, ReactJS, Redux, NodeJS, MongoDB, description, Wide}) => {
    return (
            <div className="mobile-app-container">
                <h3><a className="mobile-app-heading" href={url} target="_blank" rel="noopener noreferrer" title={name}>{name}</a></h3>
                <div className="d-flex justify-content-center mb-2">
                    {HTML && <span className="badge badge-pill badge-info">HTML5</span>}
                    {CSS && <span className="badge badge-pill badge-success">CSS</span>}
                    {Sass && <span className="badge badge-pill badge-success">Sass</span>}
                    {Bootstrap && <span className="badge badge-pill badge-success">Bootstrap</span>}
                    {JavaScript && <span className="badge badge-pill badge-danger">JavaScript</span>}
                    {ReactJS && <span className="badge badge-pill badge-danger">ReactJS</span>}
                    {Redux && <span className="badge badge-pill badge-danger">Redux</span>}
                    {NodeJS && <span className="badge badge-pill badge-warning">NodeJS</span>}
                    {MongoDB && <span className="badge badge-pill badge-dark">MongoDB</span>}
                </div>
                <div className="d-flex">
                    <div>
                        <a href={url} target="_blank" rel="noopener noreferrer" title={name}><img className={`mobile-app float-right ml-3 ${Wide ? "w-100" : "w-50"}`} src={`./sources/${imgName}.png`} alt={name} title={name}></img></a>
                        <p className="text-justify">{description}</p>
                    </div>
                </div>
            </div>
    )
}

export default ApplicationMobile