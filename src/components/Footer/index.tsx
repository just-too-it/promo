import React from 'react';

import { Menu } from 'components/Menu';
import { menuItems } from 'components/Menu/data';

export const Footer = () => {
  return (
    <footer>
      <Menu menu={menuItems} />
    </footer>
  );
};
