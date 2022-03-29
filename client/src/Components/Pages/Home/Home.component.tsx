import React from "react";

function CodeWriters(props: any) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} alt={`${props.name}`} className="card__image" />
        <p className="card__name">{props.name}</p>
        <ul className="social-icons">
          <li>
            <a href={props.github}>
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href={props.email}>
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href={props.linkedin}>
              {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
              {/* <FontAwesomeIcon/> */}
              <i className="fa-brands fa-linkedin"></i>
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
            </a>
          </li>
        </ul>
        <ul className="social-icons">
      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i className="fa fa-codepen"></i></a></li>
    </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="homePage">
      <article className="aboutApp">
        <div className="aboutText">
          aboutApp Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus earum dolore quod eos, rem cum ut assumenda? Consectetur,
          veniam eveniet suscipit enim vero expedita assumenda, harum nobis
          incidunt impedit repudiandae! Esse eligendi veniam nihil optio
          repellat maiores ipsa laudantium excepturi minima, id voluptate
          dolorum sit sequi, dolore rerum totam labore iste quia. A magnam aut
          rerum modi commodi, veniam totam! Quasi aliquid error a suscipit
          deleniti recusandae dignissimos quo nesciunt tenetur ipsam, tempora
          provident qui at odit facilis vel quia laudantium enim? Quas inventore
          ducimus necessitatibus cum error in obcaecati. Molestias dicta unde
          alias quisquam esse, voluptates, quos recusandae non doloribus odit
          quam ex consequatur dolore. Quidem, repudiandae, consequatur aperiam
          commodi dolorem rem, in dolores voluptate esse provident a! Est?
        </div>
        <div className="img">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/people-shopping-online-2663489-2207658.png"
            alt="gh"
          />
        </div>
      </article>
      <h2 className="title">the programmers</h2>
      <section className="aboutUs">
        <article className="programmers">
          <div>
            <CodeWriters
              img="https://media-exp1.licdn.com/dms/image/D4E35AQE_zb_J8vi1Uw/profile-framedphoto-shrink_400_400/0/1642446411789?e=1648548000&v=beta&t=_L_CBYPFnmBFtRsTtxuuw9r0WnmrLBNGjZAVr5k7S2k"
              name="Aschalew Azage"
              linkedin=""
              email=""
              github=""
            />
          </div>
          <div>
            <CodeWriters
              img="https://media-exp1.licdn.com/dms/image/D4D35AQGWQJkEoEBWtg/profile-framedphoto-shrink_400_400/0/1642848343069?e=1648562400&v=beta&t=kq_1S0Jp9OM5RQjAHXBEh8Muj0EcF1i6-wT0jYuGuYY"
              name="Liel Itzchak"
              linkedin="https://www.linkedin.com/in/lielitzchak/"
              email=""
              github=""
            />
          </div>
          <div>
            <CodeWriters
              img="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              name="Liel Itzchak"
              linkedin=""
              email=""
              github=""
            />
          </div>
        </article>
        {/* </div> */}
      </section>
      <section className="location">
        <iframe
          title="j"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846.3129312038369!2d34.89091117080763!3d31.954066998826754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502ca59320315f9%3A0x7951b47ac328a87c!2z15jXpy3Xp9eo15nXmdeo15Q!5e0!3m2!1siw!2sil!4v1648473192184!5m2!1siw!2sil"
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
