import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const getMode = () => {
    return localStorage.getItem("mode")
  }

  const [darkMode, setdarkMode] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", darkMode);
  }, [darkMode])

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <h2>Hello world</h2>
      <div>
        <label class="switch">
          <input
            onChange={() => setdarkMode(!darkMode)}
            checked={darkMode}
            type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        <h2>{darkMode ? "Dark Mode is On" : "Dark Mode is Off"} </h2>
        <h4 className="myDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sed laborum ipsam
          doloribus magnam saepe aperiam inventore consequuntur, delectus possimus voluptate,
          quaerat beatae cupiditate libero deleniti nesciunt eaque ut necessitatibus? </h4>
      </div>
    </div>
  );
}

export default App;
