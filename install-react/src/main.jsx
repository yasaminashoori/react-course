import ReactDOM from "react-dom/client";
import './App.css';


function App() {
    return (
      <div className="landing-page">
        <div className="logo">
          <img src="src\logo-hafez.svg" alt="Logo" />
        </div>
        <div className="content">
          {}
        </div>
      </div>
    );
  }

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App />);

