import ParticleComponent from '../../components/particles/particles';
import MainTitle from '../../components/main-title/main-title';

import './home.css';
import GitHubCard from '../../components/github-card/github-card';

const Home = () => {
  return (
    <>
      <div className='particle-container'>
        <div className='main-title-container'>
        <MainTitle />
        </div>
        <p className='comment'>// Here you can find everything about me.</p>
        <span className="material-symbols-outlined arrow-down">
        expand_more
        </span>
      <ParticleComponent />
      < GitHubCard />
      <div className='main-background after-title'>
      {/* <h1>&lt;/&gt;</h1> */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      </div>
    </>
  );
}

export default Home;
