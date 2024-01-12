// Components
import MainTitle from '../../components/main-title/main-title';
import GitHubCard from '../../components/github-card/github-card';
import OcupationCard from '../../components/ocupation-card/ocupation-card';


// Assets
import videoBackground from '../../assets/home.mp4';

// Styles
import './home.css';

// This is the homepage
const Home = () => {
  return (
    <>
      <video className='video-background' autoPlay loop muted>
        <source src={videoBackground} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='main-title-container'>
        <MainTitle />
      </div>
      <p className='comment'>// Here you can find everything about me!</p>
      <span className="material-symbols-outlined arrow-down">
        expand_more
      </span>
      {/* This class help to omit the white background */}
      <div className='home-background'>
      <GitHubCard />
      </div>
      <div className='main-background after-title'>
        <OcupationCard />
      {/* <h1>&lt;/&gt;</h1> */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </>
  );
}

export default Home;
