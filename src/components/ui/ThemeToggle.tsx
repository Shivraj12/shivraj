import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (!theme && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="glass-button w-12 h-12 rounded-full"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-5 w-5 transition-transform hover:rotate-180" />
        ) : (
          <Moon className="h-5 w-5 transition-transform hover:-rotate-12" />
        )}
      </Button>
    </div>
  );
};