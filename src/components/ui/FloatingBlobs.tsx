import React from 'react';

export const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Primary Blob */}
      <div 
        className="floating-blob w-64 h-64 top-1/4 left-1/4"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Secondary Blob */}
      <div 
        className="floating-blob w-48 h-48 top-3/4 right-1/4"
        style={{ animationDelay: '5s' }}
      />
      
      {/* Tertiary Blob */}
      <div 
        className="floating-blob w-32 h-32 top-1/2 right-1/3"
        style={{ animationDelay: '10s' }}
      />
      
      {/* Small accent blobs */}
      <div 
        className="floating-blob w-24 h-24 top-1/6 right-1/6"
        style={{ animationDelay: '15s' }}
      />
      
      <div 
        className="floating-blob w-20 h-20 bottom-1/4 left-1/6"
        style={{ animationDelay: '20s' }}
      />
    </div>
  );
};