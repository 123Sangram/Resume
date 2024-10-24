

import React from 'react'
import "./App.css";
const App=()=>{
  return (
    <div>
      <header id="header">
        <h1 className="headingtop">
          <span className="your">SANGRAM</span> SINGH
        </h1>
        <hr />
        <span className="title">FRONTED DEVELOPER</span>
        <hr />
      </header>
      <main>
        <article id="mainLeft">
          <section>
            <h2 className="heading1">CONTACT</h2>

            <p>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <a className="linking" href="mailto:sangramamvan@gmail.com">
                sangramamvan@gmail.com
              </a>
            </p>
            <p>
              <i className="fab fa-github" aria-hidden="true"></i>
              <a className="linking" href="https://github.com/123Sangram">
                123Sangram
              </a>
            </p>
            <p>
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              <a
                className="linking"
                href="https://www.linkedin.com/in/sangram-singh-706715272/"
              >
                sangram-singh-706715272
              </a>
            </p>
          </section>
          <section>
            <h2 className="heading1">SKILLS</h2>

            <p>
              HTML, CSS, GitHub, VS Code, React, Tailwind, Node.js Express, SQL,
              Firebase, C, C++
            </p>
          </section>
          <section>
            <h2 className="heading1">EDUCATION</h2>

            <h3 className="heading3">YOUR MAJOR</h3>
            <p>B.Tech</p>
            <p>Ajay Kumar Garg Engineering College Ghaziabad</p>
            <p>2022-2026</p>
            <br></br>
            <p>InterMediate</p>
            <p>Aadarsh Inter College Bisanda, Banda</p>
            <p>2020</p>
            <br></br>
            <p>High School</p>
            <p>Aadarsh Inter College Bisanda, Banda</p>
            <p>2018</p>
          </section>
        </article>
        <article id="mainRight">
          <section className="section1">
            <h2 className="heading1">ABOUT</h2>

            <p>
              As a passionate frontend developer, I specialize in creating
              visually appealing, user-friendly interfaces with a focus on
              performance and responsiveness. I thrive in dynamic environments
              where creativity and innovation are valued, and I'm seeking a
              company that
              <strong> embraces modern web technologies </strong>, fosters
              continuous learning, and prioritizes{" "}
              <strong>delivering exceptional user experiences </strong>.
            </p>
          </section>

          <section>
            <h2 className="heading1">WORK EXPERIENCE</h2>
            <h3 className="heading3">Group Project Participant</h3>
            <p>College Group Project | 2022 - Present</p>
            <p>
              Worked within a team of developers to build innovative web
              applications as part of a college initiative.
            </p>
            <ul>
              <li>
                Collaborated with a team to develop a responsive web application
                using HTML, CSS, and JavaScript.
              </li>
              <li>
                Integrated GitHub for version control, ensuring smooth
                collaboration and code management.
              </li>
              <li>
                Focused on enhancing UI/UX through modern design techniques.
              </li>
            </ul>
            <br />
            <h3 className="heading3">Selected for SIH 2024</h3>
            <p>Smart India Hackathon 2024 | 2024</p>
            <p>
              Selected to participate in the national level SIH 2024, working on
              real-world problem-solving with a focus on frontend development.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
export default App;