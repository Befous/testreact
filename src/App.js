import React from 'react';
import LoginUser from "./postLoginUser.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>
          <label>Username:<input id='username' type="text"/></label>
          <br />
          <label>Password:<input id='password' type="password"/></label><br /><button type="submit" onClick={LoginUser}>Login</button>
        </div>

        {/* Additional text or links can be added here */}
      </header>
    </div>
  );
}

export default App;
