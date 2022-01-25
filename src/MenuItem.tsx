import React from 'react';

type PROPS = {
  linkText: string;
  linkIcon: React.ReactNode;
  linkHref: string;
};

const MenuItem: React.FC<PROPS> = ({ linkText, linkIcon, linkHref }) => {
  return (
    <li>
      <a href={linkHref}>
        <span>{linkIcon}</span>
        {linkText}
      </a>
    </li>
  );
};

export default MenuItem;
