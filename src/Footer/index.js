import React from 'react';

export default function Navbar() {
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
            <div className="col-6 col-lg-2 mb-3">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://app.termly.io/document/terms-of-use-for-saas/41431ed0-b5e0-40ae-86b1-7d3574dbc7a9'}>Terms & Conditions</a>
                </li>
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://app.termly.io/document/privacy-policy/5f00313b-9c18-49c4-84c1-13efea1cadd9'}>Privacy Policy</a>
                </li>
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://app.termly.io/document/cookie-policy/1b28274a-65b0-4fb4-89f1-60230f31a6d3'}>Cookie Policy</a>
                </li>
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://app.termly.io/document/disclaimer/00405874-383c-4ee6-a389-8ee50c0ae507'}>Disclaimer</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}
