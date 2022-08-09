import "./App.css";
import { Home } from "./screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="weather-app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />

          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                }}
              >
                <p>There's nothing here!</p>
              </main>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
