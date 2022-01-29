import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={linkHref}>
        {linkIcon && <span style={{ color: linkIconColor }}>{linkIcon}</span>}
        <em>{linkText}</em>
      </Link>
    </li>
  );
};

export default MenuItem;
