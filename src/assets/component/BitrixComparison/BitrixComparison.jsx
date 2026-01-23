import React from 'react';
import './BitrixComparison.css';

const BitrixComparison = () => {
  return (
    <section className="bitrix-wrapper">
      <div className="comparison-grid">
        
        {/* BEFORE SIDE */}
        <div className="comp-card before-card">
         
          <h2>The "Old" Way</h2>
          <ul className="comp-list">
            <li>
              <span className="check-box">✕</span>
              <span><strong>Tab Fatigue:</strong> Switching between 5+ apps just to manage one client.</span>
            </li>
            <li>
              <span className="check-box">✕</span>
              <span><strong>Data Silos:</strong> Store, CRM, and Projects don't talk to each other.</span>
            </li>
            <li>
              <span className="check-box">✕</span>
              <span><strong>Subscription Hell:</strong> Paying per user/per month for multiple tools.</span>
            </li>
          </ul>
         
        </div>

        {/* AFTER SIDE (BITRIX24) */}
        <div className="comp-card after-card">
         
          <h2>The Bitrix24 Way</h2>
          <ul className="comp-list">
            <li>
              <span className="check-box">✓</span>
              <span><strong>Unified Flow:</strong> Store orders automatically sync to CRM & Project tasks.</span>
            </li>
            <li>
              <span className="check-box">✓</span>
              <span><strong>All-In-One:</strong> Collaboration, E-commerce, and Support in one dashboard.</span>
            </li>
            <li>
              <span className="check-box">✓</span>
              <span><strong>Scalable Growth:</strong> One Flat Fee for your entire team. No hidden costs.</span>
            </li>
          </ul>
          <div className="badge-flat-fee">
            Integrated Ecosystem • Flat Fee
          </div>
           <p className='description-lead'>No lead will ever get lost again once you switch to Bitrix24 CRM</p>
        </div>

      </div>
    </section>
  );
};

export default BitrixComparison;