import React from 'react';
import CursorTrailCanvas from './cursor-trail-canvas';
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className='' style={{ position: 'relative',zIndex: 1  }}>
      <CursorTrailCanvas color="yellow" className="cursor-trail" style={{ position: 'absolute', top: 0, left: 0 }} />
      {children}
    </div>
  );
};

export default Layout;
