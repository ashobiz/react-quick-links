import React from 'react';
import Main from './Main';
import { FaBars, FaAmazon, FaApple, FaTimes } from 'react-icons/fa';
import MenuItem from './MenuItem';

const App: React.FC = () => {
  // Options for menu
  const options = {
    button: {
      buttonName: <FaBars />, // Icon or string
      buttonClose: <FaTimes />, // Icon or string
      backgroundColor: '#ff0000',
      textColor: 'white',
      rounded: true, // boolean
    },
    menuItems: {
      style: 'block', // pills, block, icon
    },
  };

  return (
    <>
      <Main options={options}>
        <MenuItem
          linkText={'Hello downlaod'} // Display text
          linkHref={'/hello'} // Link href
          linkIcon={<FaAmazon />} // Icon, if needed
          linkIconColor="pink" // Icon color
        />
        <MenuItem
          linkText={'Hello'}
          linkHref={'/hello'}
          linkIcon={<FaApple />}
          linkIconColor={'red'}
        />
        <MenuItem
          linkText={'Hello'}
          linkHref={'/hello'}
          linkIcon={<FaAmazon />}
          linkIconColor={'blue'}
        />
        <MenuItem
          linkText={'Hello'}
          linkHref={'/hello'}
          linkIcon={<FaAmazon />}
          linkIconColor={'orange'}
        />
      </Main>
    </>
  );
};

export default App;
