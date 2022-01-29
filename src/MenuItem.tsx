import React from 'react';

type PROPS = {
  linkText: string;
  linkIcon?: React.ReactNode;
  linkIconColor?: string;
  linkHref: string;
};

const MenuItem: React.FC<PROPS> = ({
  linkText,
  linkIcon,
  linkIconColor,
  linkHref,
}) => {
  return (
    <li>
      <a href={linkHref}>
        {linkIcon && <span style={{ color: linkIconColor }}>{linkIcon}</span>}
        <em>{linkText}</em>
      </a>
    </li>
  );
};

export default MenuItem;
