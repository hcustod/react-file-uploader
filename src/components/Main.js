import React from 'react';
import './Main.css';

function Main() {
  return (
    <div className="main" style={{transform: [{rotate: '18s0deg'}]}}>

      <h2>Welcome to my website</h2>
      <br />
      <p>This is the main content area of my website.</p>
      <br />
      <form>
        <label>
            <input name='name' />
        </label>
      </form>
    </div>
  );
}

export default Main;
