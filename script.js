< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Exemplo 5</title>
                </head>
                <body>
                    <form onsubmit="return validarFormulario()">
                        <label for="nome">Nome: </label>
                        <input type="text" id="nome" name="nome">
                            <br><br>
                                <input type="submit" value="Enviar">
                                </form>
                                <p id="mensagemErro" style="color: red;"></p>
                                <script>
                                    function validarFormulario() {
    var nome = document.getElementById("nome").value;
                                    var mensagemErro = document.getElementById("mensagemErro");
                                    if (nome === "") {
                                        mensagemErro.innerHTML = "Por favor, preencha o campo de nome.";
                                    return false;
}
                                    return true;
}
                                </script>
                            </body>
                            </html>
                            +