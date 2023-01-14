import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const appleStore = `https://www.apple.com/app-store/`
const googlePlay = `https://play.google.com/store/apps`

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At SecureFi, we understand that managing billing and invoicing can be a time-consuming and tedious task for businesses. 
        That's why we offer a range of services to streamline the process and help you focus on growing your business. 
        Our platform allows you to easily create and send professional invoices, track payments, and access real-time reporting on your billing activity.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" onClick={() => window.open(appleStore, '_blank')}/>
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" onClick={() => window.open(googlePlay, '_blank')}/>
      </div>
    </div>
  </section>
);

export default Billing;