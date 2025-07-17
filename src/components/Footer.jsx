import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} Wojciech Galant ·{' '}
        <a href="https://github.com/WojciechGalant1" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
};
