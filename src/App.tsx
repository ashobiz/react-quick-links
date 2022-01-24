import React, { useState } from 'react';

function App() {
  const [displayLinks, setDisplayLinks] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setDisplayLinks(!displayLinks);
  };

  return (
    <div className="App">
      {displayLinks && (
        <div className="links-child">
          <ul>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
          </ul>
        </div>
      )}
      <div className="button" onClick={handleButtonClick}>
        LINKS
      </div>
    </div>
  );
}

export default App;
