import React, { useState } from 'react';
import styles from './app.module.scss';

function App() {
  const [displayLinks, setDisplayLinks] = useState<boolean>(false);

  const handleMenuClick = (): void => {
    setDisplayLinks(!displayLinks);
  };

  return (
    <div className={styles.app}>
      <div className={styles.app_inner}>
        {displayLinks && (
          <div className={styles.links_child}>
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
        <div className={styles.menu} onClick={handleMenuClick}>
          MENU
        </div>
      </div>
    </div>
  );
}

export default App;
