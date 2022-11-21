import React from 'react';

export default function Navbar({Children}) {
    let homeURL = "https://selfguard.xyz/home";
    let securedocURL = "https://filepeer.xyz";
    let docsURL = 'https://docs.selfguard.xyz';
    let notificationsURL = 'https://getnotified.xyz';

    return (
      <nav className="navbar sticky-top navbar-dark navbar-expand-lg bg-dark" style={{marginBottom:'20px',borderBottom:'1px solid grey'}}>
        <div className="container-fluid">
          <a href="https://selfguard.xyz/" className="navbar-brand mb-0 h1 vertical">
          <img src="/logo3.png" width="30" height="30" className="d-inline-block" alt=""/>
           <p className="d-inline-block" style={{margin:0,marginLeft:'5px'}}>SelfGuard</p>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <a className={`nav-link`} href={homeURL}>Home</a>
             </li>
             <li className="nav-item">
               <a className={`nav-link`} href={notificationsURL}> Get Notified</a>
             </li>
             <li className="nav-item">
               <a className={`nav-link`} href={securedocURL}> File Peer</a>
             </li>
             <li className="nav-item">
               <a className={`nav-link`} href={docsURL}>Docs</a>
             </li>
           </ul>

            <ul className="navbar-nav">
              <li className="nav-item vertical" style={{marginRight:'10px'}}>
                <a className='nav-link' href="mailto:arjun@selfguard.xyz">Contact</a>
              </li>
              {Children && <Children/>}
            </ul>
          </div>
        </div>
      </nav>
    );
}
