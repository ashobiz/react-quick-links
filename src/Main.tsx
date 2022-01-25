import React, { useState } from 'react';
import styles from './main.module.scss';

type PROPS = {
  options: {
    button: {
      buttonName: string | React.ReactNode;
      backgroundColor?: string;
      textColor?: string;
      rounded?: boolean;
    };
  };
  children?: React.ReactNode;
};

const Main: React.FC<PROPS> = ({ options, children }) => {
  const { button } = options;

  const [displayLinks, setDisplayLinks] = useState<boolean>(false);

  const handleMenuClick = (): void => {
    setDisplayLinks(!displayLinks);
  };
  return (
    <div className={styles.app}>
      <div className={styles.app_inner}>
        {displayLinks && <div className={styles.links_child}>{children}</div>}
        <div
          className={styles.menu}
          style={{
            background: button.backgroundColor,
            color: button.textColor,
            borderRadius: button.rounded ? '100%' : '0%',
          }}
          onClick={handleMenuClick}
        >
          {button.buttonName}
        </div>
      </div>
    </div>
  );
};

export default Main;
