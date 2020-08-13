import React from "react"
import {Link} from "react-router-dom"
import ApplicationsData from "./ApplicationsData"

const Home = ({en, copyToClipboard}) => {

    return (
        <section className="container">
            <div className="d-flex flex-column">
                <div className="d-flex flex-column home-section">
                    <h1>{en ? "About me" : "O mně"}</h1>
                    <p className="home-paragraph">{en ? "My name is Dan Sprucek and I've been learning programming since beginning of 2020. So far my journey included:" : "Jmenuji se Dan Špruček a programování se věnuji od začátku roku 2020. Moje cesta vypadá zatím následovně:"}</p>
                    <div className="path-container">
                        <ul className="home-techlist">
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                            <li>ReactJS</li>
                        </ul>
                        <img className="path-img" src="./sources/Path.png" alt={en ? 'Learning Path' : 'Cesta ke vzdělání'} title={en ? 'Programmer\'s Learning Path' : 'Cesta programátorského vzdělání'}></img>
                        <div className="home-centering-class"></div>
                    </div>
                    <h5>{en ? "Would you like to know more about me?" : "Chcete se o mně dozvědět více?"}</h5>
                    <Link className="home-links" to="/about" title={en ? 'About Page' : 'O mně'}>{en ? "GO TO ABOUT PAGE" : "VICE NA 'O MNĚ'"}</Link>
                </div>
                <div className="d-flex flex-column home-section home-midsection">
                    <h1>Portfolio</h1>
                    <h4>{en ? "Here is a sample of my work:" : "Ukázka mých projektů:"}</h4>
                    <div className="home-portfolio-container">
                        <div className="d-flex flex-column mr-1">
                            <a href={ApplicationsData[0].url} target="_blank" rel="noopener noreferrer"><img className="home-portfolio-example" src={`./sources/${ApplicationsData[0].name}.png`} alt={en ? ApplicationsData[0].name : ApplicationsData[0].nameCZ} title={en ? ApplicationsData[0].name : ApplicationsData[0].nameCZ}></img></a>
                            <h4 className="mt-2">{en ? ApplicationsData[0].name : ApplicationsData[0].nameCZ}</h4>
                        </div>
                        <div className="d-flex flex-column ml-1">
                            <a href={ApplicationsData[1].url} target="_blank" rel="noopener noreferrer"><img className="home-portfolio-example" src={`./sources/${ApplicationsData[1].name}.png`} alt={en ? ApplicationsData[1].name : ApplicationsData[1].nameCZ} title={en ? ApplicationsData[1].name : ApplicationsData[1].nameCZ}></img></a>
                            <h4 className="mt-2">{en ? ApplicationsData[1].name : ApplicationsData[1].nameCZ}</h4>
                        </div>
                    </div>
                    <h5>{en ? "Would you like to know more about my work?" : "Chcete se dozvědět více o mých projektech?"}</h5>
                    <Link className="home-links" to="/portfolio" title={en ? 'Portfolio Page' : 'Portfolio'}>{en ? "GO TO PORTFOLIO PAGE" : "VÍCE NA 'PORTFOLIO'"}</Link>
                </div>
                <div className="d-flex flex-column home-section">
                    <h1>{en ? "Contact" : "Kontakt"}</h1>
                    <h6>{en ? "Best way to contact me is via e-mail:" : "Nejlepší způsob jak mě kontaktovat je přes e-mail:"} <span><a href="mailto:dan.sprucek@gmail.com" title="Send me an e-mail">dan.sprucek@gmail.com</a> <i className="far fa-copy" data-value="dan.sprucek@gmail.com" onClick={copyToClipboard} title="Copy to clipboard"></i></span></h6>
                    <h5>{en ? "Would you like to know more ways to contact me?" : "Chcete se dozvědět další způsoby jak mě kontaktovat?"}</h5>
                    <Link className="home-links" to="/contact" title={en ? 'Contact Page' : 'Kontakt'}>{en ? "GO TO CONTACT PAGE" : "VÍCE NA 'KONTAKT'"}</Link>
                </div>
            </div>
        </section>
    )
}

export default Home