import { useEffect } from 'react';

const Oneko = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "src/features/oneko/oneko.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Oneko;