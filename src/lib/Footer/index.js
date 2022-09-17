import React from 'react';

export default function Navbar() {
    let apiURL = "https://selfguard.xyz/api";
    let securedocURL = "https://demo-filestorage.selfguard.xyz";
    let custodyURL = "https://demo-custody.selfguard.xyz";
    let paymentURL = 'https://demo-payments.selfguard.xyz';

    return (
      <footer className="bd-footer py-4 mt-5 bg-light">
        <div className="container py-4 px-4 px-md-3">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a href="https://selfguard.xyz" className="navbar-brand vertical">
                <img src="/logo.png" width="30" height="30" className="d-inline-block" alt=""/>
                 <h5 className="d-inline-block" style={{margin:0,marginLeft:'5px',color:'black'}}><b>SelfGuard</b></h5>
              </a>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">Universal API for Encryption and Tokenization</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-1"><a href="https://selfguard.xyz/home" style={{color:'black',textDecoration:'none'}}>Home</a></li>
                <li className="mb-1"><a style={{color:'black',textDecoration:'none'}} href={apiURL}>API</a></li>
                <li className="mb-1"><a style={{color:'black',textDecoration:'none'}} href={paymentURL}>Payments</a></li>
                <li className="mb-1"><a style={{color:'black',textDecoration:'none'}} href={custodyURL}>Custody</a></li>
                <li className="mb-1"><a style={{color:'black',textDecoration:'none'}} href={securedocURL}>File Storage</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://discord.gg/vKbqDwV9PQ'}>Discord</a>
                </li>
                <li className="mb-1">
                  <a style={{color:'black',textDecoration:'none'}} href={'https://twitter.com/selfguardxyz'}>Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}