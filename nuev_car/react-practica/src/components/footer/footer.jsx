import React from 'react';
import '/footer.css';


const footer = () => {
  const currentsYear = new Date().getFullYear();

  return (
        <footer className='footer'>
            <p>© {currentsYear} Sena. All rights reserved</p>
        </footer>
  );
};

export default footer;