import React from "react"

const About = ({en, handleScroll}) => {

    return (
        <section className="container">
            <h1>{en ? "Basic Information" : "Základní informace"}</h1>
            <div className="d-flex justify-content-around mb-3 pb-3">
                <div className="d-flex justify-content-between">
                    <div className="subsection-container-50PER d-flex flex-column justify-content-between align-items-center">
                        <img id="photo-dan" src="./sources/CV.jpg" alt="Dan Sprucek" title="Dan Sprucek"></img>
                        <a className="download-cv download-cv-mobile" href={en ? "https://drive.google.com/file/d/14d80tnYKRAE1nHdoc98oJIboxM7DenHL/view?usp=sharing" : "https://drive.google.com/file/d/1gy_CI0Fi459KCE32lz5W7gvydWKWc8OJ/view?usp=sharing"} target="_blank" rel="noopener noreferrer">{en ? "DOWNLOAD CV" : "STÁHNOUT CV"}</a>
                    </div>
                    <div className="subsection-container-50PER">
                        <dl className="mb-0">
                            <dt>{en ? "Name" : "Jméno"}</dt>
                            <dd>Dan Sprucek</dd>
                            <dt>{en ? "Location" : "Bydliště"}</dt>
                            <dd>{en ? "Prague, CZ" : "Praha, ČR"}</dd>
                            <dt>{en ? "Hobbies" : "Záliby"}</dt>
                            <dd>{en ? "Coding, Sport, Board Games" : "Kódování, Sport, Deskové hry"}</dd>
                            <dt>Humor</dt>
                            <dd className="mb-0">Limit = 404 Not Found</dd>
                        </dl>
                    </div>
                </div>
                <div className="about-further-info">
                    <h5>{en ? "Certificates" : "Certifikáty"}</h5>
                    <ul>
                        <li title="Issued by freeCodeCamp.com">Responsive Web Design</li>
                        <li title="Issued by freeCodeCamp.com">JavaScript Algorithms and Data Structures</li>
                        <li title="Issued by freeCodeCamp.com">Front End Libraries</li>
                    </ul>
                    <h5>Curriculum Vitae</h5>
                    <a className="download-cv download-cv-desktop" href={en ? "https://drive.google.com/file/d/14d80tnYKRAE1nHdoc98oJIboxM7DenHL/view?usp=sharing" : "https://drive.google.com/file/d/1gy_CI0Fi459KCE32lz5W7gvydWKWc8OJ/view?usp=sharing"} target="_blank" rel="noopener noreferrer">{en ? "DOWNLOAD CV" : "STÁHNOUT CV"}</a>
                </div>
            </div>
            <div>
                <h2>{en ? "Would you like to know more?" : "Chcete se dozvědět více?"}</h2>
                <div className="d-flex flex-column align-items-center mb-3">
                    <span className="about-scroll" onClick={handleScroll} data-value="abroad" title={en ? 'Two years abroad' : 'Dva roky v zahraničí'}><i className="fas fa-long-arrow-alt-right"></i> {en ? "I spent 2 years abroad" : "Pracoval jsem 2 roky v zahraničí"} <i className="fas fa-long-arrow-alt-left"></i></span>
                    <span className="about-scroll" onClick={handleScroll} data-value="pmWork" title={en ? 'Three years as a Project Manager' : 'Tři roky jako Projektový manažer'}><i className="fas fa-long-arrow-alt-right"></i> {en ? "Project Manager for 3 years" : "Byl jsem 3 roky Projektovým manažerem"} <i className="fas fa-long-arrow-alt-left"></i></span>
                    <span className="about-scroll" onClick={handleScroll} data-value="programStart" title={en ? 'Started with Programming in 2020' : 'Začal jsem programovat na začátku roku 2020'}><i className="fas fa-long-arrow-alt-right"></i> {en ? "Programming since 2020" : "Programuji od roku 2020"} <i className="fas fa-long-arrow-alt-left"></i></span>
                </div>
                <h4 id="abroad" className="about-experience-heading">{en ? "Two years abroad" : "Dva roky v zahraničí"}</h4>
                <div className="text-justify">
                    <p>{en ? 'First time in 2015 - went to the ' : 'Poprvé jsem odcestoval v roce 2015 do '}<span className="font-weight-bold">{en ? 'Hague in the Netherlands' : 'Haagu v Nizozemsku'}</span>{en ? '. Started as Administrative/IT support voluntary in ' : '. Začal jsem jako Administrátor/IT support dobrovolník v '}<abbr title={en ? "Non-Governmental Organisation" : "Nezisková organizace"}>NGO</abbr>{en ? ', then found a job as a ' : ', následně jsem našel práci jako '}<span className="font-weight-bold">{en ? 'Billing assistant' : 'Asistent účetního'}</span>{en ? ' in Astrium Company.' : ' ve firmě Astrium.'}</p>
                    <p>{en ? 'Second time in 2017 - moved to ' : 'Podruhé jsem cestoval v roce 2017 do '}<span className="font-weight-bold">{en ? 'Edinburgh in Scotland' : 'Edinburgu ve Skotsku'}</span>{en ? '. After a brief Bartender/Waiter gig I joined a hotel staff as a ' : '. Chvíli jsem pracoval jako barman/číšník, než jsem našel pozici '}<span className="font-weight-bold">{en ? 'Night Auditor' : 'nočního auditora'}</span>{en ? ' in newly opening Adagio Aparthotel.' : ' v nově otevřeném apartmanovém hotelu Adagio.'}</p>
                </div>
                <h4 id="pmWork" className="about-experience-heading">{en ? "Three years as a Project Manager" : "Tři roky jako Projektový manažer"}</h4>
                <div className="text-justify">
                    <p>{en ? 'First time in 2016 - right after coming back from the Netherlands found a job as ' : 'Poté, co jsem se vrátil z Nizozemska jsem si našel práci jako '}<span className="font-weight-bold">{en ? 'Project Manager in Wunderman Company' : 'Projektový manažer ve firmě Wunderman'}</span>{en ? '. Great colleagues, interesting job, learnt a lot about online marketing and processes.' : '. Čekala mě zajímavá práce se skvělými kolegy a spoustou zkušeností z oblasti online marketingu.'}</p>
                    <p>{en ? 'Second time in 2018-2020 - again after coming back from abroad, this time Scotland. Found most of my old team, gradually gained more experience and responsibilities, becoming ' : 'Podruhé jsem pracoval ve Wundermanu v letech 2018-2020, ihned po návratu ze Skotska. Přidal jsem se ke svému původnímu týmu, sbíral zkušenosti i odpovědnost než jsem byl povýšen na pozici '}<span className="font-weight-bold">Senior Project Manager</span>{en ? ' towards the end.' : '.'}</p>
                </div>
                <h4 id="programStart" className="about-experience-heading">{en ? "Started with Programming in 2020" : "Začal jsem programovat na začátku roku 2020"}</h4>
                <div className="text-justify">
                    <p>{en ? 'At the beginning of 2020 I quit my job right when CoronaVirus hit the world. I had a dream of learning programming all my life, so I took this "opportunity" and started learning.' : 'Na začátku roku 2020 jsem ukončil svoji kariéru jako Senior projektový manažer a měsíc na to vypukl koronavirus. Celý život jsem si chtěl programování vyzkoušet, takže jsem nastalou situaci využil jako příležitost a začal se vzděláváním.'}</p>
                    <p>{en ? 'Started with Giraffe Academy video tutorials, Greenfox Academy 3-weeks course and first freeCodeCamp certificate to learn ' : 'Nejdříve jsem se učil díky výukovým programům u Giraffe Academy, 3týdenním kurzem od Greenfox Academy a udělal jsem si první certifikát od freeCodeCamp, abych se naučil '}<span className="font-weight-bold">{en ? 'HTML, CSS, JavaScript and jQuery' : 'HTML, CSS, JavaScript a jQuery'}</span>{en ? '. Created my first website (not mobile friendly though). Continued with freeCodeCamp certificates and other sources to learn ' : '. Vytvořil jsem svoji první webovou stránku (bohužel není plně přizpůsobená pro mobilní telefony) a pokračoval jsem v dalších freeCodeCamp certifikacích, kde jsem se postupně naučil '}<span className="font-weight-bold">{en ? 'Bootstrap, Sass and ReactJS.' : 'Bootstrap, Sass a ReactJS.'}</span></p>
                    <p>{en ? 'Joined my first ' : 'V červenci 2020 jsem se zúčastníl svého prvního '}<span className="font-weight-bold">{en ? 'Hacathon' : 'Hacathonu'}</span> {en ? ' in July 2020 to contribute as a Frontend Developer.' : ', kde jsem přispěl svojí troškou jako Frontend Developer.'}</p>
                </div>
            </div>
        </section>
    )
}

export default About