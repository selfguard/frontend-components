import React from 'react';

export default function Navbar() {
    let apiURL = "https://selfguard.xyz/api";
    let docsURL = 'https://docs.selfguard.xyz';
    let fileURL = 'https://demo-filestorage.selfguard.xyz';
    let notificationsURL = 'https://getnotified.xyz/';
    return (
      <footer className="bd-footer py-4 mt-2 bg-light">
        <div className="container py-4 px-4 mt-2 px-md-3">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a href="https://selfguard.xyz" className="navbar-brand vertical">
                <img src="/logo.png" width="30" height="30" className="d-inline-block" alt=""/>
                 <h5 className="d-inline-block" style={{margin:0,marginLeft:'5px',color:'black'}}><b>SelfGuard</b></h5>
              </a>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">Universal Encryption Modules & APIs</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-1"><a href={"https://selfguard.xyz/home"} style={{color:'black',textDecoration:'none'}}>Home</a></li>
                <li className="mb-1"><a style={{color:'black',textDecoration:'none'}} href={notificationsURL}>Notifications</a></li>
                <li className="mb-1"><a style={{color:'black',textDecoration:'none'}} href={fileURL}>File Storage</a></li>
                <li className="mb-1"><a style={{color:'black',textDecoration:'none'}} href={docsURL}>Docs</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://discord.gg/vKbqDwV9PQ'}>Discord</a>
                </li>
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://twitter.com/selfguard_xyz'}>Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}
