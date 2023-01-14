import styles from "./style";
import { Billing, Business, CardDeals, Clients, TryIt, Footer, Navigation, Stats, Testimonials, Intro } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navigation />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Intro />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeals />
        <Testimonials />
        <Clients />
        <TryIt />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;