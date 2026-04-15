export default function Home() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>

        {/* HERO */}
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
              Not a job board. A global build network.
            </p>
          </div>
        </section>

        {/* FILTER */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Filter the Network</h2>

          <div style={styles.filters}>
            {["All", "Developers", "Designers", "QA", "Production", "BDE", "Students"].map(f => (
              <button key={f} style={styles.filterButton}>{f}</button>
            ))}
          </div>

          <div style={styles.filters}>
            {["North America", "Europe", "Asia", "South America", "Africa", "Australia"].map(r => (
              <button key={r} style={styles.filterButton}>{r}</button>
            ))}
          </div>
        </section>

        {/* GRID */}
        <section style={styles.grid}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={styles.card}>
              <div style={styles.avatar}></div>
              <h3>Name Here</h3>
              <p>Location: City, Country</p>
              <p>Role: Developer</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section id="join" style={styles.section}>
          <h2 style={styles.heading}>Join the Network</h2>
          <div style={styles.ctaRow}>
            <a style={styles.button}>Developer</a>
            <a style={styles.button}>Student</a>
            <a style={styles.button}>BDE</a>
          </div>
        </section>

      </main>
    </div>
  );
}

const styles = {
  page: {
    background: "#ff2aa3", // HOT PINK 🔥
    minHeight: "100vh",
    color: "#000",
    fontFamily: "Arial"
  },
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px"
  },
  hero: {
    position: "relative",
    marginBottom: "60px"
  },
  heroImage: {
    width: "100%",
    borderRadius: "20px"
  },
  heroOverlay: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "#000"
  },
  title: {
    fontSize: "3rem",
    fontWeight: 800
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "1.2rem"
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 24px",
    background: "#000",
    color: "#ff2aa3",
    fontWeight: "bold",
    borderRadius: "999px",
    textDecoration: "none"
  },
  micro: {
    marginTop: "10px",
    opacity: 0.8
  },
  section: {
    marginBottom: "60px"
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px"
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px"
  },
  filterButton: {
    padding: "8px 14px",
    background: "#000",
    color: "#fff",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px"
  },
  card: {
    background: "#000",
    color: "#fff",
    padding: "20px",
    borderRadius: "16px"
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#fff",
    marginBottom: "10px"
  },
  ctaRow: {
    display: "flex",
    gap: "12px"
  }
};
