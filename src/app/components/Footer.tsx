import { Facebook, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="icons">
          <Linkedin className="icon" /> <Github className="icon" />{" "}
          <Facebook className="icon" />
        </div>
        <p> KIRAN SHAHID © 2023-2024 copy right claims </p>
      </div>
    </footer>
  );
}
