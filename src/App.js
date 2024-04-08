import "./App.css";
import ImageSection from "./components/ImageSection/ImageSection";
import Options from "./components/options/Options";

function App() {
  // const [earAcc, setEarAcc] = useState([]);

  return (
    <div className="App">
      <h1 className="heading">Avatar Generator</h1>
      <ImageSection />
    </div>
  );
}

export default App;
