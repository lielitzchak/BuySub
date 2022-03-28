const Programmer = (props) => {
  return (
    <section>
      <h6>{props.nameProgrammer}</h6>
      <article>
        <div>
          <a href={props.linkedin} target="_blank" rel="noreferrer">
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div>
          <a href={props.github} target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons.flaticon.com/png/512/1240/premium/1240971.png?token=exp=1648469440~hmac=207b1ca6586484cfb64ebe734adcead8"
              alt="linkedin"
            />
          </a>
        </div>
        <div>
          <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-256.png"
              alt="linkedin"
            />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Programmer;
