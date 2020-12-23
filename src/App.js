import "./App.css";
import Data from "./database/data.json";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skill from "./components/Skill";
import SaveFile from "./components/SaveFile";
import PlayerMusic from "./components/Player_Music";
import Footer from "./components/Footer";

function App() {
  const social_link = Data.data.SocialLink;
  const user = Data.data.Information;
  return (
    <div>
      <Header
        facebook={social_link.facebook}
        instagram={social_link.instagram}
        github={social_link.github}
        tel={social_link.tel}
      ></Header>
      <AboutMe
        fname={user.fullname}
        phone={user.phone}
        email={user.email}
        website={user.website}
        address={user.address}
      ></AboutMe>
      <Resume></Resume>
      <Services></Services>
      <Skill></Skill>
      <SaveFile></SaveFile>
      <PlayerMusic></PlayerMusic>
      <Footer></Footer>
    </div>
  );
}

export default App;
