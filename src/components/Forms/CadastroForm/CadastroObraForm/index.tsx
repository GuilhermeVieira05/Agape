import React, { useState } from 'react';
import styles from './index.module.scss'; // Importando o arquivo SCSS
import useCEP from '../../../../hooks/useCEP';
import CadastroObraProps from '../../../../types/Forms/CadastroServoForm/CadastroObraProps';
import redirecionar from '../../../../utils/redirecionar';

const CadastroObra: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CadastroObraProps>({
    nome: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    cidade: '',
    estado: '',
    complemento: '',
    email: '',
    senha: '',
    senhaConfirmation: '',
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === 'cep' && value.length === 8) {
      const data = await useCEP(value);

      setFormData({
        ...formData,
        cep: value,
        bairro: data.bairro || '',
        rua: data.logradouro || '',
        cidade: data.localidade || '',
        estado: data.estado || '',
      });

        return
    }

  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
    console.log(formData);
    redirecionar('/home')
  };

  return (
    <div className={styles.container}>
      {/* Barra de progresso */}
      <div className={styles.progressBar}>
        <div className={step >= 1 ? styles.activeStep : styles.step} />
        <div className={step >= 2 ? styles.activeStep : styles.step} />
        <div className={step >= 3 ? styles.activeStep : styles.step} />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {step === 1 && (
          <div className={styles.stepContainer}>
            <h2>Dados Principais</h2>
            <input
              className={styles.input}
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              pattern='^[A-Za-z\s]{3,}$'
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="password"
              name="senhaConfirmation"
              placeholder="Confirme a Senha"
              value={formData.senhaConfirmation}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContainer}>
            <h2>Endereço</h2>
            <input
              className={styles.input}
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleChange}
              required
              pattern='^\d{8}$'
              maxLength={8}
            />
            <input
              className={styles.input}
              type="text"
              name="rua"
              placeholder="Rua"
              value={formData.rua}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="text"
              name="numero"
              placeholder="Número"
              value={formData.numero}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            <select
              className={styles.input}
              name="estado"
              value={formData.estado}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecione o Estado
              </option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            <input
              className={styles.input}
              type="text"
              name="complemento"
              placeholder="Complemento"
              value={formData.complemento}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepContainer}>
            <h2>Confirmação</h2>
            <p>Por favor, revise seus dados antes de enviar o formulário.</p>
            <pre className={styles.preview}>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}

        <div className={styles.buttons}>
          {step > 1 && (
            <button type="button" className={styles.button} onClick={prevStep}>
              Voltar
            </button>
          )}
          {step < 3 && (
            <button type="button" className={styles.button} onClick={nextStep}>
              Próximo
            </button>
          )}
          {step === 3 && (
            <button type="submit" className={styles.button}>
              Enviar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CadastroObra;