import styles from "../component_styles/mainContent.module.scss";

export default function MainContent() {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.headings}>
          <h2>DLACZEGO AI JEST TAK ISTOTNE</h2>
          <h4>
            AI stało się juz codziennością naszego zycia. Oto kilka powodów dla
            których powinieneś zacząć go uzywać
          </h4>
        </div>
        <div className={styles.reasons}>
          <div className={styles.reasonBox}>
            <div className={`${styles.imgContainer} ${styles.time}`}>
              <img src="../../public/icons/time.svg" alt="time" />
            </div>
            <h2>Oszczędzaj czas każdego dnia</h2>
            <p>
              Oszczędność czasu AI automatyzuje powtarzalne zadania, takie jak
              odpowiadanie na maile, analiza danych czy obsługa klienta. Dzięki
              temu Ty i Twój zespół możecie skupić się na strategicznych
              działaniach zamiast tracić godziny na rutynowe czynności. W
              praktyce oznacza to więcej zrobionych rzeczy w krótszym czasie.
            </p>
          </div>
          <div className={styles.reasonBox}>
            <div className={`${styles.imgContainer} ${styles.growth}`}>
              <img src="../../public/icons/growth.svg" alt="growth" />
            </div>
            <h2>Szybszy rozwój</h2>
              <p>Sztuczna inteligencja pomaga szybciej analizować rynek, testować pomysły i podejmować decyzje w oparciu o dane. Możesz szybciej wprowadzać nowe produkty, optymalizować ofertę i reagować na zmiany w branży. To daje realną przewagę konkurencyjną.
              </p>
          </div>
          <div className={styles.reasonBox}>
            <div className={`${styles.imgContainer} ${styles.support}`}>
              <img src="../../public/icons/support.svg" alt="support" />
            </div>
            <h2>Wsparcie 24/7 dla użytkowników</h2>
                <p>Narzędzia oparte na AI działają bez przerwy — mogą obsługiwać klientów, generować raporty czy monitorować procesy nawet w nocy. Twoja firma przestaje być ograniczona godzinami pracy zespołu. To szczególnie ważne przy sprzedaży online i klientach z różnych stref czasowych.</p>
          </div>
          <div className={styles.reasonBox}>
            <div className={`${styles.imgContainer} ${styles.dolar}`}>
              <img src="../../public/icons/dolar.svg" alt="dolar" />
          </div>
          <h2>Opłacalność od pierwszego dnia</h2>
              <p>AI obniża koszty operacyjne, ograniczając potrzebę ręcznej pracy przy wielu procesach. Jednocześnie pomaga zwiększać sprzedaż poprzez personalizację ofert i lepsze targetowanie reklam. Mniej kosztów + większe przychody = lepsza rentowność.</p>
            </div>
          <div className={styles.reasonBox}>
            <div className={`${styles.imgContainer} ${styles.community}`}>
              <img src="../../public/icons/team.svg" alt="team" />
            </div>
            <h2>Prostota użycia dla każdego zespołu</h2>
              <p>Nowoczesne narzędzia AI są intuicyjne i nie wymagają zaawansowanej wiedzy technicznej. Marketing, sprzedaż, HR czy obsługa klienta mogą z nich korzystać bez programowania. Dzięki temu całe przedsiębiorstwo może szybko wdrożyć nowe rozwiązania.</p>
          </div>
          <div className={styles.reasonBox}>
            <div className={`${styles.imgContainer} ${styles.lightning}`}>
              <img src="../../public/icons/lightning.svg" alt="lightning" />
            </div>
            <h2>Szybkość implementacji</h2>
              <p>Wiele rozwiązań AI działa w modelu SaaS i można je uruchomić w ciągu kilku godzin lub dni. Nie potrzeba długich wdrożeń ani rozbudowanej infrastruktury IT. To pozwala szybko zobaczyć pierwsze efekty i skalować rozwiązania wraz z rozwojem firmy.</p>
          </div>
        </div>
      </div>
    </>
  );
}
