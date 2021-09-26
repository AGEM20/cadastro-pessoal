console.log("Ola Aberto");

function checarCamposObrigatorios()
{
    let entrada = [];

    if (document.getElementById("nomecompleto").value == "") 
    {
        entrada.push(" Nome completo");
    }

    if (document.getElementById("cpf").value == "") 
    {
        entrada.push(" CPF");
    }
    if (document.getElementById("rg").value == "") 
    {
        entrada.push(" RG");
    }

    if (document.getElementById("email").value == "") 
    {
        entrada.push(" E-mail");
    }

    if (document.getElementById("endereco").value == "") 
    {
        entrada.push(" Endereco");
    }

    if (document.getElementById("numero").value == "") 
    {
        entrada.push(" Numero");
    }

    if (document.getElementById("bairro").value == "") 
    {
        entrada.push(" Bairro");
    }

    if (document.getElementById("cidade").value == "") {
        entrada.push(" Cidade");
    }

    if (document.getElementById("cep").value == "") 
    {
        entrada.push(" CEP");
    }

    if (entrada.length == 1) 
    {
        alert("Atenção! O campo" + entrada + " é obrigatório e não foi preenchido.");
        entrada = [];
    } 
    
    else if (entrada.length > 1) 
    {
        alert("Atenção! Os campos" + entrada.slice(0, (entrada.length - 1)) + " e" + entrada.slice(-1) + " são obrigatórios e não foram preenchidos.");
        entrada = [];
    } 
    
    else 
    {
      document.getElementById("fordadospessoais").submit();
      alert("Formulario enviado com sucesso!");
    }
}