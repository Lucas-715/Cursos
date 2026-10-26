const fs = require('fs');
const path = require('path');

// 1. Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log('Erro ao criar pasta: ', error);
    }

    console.log('Pasta criada com sucesso!');

    // 2. Criar arquivo DENTRO do callback (garante que a pasta já existe)
    fs.writeFile(
        path.join(__dirname, '/test', 'test.txt'),
        'hello node!',
        (error) => {
            if (error) {
                return console.log('Erro ao criar arquivo: ', error);
            }

            console.log('Arquivo criado com sucesso!');

            // 3. Adicionar conteúdo ao arquivo já existente
            fs.appendFile(
                path.join(__dirname, '/test', 'test.txt'),
                ' Hello World!',
                (error) => {
                    if (error) {
                        return console.log('Erro ao modificar arquivo: ', error);
                    }

                    console.log('Arquivo modificado com sucesso!');

                    // 4. Ler o arquivo atualizado
                    fs.readFile(
                        path.join(__dirname, '/test', 'test.txt'),
                        'utf8',
                        (error, data) => {
                            if (error) {
                                return console.log('Erro ao ler arquivo: ', error);
                            }

                            console.log('Conteúdo do arquivo:', data);
                        }
                    );
                }
            );
        }
    );
});
