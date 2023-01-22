import React from 'react';
import './Main.css';

function Main() {
  return (
    <div className="Main">

      <h2>Upload some bullshit to the cloud today!</h2>
      <p>choose which file to upload below</p>
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
