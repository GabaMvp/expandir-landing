import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [audienceType, setAudienceType] = useState("pacientes");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappAgendamento =
    "https://wa.me/558591423818?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Expandir%20Terapia%20Integrativa%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

  const audienceContent = {
    pacientes: {
      titleLine1: "Um cuidado que",
      titleLine2: "respeita",
      titleHighlight: "a sua história.",
      description:
        "Atendimento presencial e online para diferentes fases da vida.",
      buttonText: "Conhecer os atendimentos",
      buttonLink: "#atendimentos",
      items: [
        "Psicoterapia infantil",
        "Psicoterapia adolescente",
        "Psicoterapia adulto",
        "Terapia ABA",
        "Neuroavaliação",
        "Atendimento presencial e online",
      ],
    },

    profissionais: {
      titleLine1: "Um espaço para",
      titleLine2: "atender.",
      titleHighlight: "Possibilidades para crescer.",
      description:
        "Conheça a estrutura da Expandir e converse com a gente sobre parcerias.",
      buttonText: "Conversar sobre parcerias",
      buttonLink: "#contato",
      items: [
        "Salas para atendimento psicológico",
        "Estrutura acolhedora",
        "Localização estratégica",
        "Oportunidades de parceria",
      ],
    },
  };

  const activeAudience = audienceContent[audienceType];

  return (
    <main>
      <div
        className="background-fixed"
        style={{
          backgroundImage: 'url("/expandir/corredor.jpeg")',
        }}
      />

      

      <a
        href="#inicio"
        className="top-logo-link"
        aria-label="Expandir Terapia Integrativa"
      >
        <img
          src="/expandir/logo.png"
          alt="Expandir Terapia Integrativa"
          className="top-logo"
        />
      </a>


      <header
        className={`header ${scrolled ? "header-scrolled" : ""}`}
      >
        <div className="header-pill">
          <nav className="header-nav">
            <a href="#sobre">Sobre</a>
            <a href="#publicos">Para você</a>
            <a href="#atendimentos">Atendimentos</a>
            <a href="#espaco">Nosso espaço</a>
            <a href="#contato">Localização</a>
          </nav>

          <a
            href={whatsappAgendamento}
            target="_blank"
            rel="noreferrer"
            className="header-cta"
          >
            Agende sua sessão
          </a>
        </div>
      </header>

      {/* ========================================
          HERO
      ======================================== */}

      <section
        id="inicio"
        className="hero"
      >
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span>UM ESPAÇO PARA VOCÊ</span>
            </div>

            <h1>
              <span className="hero-title-main">
                Cuidar da mente é
              </span>

              <span className="hero-title-highlight">
                expandir possibilidades.
              </span>
            </h1>

            <p>
              Um espaço de acolhimento, escuta e cuidado psicológico para cada
              fase da vida.
            </p>

            <div className="hero-actions">
              <a
                href={whatsappAgendamento}
                target="_blank"
                rel="noreferrer"
                className="hero-button hero-button-primary"
              >
                Agende sua sessão

                <span className="button-arrow">
                  ↗
                </span>
              </a>

              <a
                href="#sobre"
                className="hero-button hero-button-secondary"
              >
                Conheça a Expandir
              </a>
            </div>

            <span className="hero-note">
              Cada pessoa, um caminho. Cada processo, no seu tempo.
            </span>
          </div>
        </div>
      </section>

    

      <section
        id="sobre"
        className="about-section"
      >
        <div className="about-container">
          <div className="about-left">
            <span className="section-eyebrow">
              A ESSÊNCIA EXPANDIR
            </span>

            <h2>
              O cuidado começa

              <span>
                com um olhar
              </span>

              <em>
                para você.
              </em>
            </h2>
          </div>

          <div className="about-right">
            <h3>
              Um espaço para acolher cada história com presença e respeito.
            </h3>

            <p>
              A Expandir nasce como um espaço de acolhimento, escuta e cuidado
              psicológico. Cada pessoa é recebida em sua singularidade,
              respeitando sua história, seu momento e seu ritmo.
            </p>

            <p>
              Nosso propósito é oferecer um cuidado atento e humano, criando um
              ambiente seguro para compreender emoções, atravessar desafios e
              construir novos caminhos.
            </p>

            <span className="about-signature">
              Cuidar também é se permitir.
            </span>
          </div>
        </div>
      </section>

      <section
        id="publicos"
        className="audience-section"
      >
        <div className="audience-container">
          <span className="section-eyebrow">
            PARA CUIDAR OU ATENDER
          </span>

          <h2 className="audience-main-title">
            A Expandir é <em>para você.</em>
          </h2>

          <div className="audience-layout">
            <div className="audience-tabs">
              <button
                type="button"
                className={`audience-tab ${
                  audienceType === "pacientes"
                    ? "audience-tab-active"
                    : ""
                }`}
                onClick={() => setAudienceType("pacientes")}
              >
                Para pacientes
              </button>

              <button
                type="button"
                className={`audience-tab ${
                  audienceType === "profissionais"
                    ? "audience-tab-active"
                    : ""
                }`}
                onClick={() => setAudienceType("profissionais")}
              >
                Para profissionais
              </button>
            </div>

            <div className="audience-description">
              <h3>
                <span>{activeAudience.titleLine1}</span>
                <span>{activeAudience.titleLine2}</span>
                <em>{activeAudience.titleHighlight}</em>
              </h3>

              <p>
                {activeAudience.description}
              </p>

              <a
                href={activeAudience.buttonLink}
                className="audience-button"
              >
                {activeAudience.buttonText}

                <span>
                  ↗
                </span>
              </a>
            </div>

            <div className="audience-list">
              {activeAudience.items.map((item) => (
                <div
                  className="audience-list-item"
                  key={item}
                >
                  <span className="audience-check">
                    ✓
                  </span>

                  <span>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      <section
        id="atendimentos"
        className="services-section"
      >
        <div className="services-container">
          <div className="services-heading">
            <span className="section-eyebrow">
              NOSSOS ATENDIMENTOS
            </span>

            <h2>
              O <em>cuidado certo</em>
              <span>faz toda a diferença.</span>
            </h2>
          </div>

          <div className="services-list">
            <article className="service-item">
              <div className="service-number">
                01
              </div>

              <div className="service-content">
                <div className="service-top">
                  <div>
                    <h3>
                      Psicoterapia
                    </h3>

                    <span className="service-mode">
                      ONLINE &amp; PRESENCIAL
                    </span>
                  </div>

                  <span className="service-arrow">
                    ↗
                  </span>
                </div>

                <p>
                  Acompanhamento psicológico individual para cada fase da vida.
                </p>

                <div className="service-tags">
                  <span>Infantil</span>
                  <span>Adolescente</span>
                  <span>Adulto</span>
                </div>
              </div>
            </article>

            <article className="service-item">
              <div className="service-number">
                02
              </div>

              <div className="service-content">
                <div className="service-top">
                  <div>
                    <h3>
                      Neuroavaliação
                    </h3>

                    <span className="service-mode">
                      PRESENCIAL
                    </span>
                  </div>

                  <span className="service-arrow">
                    ↗
                  </span>
                </div>

                <p>
                  Processo de avaliação que investiga o funcionamento
                  cognitivo, emocional e comportamental, auxiliando no
                  diagnóstico e no planejamento das intervenções.
                </p>

                <div className="service-tags">
                  <span>Infantil</span>
                  <span>Adolescente</span>
                  <span>Adulto</span>
                </div>
              </div>
            </article>

            <article className="service-item">
              <div className="service-number">
                03
              </div>

              <div className="service-content">
                <div className="service-top">
                  <div>
                    <h3>
                      Plantão Psicológico
                    </h3>

                    <span className="service-mode">
                      ONLINE &amp; PRESENCIAL
                    </span>
                  </div>

                  <span className="service-arrow">
                    ↗
                  </span>
                </div>

                <p>
                  Atendimento pontual para momentos de sofrimento emocional ou
                  situações inesperadas.
                </p>

                <div className="service-tags">
                  <span>Escuta rápida</span>
                  <span>Acolhimento</span>
                  <span>Orientação</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

    
      <section
        id="espaco"
        className="space-section"
      >
        <div className="space-container">
          <div className="space-heading">
            <div>
              <span className="section-eyebrow">
                NOSSO ESPAÇO
              </span>

              <h2>
                Um espaço pensado
                <span>para acolher,</span>
                <em>escutar e cuidar.</em>
              </h2>
            </div>

            <p>
              Ambientes preparados para oferecer conforto, privacidade e
              acolhimento em cada atendimento.
            </p>
          </div>

          <div className="space-gallery">
            <figure className="space-photo space-photo-main">
              <img
                src="/expandir/sala1.jpeg"
                alt="Sala de atendimento da Expandir"
              />
            </figure>

            <figure className="space-photo space-photo-tall">
              <img
                src="/expandir/corredor1.jpeg"
                alt="Corredor da Expandir Terapia Integrativa"
              />
            </figure>

            <figure className="space-photo">
              <img
                src="/expandir/sala2.jpeg"
                alt="Espaço de atendimento da Expandir"
              />
            </figure>

            <figure className="space-photo">
              <img
                src="/expandir/sala3.jpeg"
                alt="Sala da Expandir Terapia Integrativa"
              />
            </figure>

            <figure className="space-photo space-photo-wide">
              <img
                src="/expandir/sala4.jpeg"
                alt="Ambiente acolhedor da Expandir"
              />
            </figure>
          </div>
        </div>
      </section>


      <section
        id="contato"
        className="contact-section"
      >
        <div className="contact-container">
          <div className="contact-content">
            <span className="section-eyebrow">
              CONTATO &amp; LOCALIZAÇÃO
            </span>

            <h2>
              Seu próximo passo
              <span>pode começar</span>
              <em>por aqui.</em>
            </h2>

            <p className="contact-intro">
              Entre em contato com a Expandir para agendar uma sessão, tirar
              dúvidas ou conversar sobre possibilidades de parceria.
            </p>

            <div className="contact-details">
              <div className="contact-block">
                <span className="contact-label">
                  ENDEREÇO
                </span>

                <p>
                  Rua Santa Quitéria, nº 87, loja 8
                  <br />
                  Parreão - Fortaleza, CE
                  <br />
                  No pátio do Shopping Ceará
                </p>
              </div>

              <div className="contact-block">
                <span className="contact-label">
                  WHATSAPP
                </span>

                <a
                  href={whatsappAgendamento}
                  target="_blank"
                  rel="noreferrer"
                >
                  (85) 9142-3818
                </a>
              </div>

              <div className="contact-block">
                <span className="contact-label">
                  INSTAGRAM
                </span>

                <a
                  href="https://www.instagram.com/expandirterapia"
                  target="_blank"
                  rel="noreferrer"
                >
                  @expandirterapia
                </a>
              </div>
            </div>

            <a
              href={whatsappAgendamento}
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              Agende sua sessão
              <span>↗</span>
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Localização da Expandir Terapia Integrativa"
              src="https://www.google.com/maps?q=Rua%20Santa%20Quiteria%2087%20Parreao%20Fortaleza%20CE&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ========================================
          CTA FINAL
      ======================================== */}

      <section className="final-cta">
        <div className="final-cta-container">
          <span className="final-cta-eyebrow">
            UM PRIMEIRO PASSO
          </span>

          <h2>
            Cuidar de si também
            <span>pode ser um</span>
            <em>novo começo.</em>
          </h2>

          <p>
            Você não precisa ter todas as respostas para começar.
            Às vezes, tudo começa com uma conversa.
          </p>

          <a
            href={whatsappAgendamento}
            target="_blank"
            rel="noreferrer"
            className="final-cta-button"
          >
            Falar com a Expandir

            <span>
              ↗
            </span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img
              src="/expandir/logo.png"
              alt="Expandir Terapia Integrativa"
              className="footer-logo"
            />

            <p>
              Um espaço de acolhimento, escuta e cuidado psicológico.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-title">
                NAVEGAÇÃO
              </span>

              <a href="#sobre">
                Sobre
              </a>

              <a href="#publicos">
                Para você
              </a>

              <a href="#atendimentos">
                Atendimentos
              </a>

              <a href="#espaco">
                Nosso espaço
              </a>
            </div>

            <div className="footer-column">
              <span className="footer-title">
                CONTATO
              </span>

              <a
                href={whatsappAgendamento}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/expandirterapia"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>

            <div className="footer-column footer-address">
              <span className="footer-title">
                ONDE ESTAMOS
              </span>

              <p>
                Rua Santa Quitéria, nº 87, loja 8
                <br />
                Parreão - Fortaleza, CE
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Expandir Terapia Integrativa
          </span>

          <a href="#inicio">
            Voltar ao início ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

export default Home;