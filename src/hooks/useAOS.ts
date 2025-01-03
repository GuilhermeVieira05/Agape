import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from "aos";


const useAOS = () =>{
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração da animação em milissegundos
          once: false, 
          offset: 100, // Distância do topo da tela para ativar a animação (em pixels)
          delay: 200,// Se a animação deve acontecer apenas uma vez
        });
      }, []);
}

export default useAOS;