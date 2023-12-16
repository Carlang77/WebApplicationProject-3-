import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark'>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center" style={{ marginLeft: '20px' }}>
              <a className="navbar-brand" href="https://moodle.eek.ee">
                {/* Adding school's logo from the web */}
                <img src="https://eek.ee/imgs/EEK-eng.svg" alt="Logo" style={{ width: '400px', height: 'auto', marginRight: '20px' }} />
              </a>
            </div>
            <div className="text-white" style={{ marginRight: '20px' }}>
              <h2>Web Application Project<br></br>Student Registration System <br></br> 2023/24 SE-016 (Nikita Ojamäe)</h2>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
