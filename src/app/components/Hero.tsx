import {
  AppWindow,
  Chrome,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  TabletSmartphone,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="">
        <div id="hero-section">
          <div id="hero">
            <div id="graph">
              <h2>Hello, Its Me</h2>
              <h1 className="name"> Kiran Shahid</h1>
              <h3>
                And I'm a Frontend Developer<span className="text"></span>|
              </h3>
            </div>

            <p id="paragraph">
              I'm a <i>Web</i> & <i>App Developer. </i>
              I'm a dedicated frontend web developer with a passion for crafting
              responsive, user-friendly websites. Combining creativity with
              technical expertise, I specialize in web & App design.
            </p>

            <div className="app">
              <Linkedin className="apps" />
              <Github className="apps" />
              <Facebook className="apps" />
            </div>

            <button id="butt">Contact Me</button>
          </div>

          <Image
            src="/images/folio.jpeg"
            alt="cover"
            width="350"
            height="200"
            className="image"
          ></Image>
        </div>

        {/* ====== CARDS ==== */}

        <div id="skill">
          <span>Skills</span>
        </div>

        <div id="main-card">
          <div className="card">
            <p>
              <AppWindow className="p" />
            </p>
            <h4>UI / UX Design</h4>
            <p>
              I'm an expert in UI/UX design, width a deep understanding of
              user-centerd
            </p>
          </div>

          <div className="card">
            <p>
              <TabletSmartphone className="p" />
            </p>
            <h4>App Developer</h4>
            <p>
              I'm an App Developer with expertise in builiding optimizing
              applications seamless user experience.
            </p>
          </div>

          <div className="card">
            <p>
              <Chrome className="p" />
            </p>
            <h4>Web Developer</h4>
            <p>I'm creating responsive website and web applications.</p>
          </div>
        </div>
      </div>
    </>
  );
}
