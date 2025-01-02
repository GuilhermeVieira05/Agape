import { useState, useEffect } from 'react';

const useScrolledColor = () => {
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

        if(scrollTop == 0){
            setColor('transparent')
            return;
        }

      const windowHeight = window.innerHeight;

      // Calcula a proporção de rolagem (0 = topo, 1 = fundo)
      const scrollFraction = Math.min(scrollTop / windowHeight, 1);

      // Transição de cor entre azul claro e branco
      const blueColor = 135 + (255 - 135) * scrollFraction; // Transição de 87CEFA para branco
      const color = `rgb(${blueColor}, ${206 + (255 - 206) * scrollFraction}, ${250 + (255 - 250) * scrollFraction})`;

      setColor(color);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return color;
};

export default useScrolledColor;