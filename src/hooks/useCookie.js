import { useState } from 'react';

const setCookie = (name, value, options) => {
  const expires = new Date(Date.now() + options.days * 864e5).toUTCString();
  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; path=' +
    options.path;
};

const getCookie = name => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
};

export default (key, initialValue) => {
  const [item, setItem] = useState(() => {
    const value = getCookie(key);
    return value ? JSON.parse(value) : initialValue;
  });

  const updateItem = (value, options = { days: 7, path: '/' }) => {
    setItem(value);
    setCookie(key, JSON.stringify(value), options);
  };

  return [item, updateItem];
};
