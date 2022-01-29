import React, { useState } from 'react';
import { CLOSE, HUNDRED_PERCENT, MENU, ZERO_PERCENT } from './constants';
import styles from './main.module.scss';

type PROPS = {
  options: {
    button: {
      buttonName?: string | React.ReactNode;
      buttonClose?: string | React.ReactNode;
      backgroundColor?: string;
      textColor?: string;
      rounded?: boolean;
    };
    menuItems: {
      style: string;
    };
  };
  children?: React.ReactNode;
};

const Main: React.FC<PROPS> = ({ options, children }) => {
  const { button, menuItems } = options;

  const [displayLinks, setDisplayLinks] = useState<boolean>(false);

  const handleMenuClick = (): void => {
    setDisplayLinks(!displayLinks);
  };
  return (
    <div className={styles.app}>
      <div className={styles.app_inner}>
        <div
          className={`${styles.links_child} ${
            displayLinks ? styles.view_menu : styles.hide_menu
          }`}
        >
          <ul className={styles[menuItems.style]}>{children}</ul>
        </div>
        <div
          className={styles.menu}
          style={{
            background: button.backgroundColor,
            color: button.textColor,
            borderRadius: button.rounded ? HUNDRED_PERCENT : ZERO_PERCENT,
          }}
          onClick={handleMenuClick}
        >
          {!displayLinks
            ? button.buttonName
              ? button.buttonName
              : MENU
            : button.buttonClose
            ? button.buttonClose
            : CLOSE}
        </div>
      </div>
    </div>
  );
};

export default Main;
