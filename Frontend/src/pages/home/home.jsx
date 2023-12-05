import ParticleComponent from '../../components/cat/cat';
import MainTitle from '../../components/main-title/main-title';
import './home.css';

const Home = () => {
  return (
    <>
      <div className='particle-container'>
        <div className='main-title-container'>
        <MainTitle />
        </div>
        <p className='comment'>// Here you can find everything about me.</p>
        <span class="material-symbols-outlined arrow-down">
        expand_more
        </span>
      < ParticleComponent />
      </div>
    </>
  );
}

export default Home;
