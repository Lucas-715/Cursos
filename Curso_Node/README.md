# Estudos de Node.js 🚀

Módulo prático e aprofundado de estudos em **Node.js para Iniciantes**, focado no aprendizado da arquitetura do Node, seus módulos nativos essenciais, manipulação de streams, sistemas de arquivos, requisições HTTP e criação de APIs RESTful.

---

## 📌 Conteúdo Programático & Status

| Módulo | Tópicos Principais | Status |
| :--- | :--- | :---: |
| **01. Fundamentos & CommonJS** | Conceito de runtime, V8, Event Loop, `module.exports`, `require()` e POO com Classes | Concluído |
| **02. Módulos Nativos (`path` & `fs`)** | `path.basename`, `dirname`, `extname`, `parse`, `join` e operações com `fs` (`mkdir`, `writeFile`, `appendFile`, `readFile`) | Concluído |
| **03. Servidor HTTP Nativo** | Módulo `http`, criação de rotas sem frameworks, cabeçalhos e códigos de status | Em andamento |
| **04. Express.js & REST APIs** | Middlewares, roteamento dinâmico, métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`), payloads JSON | Próximo |
| **05. Banco de Dados & CRUD** | Conexão com banco de dados (MongoDB / Mongoose), models, schemas e persistência | Próximo |

---

## 🛠️ Tecnologias & Ferramentas Utilizadas

* **Runtime:** [Node.js](https://nodejs.org/)
* **Gerenciador de Pacotes:** NPM
* **Dev Server:** [Nodemon](https://nodemon.io/) (recarregamento automático do servidor em desenvolvimento)
* **Versionamento:** Git & GitHub

---

## 📂 Estrutura do Projeto

```text
Curso_Node/
├── modules/
│   ├── fs.js          # Operações assíncronas do File System
│   └── path.js        # Manipulação de caminhos e diretórios
├── index.js           # Ponto de entrada (execução dos módulos e scripts)
├── person.js          # Exemplo de criação de classe e exportação CommonJS
├── package.json       # Manifesto de dependências e scripts NPM
├── .gitignore         # Exclusão de node_modules e arquivos temporários
└── README.md          # Esta documentação
```

---

## 🚀 Como Executar Localmente

1. Entre na pasta do curso:
   ```bash
   cd Curso_Node
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor com live reload via Nodemon:
   ```bash
   npm run start:dev
   ```
