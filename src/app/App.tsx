import Nav from "../components/Nav/Nav"; 
import Tab from "../components/Tab/Tab"

function App() {
  return (
    <div>
      <Nav>
        <Tab title="Immersive">Immersive</Tab>
        <Tab title="Compare">Compare</Tab>
        <Tab title="Simple">Simple</Tab>
        <Tab title="Favorite">Favorite</Tab>
        <Tab title="Video">
          <iframe title="yt-iframe" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
          </iframe>
        </Tab>
      </Nav>
    </div>
  );
}

export default App;
