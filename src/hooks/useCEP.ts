const urlBase = "https://viacep.com.br/ws/"
const retornoApi = "/json/"

interface CEPProps{
    logradouro: string,
    bairro: string,
    complemento: string,
    estado: string,
    localidade: string,
    uf: string,
    regiao: string
}

async function useCEP(cep: string): Promise<CEPProps> {
    try{
        const data = await fetch(`${urlBase}${cep}${retornoApi}`)
        const response = await data.json()
        console.log(response)
        return {
            logradouro: response.logradouro || "",
            bairro: response.bairro || "",
            complemento: response.complemento || "",
            estado: response.uf || "",
            localidade: response.localidade || "",
            uf: response.uf || "",
            regiao: response.regiao || ""
        };

    }catch(error){
        console.error("CEP não encontrado!")
        return{
            logradouro: "",
            bairro: "",
            complemento: "",
            estado: "",
            localidade: "",
            uf: "",
            regiao: "",
        }
    }

}

export default useCEP