import './App.css';
import Form from './component/Form'

function App() {

  return (
    <div className="App">
      <div className="video-bg">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jLOfsMw6J90?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=jLOfsMw6J90" frameBorder="0" allowFullScreen></iframe>
      </div>
      <Form />
    </div>
  );
}

export default App;
