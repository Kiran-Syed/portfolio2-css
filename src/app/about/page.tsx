import Image from "next/image";
export default function About() {
  return (
    <div>
      <div>
        <hr className="hr" />
        <h1 id="about-me">
          About <span>Me</span>
        </h1>
        <hr className="hrs" />

        <div id="about">
          <Image
            src="/images/folio.jpeg"
            alt="cover"
            width="350"
            height="200"
            className="img"
          ></Image>
          <p id="para">
            <span>I'm</span> Passionate about coding, with a strong foundation
            in Html, Css Javascript, Typescript React and Next.js. Over the
            years, My work is driven by curiosity and a constant desire to learn
            and evolve. I thrive in collaborative environments but am equally
            comfortable managing projects independently.
          </p>
        </div>
      </div>
    </div>
  );
}
