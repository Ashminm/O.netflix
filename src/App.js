
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import request from './requests';
import Request from './requests';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">

          <Nav/>
          <Banner fetchUrl={request.fetchNetflixOriginals} />    
          <Row title='Netflix Originals' fetchUrl={Request.fetchNetflixOriginals} />
          <Row title='Trending Now' fetchUrl={Request.fetchTrending} />
          <Row title='Top Rated' fetchUrl={Request.fetchTopRated} />
          <Row title='Action Movies' fetchUrl={Request.fetchActionMovie} />
          <Row title='Comedy Movie' fetchUrl={Request.fetchComedyMovie} />
          <Row title='HorrorMovie' fetchUrl={Request.fetchHorrorMovie} />
          <Row title='Romance Movie' fetchUrl={Request.fetchRomanceMovie} />
          <Row title='Documentory' fetchUrl={Request.fetchDocumentaryMovie} />
          

    </div>
  );
}

export default App;
