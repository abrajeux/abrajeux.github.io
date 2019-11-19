import React from 'react';
import styles from "./App.style";
//Components
import RotatingLogo from "./components/rotatingLogo/logo";
import SkillChip from "./components/skillChip/skillChip";
import ExperienceChip from "./components/ExperienceChip/ExperienceChip";
//Images
import linkedinLogo from "./images/linkedin-logo.png";
import githubLogo from "./images/pngkey.com-github-icon-png-1787243.png";
import gitlabLogo from "./images/GitLab_Logo.svg.png";
import cppLogo from './images/skills/1200px-ISO_C++_Logo.svg.png';
import chsharpLogo from './images/skills/csharp-logo-58C6C6F67A-seeklogo.com.png';
import jsLogo from './images/skills/480px-Unofficial_JavaScript_logo_2.svg.png';
import reactLogo from './images/1200px-React-icon.svg.png';
import javaLogo from './images/skills/58480979cef1014c0b5e4901.png';
import cssLogo from './images/skills/logo-2582747_1920.png';
import htmlLogo from './images/skills/logo-2582748_1920.png';
import adobeLogo from './images/skills/iconfinder_logo_brand_brands_logos_adobe_2993706.png';
import etnaLogo from './images/exp/etnaLogo.jpeg';
import bbsLogo from './images/exp/bbsLogo.png';
import beaLogo from './images/exp/beaLogo.png';
import cfLogo from './images/exp/cfLogo.png';
import diderotLogo from './images/exp/diderotLogo.png';
import jdaLogo from './images/exp/jdaLogo.jpg';
import sirapLogo from './images/exp/sirapLogo.jpg';

function App() {

  return (
      <div style={styles.app}>
          <div style={styles.header}>
              <div style={styles.logoContainer}>
                <RotatingLogo/>
              </div>

              <div style={styles.infosContainer}>
                  <div style={styles.photo}/>
                  <div>
                      <p style={styles.name}>Alexandre BRAJEUX</p>
                      <p style={styles.job}>Développeur React</p>
                  </div>
              </div>

              <div  style={styles.linkIconsContainer}>
                  <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/alexandre-brajeux/"}><img src={linkedinLogo} alt={"linkedingLogo"} style={styles.linkIcon}/></a>
                  <a target="_blank" rel="noopener noreferrer" href={"https://github.com/abrajeux"}><img src={githubLogo} alt={"githubLogo"} style={styles.linkIcon}/></a>
                  <a target="_blank" rel="noopener noreferrer" href={"https://gitlab.com/abrajeux"}><img src={gitlabLogo} alt={"gitlabLogo"} style={styles.linkIcon}/></a>
              </div>
          </div>

          <div style={styles.content}>
              <div style={styles.sectionContainer}>
                  <div style={{background: 'linear-gradient(to right,rgba(110, 212, 111,255) 50%, rgba(110, 212, 111,0) 100%'}}>
                      <p style={styles.title}>Compétences</p>
                  </div>
                  <div style={styles.chipContainer}>
                      <SkillChip image={reactLogo} skill={"React"} progress={74}/>
                      <SkillChip image={jsLogo} skill={"Javascript"} progress = {50}/>
                      <SkillChip image={cppLogo} skill={"C++"} progress={70}/>
                      <SkillChip image={chsharpLogo} skill={"C#"} progress={35}/>
                      <SkillChip image={htmlLogo} skill={"HTML"} progress={75}/>
                      <SkillChip image={cssLogo} skill={"CSS"} progress={80}/>
                      <SkillChip image={javaLogo} skill={"Java"} progress={50}/>
                      <SkillChip image={adobeLogo} skill={"Suite Adobe"} progress={90}/>
                  </div>
              </div>

              <div style={styles.sectionContainer}>
                  <div style={{background: 'linear-gradient(to right,rgba(196, 31, 56,255) 50%, rgba(196, 31, 56,0) 100%'}}>
                      <p style={styles.title}>Expériences</p>
                  </div>
                  <div style={styles.experienceContainer}>
                      <ExperienceChip image={etnaLogo} title={"Bachelor Responsable Web et Mobile / ETNA, Ivry-sur-Seine"} description={"2019 - 2022"}/>
                      <ExperienceChip image={cfLogo} title={"Développeur React en alternance / La Cinémathèque Française, Paris 12e"} description={"Septembre 2019 - Octobre 2020 / Réalisation d'un portail de gestion des intervenants et conférenciers"}/>
                      <ExperienceChip image={beaLogo} title={"Chargé d'assistance / Bien-être Assistance, Clichy"} description={"Juin 2019 - Août 2019"}/>
                      <ExperienceChip image={diderotLogo} title={"BTS Systèmes Numériques option Informatique et Réseaux / Lycée Polyvalent Diderot, Paris 19e"} description={"2017 - 2019"}/>
                      <ExperienceChip image={sirapLogo} title={"Opérateur / Sirap, Tarascon"} description={"Juillet 2018 - Août 2019"}/>
                      <ExperienceChip image={bbsLogo} title={"Stagiare / Big Boss Studio, Nice"} description={"Mai - Juillet 2018 / Participation à la création de l'application iOS de TSF Jazz en React Native"}/>
                      <ExperienceChip image={jdaLogo} title={"Baccalauréat S - SVT / Lycée Jeanne d'Arc, Colombes"} description={"2015 - 2017 / Admis avec mention Assez Bien"}/>
                  </div>
              </div>

          </div>
    </div>
  );
}

export default App;
