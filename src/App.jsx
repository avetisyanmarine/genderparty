import { useEffect } from "react";
import { FirstPage } from "./components/first-page";
import { ForthPage } from "./components/forth-page";
import { LastFooterPage } from "./components/last-footer-page";
import { SecondPage } from "./components/second-page";
import { ThirdPage } from "./components/third-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackToTop } from "./components/top-button";
import AttendanceGuests from "./components/AttendanceGuests";
import { MusicPage } from "./components/music-page";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <FirstPage />
      <SecondPage />
      <ForthPage />
      <AttendanceGuests />
      <LastFooterPage />
      <MusicPage />
      {/* <BackToTop /> */}
    </>
  );
}

export default App;
