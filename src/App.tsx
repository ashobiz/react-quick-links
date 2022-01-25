import React from 'react';
import Main from './Main';
import { FaBars, FaAmazon } from 'react-icons/fa';
import MenuItem from './MenuItem';

const App: React.FC = () => {
  // Options for menu
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
        <MenuItem
          linkText={'Hello'}
          linkIcon={<FaAmazon />}
          linkHref={'/hello'}
        />
        <MenuItem
          linkText={'Hello'}
          linkIcon={<FaAmazon />}
          linkHref={'/hello'}
        />
        <MenuItem
          linkText={'Hello'}
          linkIcon={<FaAmazon />}
          linkHref={'/hello'}
        />
        <MenuItem
          linkText={'Hello'}
          linkIcon={<FaAmazon />}
          linkHref={'/hello'}
        />
      </Main>
    </>
  );
};

export default App;
