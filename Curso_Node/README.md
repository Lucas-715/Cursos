# Estudos de Node.js 🚀

Repositório dedicado aos estudos e projetos práticos de **Node.js para Iniciantes**, cobrindo desde os fundamentos da plataforma até a criação de APIs REST e integração com banco de dados.

---

## 📌 Conteúdo Programático & Progresso

- [x] **Módulo 1: Fundamentos do Node.js**
  - O que é o Node.js e Event Loop
  - Sistema de Módulos (CommonJS: `require` e `module.exports`)
  - Classes e Orientação a Objetos no Node.js
- [x] **Módulo 2: Módulos Nativos do Node.js**
  - `path`: manipulação segura de caminhos e diretórios (`basename`, `dirname`, `extname`, `parse`, `join`)
  - `fs` (File System): operações de arquivos e pastas (`mkdir`, `writeFile`, `appendFile`, `readFile`)
  - Tratamento de operações assíncronas e callbacks
- [ ] **Módulo 3: Servidor HTTP Nativo**
  - Módulo `http`
  - Criação de rotas, headers e responses
- [ ] **Módulo 4: Express.js & APIs RESTful**
  - Estruturação de rotas e middlewares
  - Métodos HTTP (GET, POST, PUT/PATCH, DELETE)
  - Envio e recebimento de parâmetros (`params`, `query`, `body`)
- [ ] **Módulo 5: Banco de Dados & Persistência**
  - Conexão e modelagem de dados (MongoDB / Mongoose)
  - Operações completas de CRUD

---

## 🛠️ Tecnologias e Ferramentas

- **Node.js**
- **NPM** (Gerenciador de Pacotes)
- **Nodemon** (Ambiente de desenvolvimento com Live Reload)
- **Git & GitHub**

---

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório ou navegue até o diretório:
   ```bash
   cd Curso_Node
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run start:dev
   ```

---

## 📂 Estrutura de Arquivos

```text
Curso_Node/
├── modules/
│   ├── fs.js          # Exemplos práticos do módulo File System
│   └── path.js        # Exemplos práticos do módulo Path
├── index.js           # Ponto de entrada da aplicação
├── person.js          # Exemplo prático de classes e exports
├── package.json       # Manifesto de dependências e scripts do projeto
├── .gitignore         # Arquivos e pastas desconsiderados no versionamento
└── README.md          # Documentação do projeto
```
