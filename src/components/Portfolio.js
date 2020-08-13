import React from "react"
import ApplicationsData from "./ApplicationsData"
import ApplicationMobile from "./ApplicationMobile"
import ApplicationDesktop from "./ApplicationDesktop"
import ApplicationDesktopList from "./ApplicationDesktopList"

const Portfolio = ({en}) => {
    
    const AppsMobile = ApplicationsData.map(Ap => <ApplicationMobile key={Ap.name} name={en ? Ap.name : Ap.nameCZ} url={Ap.url} imgName={Ap.name} description={en ? Ap.description : Ap.descriptionCZ} HTML={Ap.HTML} CSS={Ap.CSS} JavaScript={Ap.JavaScript} Bootstrap={Ap.Bootstrap} Sass={Ap.Sass} ReactJS={Ap.ReactJS} Redux={Ap.Redux} Wide={Ap.Wide} />)
    const AppsDesktop = ApplicationsData.map(Ap => <ApplicationDesktop key={Ap.name} name={en ? Ap.name : Ap.nameCZ} url={Ap.url} imgName={Ap.name} description={en ? Ap.description : Ap.descriptionCZ} HTML={Ap.HTML} CSS={Ap.CSS} JavaScript={Ap.JavaScript} Bootstrap={Ap.Bootstrap} Sass={Ap.Sass} ReactJS={Ap.ReactJS} Redux={Ap.Redux} Wide={Ap.Wide} />)
    const AppsDesktopList = ApplicationsData.map(Ap => <ApplicationDesktopList key={Ap.name} name={en ? Ap.name : Ap.nameCZ} url={Ap.url} imgName={Ap.name} description={en ? Ap.description : Ap.descriptionCZ} HTML={Ap.HTML} CSS={Ap.CSS} JavaScript={Ap.JavaScript} Bootstrap={Ap.Bootstrap} Sass={Ap.Sass} ReactJS={Ap.ReactJS} Redux={Ap.Redux} Wide={Ap.Wide} />)

    return (
        <section className="container">
            <h1>{en ? 'Welcome to my Portfolio' : 'Vítejte na mém portfoliu'}</h1>
            <h5>{en ? 'I will be keeping most of my Programming work here on this site, but you can always check it also at my' : 'Budu zde prezentovat většinu svých projektů, ale všechny budou zároveň na mém'}</h5>
            <h4><a className="download-cv" href="https://github.com/dan-sprucek" target="_blank" rel="noopener noreferrer" title={en ? 'Visit my Github profile' : 'Navštivte můj Github profil'}>{en ? 'GITHUB PROFILE' : 'GITHUB PROFILU'}</a></h4>
            <div className="portfolio-mobile">
                {AppsMobile}
            </div>
            <div className="portfolio-desktop">
                <div className="portfolio-desktop-list">
                    {AppsDesktopList}
                </div>
                <div className="portfolio-desktop-apps">
                    {AppsDesktop}
                </div>
            </div>
        </section>
    )
}

export default Portfolio