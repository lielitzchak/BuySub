
import Programmer from "../../Features/Programmer/Programmer";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="button"></div>
          <div className="footer-info">
            <Programmer
              github=""
              email="eliyahubelay0@gmail.com"
              linkedin="https://www.linkedin.com/in/eliyahu-belay-a75634227/"
              nameProgrammer="Eliyahu Belay"
            />
            <Programmer
              github=""
              email="liel.itzc@gmail.com"
              linkedin="https://www.linkedin.com/in/lielitzchak/"
              nameProgrammer="Liel Itzchak"
            />
            <Programmer
              github=""
              email=""
              linkedin="https://www.linkedin.com/in/aschalew-azage/"
              nameProgrammer="Aschalew Azage"
            />
          </div>
          <div className="container">
            <div className="cont">
              <div className="footer_center"></div>
            </div>
          </div>
        </div>
      </footer>
      <section>
        <div className="copyright">
          <p className="copyright-text">
            Copyright &copy; 2022 All Rights Reserved by{" "}
            <a
              href="https://www.linkedin.com/in/eliyahu-belay-a75634227/"
              rel="noreferrer"
              target="_blank"
            >
              Eliyahu Belay
            </a>{" "}
            ,
            <a
              href="https://www.linkedin.com/in/aschalew-azage/"
              rel="noreferrer"
              target="_blank"
            >
              Aschalew Azage,
            </a>
            <a
              href="https://www.linkedin.com/in/lielitzchak/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Liel Itzchak
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
