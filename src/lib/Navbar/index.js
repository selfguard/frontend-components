import React from 'react';

export default function Navbar({Children}) {
    let apiURL = "https://selfguard.xyz/api";
    let securedocURL = "https://demo-filestorage.selfguard.xyz";
    let custodyURL = "https://demo-custody.selfguard.xyz";
    let paymentURL = 'https://demo-payments.selfguard.xyz';
    let notificationsURL = 'https://demo-notifications.selfguard.xyz';

    return (
      <nav className="navbar sticky-top navbar-dark navbar-expand-lg bg-dark" style={{marginBottom:'20px',borderBottom:'1px solid grey'}}>
        <div className="container-fluid">
          <a href="https://selfguard.xyz/home" className="navbar-brand mb-0 h1 vertical">
          <img src="/logo3.png" width="30" height="30" className="d-inline-block" alt=""/>
           <p className="d-inline-block" style={{margin:0,marginLeft:'5px'}}>SelfGuard</p>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <a className={`nav-link ${'/api' === window.location.pathname && 'active'}`} href={apiURL}>API</a>
             </li>
             <li className="nav-item dropdown" style={{minWidth:'280px'}}>
               <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Demos
               </div>
               <ul className="dropdown-menu">
                 <li><a className="dropdown-item vertical4" href={paymentURL}>
                 <i className="bi bi-credit-card" style={{marginRight:'10px'}}></i>
                 Payments (web2/3)
                 </a></li>
                 <li><a className="dropdown-item vertical4" href={securedocURL}>
                 <i className="bi bi-file-lock" style={{marginRight:'10px'}}></i>
                 File Storage (web2/3)</a></li>
                 <li><hr className="dropdown-divider"/></li>
                 <li><a className="dropdown-item vertical4" href={custodyURL}>
                 <i className="bi bi-key" style={{marginRight:'10px'}}></i>
                 Custody (web3)</a></li>
                 <li><a className="dropdown-item vertical4" href={notificationsURL}>
                 <i className="bi bi-app-indicator" style={{marginRight:'10px'}}></i>
                 Notifications (web3)</a></li>
               </ul>
             </li>
           </ul>

            <ul className="navbar-nav">
              <li className="nav-item vertical" style={{marginRight:'10px'}}>
                <a className='nav-link' href="mailto:arjun@selfguard.xyz">Contact</a>
              </li>
              {Children && <Children/> }
            </ul>
          </div>
        </div>
      </nav>
    );
}
