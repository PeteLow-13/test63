import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as ImIcons from 'react-icons/im';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Destinations',
    path: '/destinations',
    icon: <SiIcons.SiOpenstreetmap />,
    cName: 'nav-text',
  },
  {
    title: 'About us',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <ImIcons.ImMail2 />,
    cName: 'nav-text',
  },
  {
    title: 'Kingston',
    path: '/kingston',
    icon: <SiIcons.SiOpenstreetmap />,
    cName: 'nav-text',
  },
  {
    title: 'Port Gamble',
    path: '/portgamble',
    icon: <SiIcons.SiOpenstreetmap />,
    cName: 'nav-text',
  },
  {
    title: 'Point No Point',
    path: '/pointnopoint',
    icon: <SiIcons.SiOpenstreetmap />,
    cName: 'nav-text',
  },
  {
    title: 'Poulsbo',
    path: '/poulsbo',
    icon: <SiIcons.SiOpenstreetmap />,
    cName: 'nav-text',
  },
];
