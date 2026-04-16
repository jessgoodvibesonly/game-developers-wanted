export default function Home() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <div style={styles.logoRow}>
          <img src="/logo.png" alt="Aspire Logo" style={styles.logo} />
        </div>

        <section style={styles.hero}>
          <img
            src="/hero.png"
            alt="Game Developers Wanted"
            style={styles.heroImage}
          />

          <div style={styles.heroOverlay}>
            <h1 style={styles.title}>GAME DEVELOPERS WANTED</h1>
            <p style={styles.subtitle}>
              Global Network. Real Opportunities.
            </p>

            <a href="#join" style={styles.button}>
              Join the Network
            </a>

            <p style={styles.micro}>
              Not a job board. A curated global build network.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Filter the Network</h2>

          <div style={styles.filters}>
            {["All", "Developers", "Designers", "QA", "Production", "BDE", "Students"].map((f) => (
              <button key={f} style={styles.filterButton}>{f}</button>
            ))}
          </div>

          <div style={styles.filters}>
            {["North America", "Europe", "Asia", "South America", "Africa", "Australia"].map((r) => (
              <button key={r} style={styles.filterButton}>{r}</button>
            ))}
          </div>
        </section>

        <section style={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={styles.card}>
              <div style={styles.avatar}></div>
              <h3 style={styles.cardName}>Name Here</h3>
              <p style={styles.cardText}>Location: City, Country</p>
              <p style={styles.cardText}>Role: Developer</p>
            </div>
          ))}
        </section>

        <section id="join" style={styles.section}>
          <h2 style={styles.heading}>Join the Network</h2>
          <p style={styles.joinText}>
            Developers, students, and industry professionals can apply to be part
            of the Aspire network.
          </p>

          <div style={styles.ctaRow}>
            <a href="#" style={styles.button}>Developer</a>
            <a href="#" style={styles.button}>Student</a>
            <a href="#" style={styles.button}>BDE</a>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    background: "#ff2aa3",
    minHeight: "100vh",
    color: "#000",
    fontFamily: "Arial, sans-serif"
  },
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px 80px"
  },
  logoRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  },
  logo: {
    width: "90px",
    height: "auto"
  },
  hero: {
    position: "relative",
    marginBottom: "60px"
  },
  heroImage: {
    width: "100%",
    borderRadius: "24px",
    display: "block"
  },
  heroOverlay: {
    position: "absolute",
    top: "18%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "90%"
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 4.2rem)",
    fontWeight: 900,
    marginBottom: "10px",
    color: "#000"
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "18px",
    color: "#000",
    fontWeight: 600
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "12px 24px",
    background: "#000",
    color: "#ff2aa3",
    fontWeight: "bold",
    borderRadius: "999px",
    textDecoration: "none"
  },
  micro: {
    marginTop: "12px",
    fontSize: "0.95rem",
    color: "#000",
    fontWeight: 600
  },
  section: {
    marginBottom: "60px"
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#000"
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "18px"
  },
  filterButton: {
    padding: "10px 16px",
    background: "#000",
    color: "#fff",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "60px"
  },
  card: {
    background: "#000",
    color: "#fff",
    padding: "22px",
    borderRadius: "18px"
  },
  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "#fff",
    marginBottom: "14px"
  },
  cardName: {
    margin: "0 0 10px"
  },
  cardText: {
    margin: "4px 0",
    opacity: 0.9
  },
  joinText: {
    fontSize: "1rem",
    marginBottom: "18px",
    color: "#000",
    fontWeight: 600
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px"
  }
};
