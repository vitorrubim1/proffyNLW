import * as React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/48107882?s=460&u=8c3f30bced3d09a3158b9da5bbbbd154f121da26&v=4"
          alt="VitorRubim"
        />
        <div>
          <strong>Vitor Rubim</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br /> <br />
        Corrupti similique neque cum dolorum repellendus provident dignissimos!
        Corrupti aperiam adipisci ipsam quis! Saepe tempora sint facilis.
        Suscipit accusamus impedit sint iure.Facilis nesciunt expedita autem?
        Quas, assumenda!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Imagem do whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
