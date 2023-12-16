import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark'>
          <a className="navbar-brand" href="https://moodle.eek.ee">
            {/* Adding schoo's logo from the web */}
            <img src="https://eek.ee/imgs/EEK-eng.svg" alt="Logo" style={{ width: '400px', height: 'auto', marginRight: '40px' }} />
            Web applications (Nikita Ojamäe) Student Registration System | 2023/24 SE-016
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
