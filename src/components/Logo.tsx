import React, { useState } from 'react';

const LOGO_URL = '/icons/logo.png';
const FALLBACK_LOGO_URL = 'https://i.ibb.co/ZzDyvmt0/1769711064-removebg-preview.png';

export default function Logo() {
  const [src, setSrc] = useState(LOGO_URL);
  
  return (
    <img 
      src={src} 
      alt="logo" 
      onError={() => setSrc(FALLBACK_LOGO_URL)}
      referrerPolicy="no-referrer"
    />
  );
}
