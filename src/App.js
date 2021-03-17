import styled from 'styled-components'
import Header from './components/Header'
import SocialMedia from './components/SocialMedia'
import './App.css'
import About from './components/About';
// import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function App() {
  return (
    <AppContainer>
      <SocialMedia/>
      <Header/>
      {/* <Welcome/> */}
      <About/>
      <Projects/>
      <Technologies/>
      <Footer/>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`

`
