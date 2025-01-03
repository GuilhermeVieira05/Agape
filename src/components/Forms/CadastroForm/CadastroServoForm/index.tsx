import { useState } from "react"
import CadastroServoProps from "../../../../types/Forms/CadastroServoForm/CadastroServoProps"
import updateFormData from "../../../../utils/updateFormData";
import styles from "./index.module.scss"

interface FormProps {
    onSubmit: (data: CadastroServoProps) => void;
}


const CadastroServoForm: React.FC<FormProps> = (props) =>{

    const [formData, setFormData] = useState<CadastroServoProps>({
        cpf: "",
        email: "",
        nome: "",
        dataNasc: "",
        senha: "",
        telefone: "",
        senhaConfirmation: ""
    })
    
    console.log(formData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        // Se o campo for "dataNasc", salvar a data como string no formato "yyyy-mm-dd"
        if (name === "dataNasc") {
            setFormData(prevData => ({
                ...prevData,
                [name]: value // Armazenando a data no formato "yyyy-mm-dd"
            }));
        } else {
            updateFormData(e, formData, setFormData);
        }
    }

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        props.onSubmit(formData)
        setFormData({
            cpf: "",
            email: "",
            nome: "",
            dataNasc: "",
            senha: "",
            telefone: "",
            senhaConfirmation: ""
        })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {/* CPF Input */}
            <div className={styles.row1}>
                <div className={styles.input}>
                    <label htmlFor="cpf">CPF: </label>
                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                </div>
                {/* Nome Input */}
                <div className={styles.input}>
                    <label htmlFor="nome">Nome: </label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Email Input */}
            <div className={styles.row2}>
                <div className={styles.input}>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Data de Nascimento Input */}
            <div className={styles.row3}>
                <div className={styles.input}>
                    <label htmlFor="dataNasc">Data de Nascimento: </label>
                    <input
                        type="date"
                        name="dataNasc"
                        id="dataNasc"
                        value={formData.dataNasc} // Formata a data para o formato "yyyy-mm-dd"
                        onChange={handleChange}
                    />
                </div>
                {/* Telefone Input */}
                <div className={styles.input}>
                    <label htmlFor="telefone">Telefone: </label>
                    <input
                        type="text"
                        name="telefone"
                        id="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Senha Input */}
            <div className={styles.row4}>
                <div className={styles.input}>
                    <label htmlFor="senha">Senha: </label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={formData.senha}
                        onChange={handleChange}
                    />
                </div>
                {/* Confirmação de Senha Input */}
                <div className={styles.input}>
                    <label htmlFor="senhaConfirmation">Confirmação de Senha: </label>
                    <input
                        type="password"
                        name="senhaConfirmation"
                        id="senhaConfirmation"
                        value={formData.senhaConfirmation}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className={styles.input}>
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    )
}

export default CadastroServoForm