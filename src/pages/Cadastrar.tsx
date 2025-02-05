import Navbar from "../components/Navbar/NavbarPrincipal";
import styles from "../assets/styles/CadastrarObra.module.scss"
import CardCadastro from "../components/Cards/CardCadastro";
import { useState } from "react";
import ModalConfirm from "../components/Modal/ModalConfirm";
import logo1 from '../assets/imgs/logo1NoBg.png'
import logo2 from "../assets/imgs/logo2NoBg.png"
import useDocumentTitle from "../hooks/useDocumentTitle";
import redirecionar from "../utils/redirecionar";

export default function Cadastrar(){

    useDocumentTitle('Cadastro')

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <Navbar/>
            <div className={styles.main}>
                <div onClick={() => redirecionar('/cadastro/servo')} className={styles.cardServo}>
                    <CardCadastro
                    title="Sou Servo"
                    text="Cadastre-se como um servo de uma Obra"
                    img="https://musicaeadoracao.com.br/wp-content/uploads/2018/12/adorador.jpg"
                    />
                </div>

                <div onClick={() => redirecionar('/cadastro/obra')} className={styles.cardObra}>
                    <CardCadastro
                        title="Sou Obra Jovem"
                        text="Cadastre-se como uma Obra"
                        img="https://static.vecteezy.com/ti/fotos-gratis/t2/46744770-grupo-do-multidao-do-cristaos-levantar-seus-maos-dentro-a-ar-adorando-a-cruz-religiao-conceito-do-fe-e-oracao-com-brilhante-por-do-sol-gratis-foto.jpg"
                    />
                </div>
            </div>

            {/* {isOpen && 
            <ModalConfirm
            title="Você já possui uma conta?"
            show={isOpen}
            onClose={() => setIsOpen(false)}
            img={logo2}
            onCancel={() => null}
            onConfirm={() => null}
            />
            } */}
        </>
    )
}