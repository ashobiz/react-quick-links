import React from 'react';
import Main from './Main';
import { FaBars } from 'react-icons/fa';

function App() {
  const options = {
    button: {
      buttonName: <FaBars />,
      backgroundColor: '#ff0000',
      textColor: 'white',
      rounded: true,
    },
  };

  return (
    <>
      {/* buttonName can be either String or React component (in case of icons) */}
      <Main options={options}>
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
          <li>Test 4</li>
          <li>Test 5</li>
          <li>Test 6</li>
          <li>Test 7</li>
        </ul>
      </Main>
    </>
  );
}

export default App;
