function CodeWriters(props: any) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} alt={`${props.name}`} className="card__image" />
        <p className="card__name">{props.name}</p>
        <ul className="social-icons">
          <li>
            <a rel="noreferrer" target="_blank" href={props.linkedin}>
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href={props.linkedin}>
              <i className="fa fa-github"></i>{" "}
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href={props.linkedin}>
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="homePage">
      <article className="aboutApp">


        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/people-shopping-online-2663489-2207658.png"
          alt="gh"
        />
          <h1 className="textHome">"Saves Your Time, Money And Worries"</h1>
      </article>
      <h2 className="title">Programmers</h2>
      <section className="aboutUs">
        <article className="programmers">
          <div>
            <CodeWriters
              img="https://media-exp1.licdn.com/dms/image/D4E35AQE_zb_J8vi1Uw/profile-framedphoto-shrink_400_400/0/1642446411789?e=1648548000&v=beta&t=_L_CBYPFnmBFtRsTtxuuw9r0WnmrLBNGjZAVr5k7S2k"
              name="Aschalew Azage"
              linkedin="https://www.linkedin.com/in/aschalew-azage/"
              email=""
              github="https://github.com/Ascha10"
            />
          </div>
          <div>
            <CodeWriters
              img="https://media-exp1.licdn.com/dms/image/D4D35AQGWQJkEoEBWtg/profile-framedphoto-shrink_400_400/0/1642848343069?e=1648562400&v=beta&t=kq_1S0Jp9OM5RQjAHXBEh8Muj0EcF1i6-wT0jYuGuYY"
              name="Liel Itzchak"
              linkedin="https://www.linkedin.com/in/lielitzchak/"
              email="liel.itzc@gmail.com"
              github="https://github.com/lielitzchak"
            />
          </div>
          <div>
            <CodeWriters
              img="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              name="Eliyahu Belay"
              linkedin="https://www.linkedin.com/in/eliyahu-belay-a75634227/"
              email=""
              github="https://github.com/EliyahuBelay"
            />
          </div>
        </article>
      </section>
      <section className="location">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.3129312038369!2d34.89091117080763!3d31.954066998826754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502ca59320315f9%3A0x7951b47ac328a87c!2z15jXpy3Xp9eo15nXmdeo15Q!5e0!3m2!1siw!2sil!4v1648473192184!5m2!1siw!2sil"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
