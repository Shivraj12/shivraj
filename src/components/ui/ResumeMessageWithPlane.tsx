import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import airplaneAnimation from '@/assets/Airplane.json';

interface ResumeMessageWithPlaneProps {
  visible: boolean;
  onHide: () => void;
}

export const ResumeMessageWithPlane: React.FC<ResumeMessageWithPlaneProps> = ({ visible, onHide }) => {
  const [exiting, setExiting] = useState(false);
  const exitTimeout = useRef<NodeJS.Timeout | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!visible) return;
    setExiting(false);
    // After 5s, trigger exit
    exitTimeout.current = setTimeout(() => {
      setExiting(true);
      // After exit animation (1s), hide
      hideTimeout.current = setTimeout(() => {
        onHide();
      }, 1000);
    }, 5000);
    return () => {
      if (exitTimeout.current) clearTimeout(exitTimeout.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [visible, onHide]);

  if (!visible) return null;

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[100] flex flex-col items-center pointer-events-none">
      <div className="plane-message bg-white/90 text-black px-6 py-3 rounded-lg shadow-lg mb-2 text-lg font-semibold border border-primary">
        ✉️ Let's connect!
      </div>
      <div className={`airplane-animation w-40 h-40${exiting ? ' airplane-exit' : ''}`}>
        <Lottie 
          animationData={airplaneAnimation} 
          loop={!exiting} 
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}; 