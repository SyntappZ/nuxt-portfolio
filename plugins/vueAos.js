import AOS from "aos";
import "aos/dist/aos.css";
export default ({ app }) => {
  app.AOS = new AOS.init({ disable: 'mobile', duration: 1200, easing: "ease" });
};
