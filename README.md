<body>
  <h1>API Barbershop</h1>
  <p>API RESTful para agendamento e gestão de barbearias, desenvolvida com NestJS, TypeScript, MongoDB, Mongoose, autenticação Firebase e CI/CD.</p>

  <h2>Índice</h2>
  <ul>
    <li><a href="#visao">Visão Geral</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#estrutura">Estrutura de Pastas</a></li>
    <li><a href="#instalacao">Instalação e Execução</a></li>
    <li><a href="#swagger">Documentação Swagger</a></li>
    <li><a href="#testes">Testes</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>

  <h2 id="visao">Visão Geral</h2>
  <p>Essa API serve como backend para um sistema de barbearia, permitindo:</p>
  <ul>
    <li>Agendamento de horários e serviços</li>
    <li>Login e registro via autenticação Firebase</li>
  </ul>

  <h2 id="tecnologias">Tecnologias</h2>
  <ul>
    <li>NestJS + TypeScript</li>
    <li>MongoDB com Mongoose</li>
    <li>Firebase Auth (JWT)</li>
    <li>Swagger</li>
    <li>CI/CD com GitHub Actions</li>
    <li>Docker</li>
  </ul>

  <h2 id="estrutura">Estrutura de Pastas</h2>
  <pre>
.
├── docs/                # Config Swagger / OpenAPI
├── src/
│   ├── config/          # Firebase, database
│   ├── database/        # Mongoose providers
│   ├── modules/         # Domínios (users, appointments, etc.)
│   ├── main.ts          # Server
│   └── app.module.ts
├── __test__/            # Testes
├── Dockerfile
├── .github/workflows/
└── README.md
  </pre>

  <h2 id="instalacao">Instalação e Execução</h2>
  <pre>
git clone https://github.com/MoisesHsilva1/api-barbershop.git
cd api-barbershop

npm install

npm run start:dev
# ou com Docker
docker build -t api-barbershop .
docker run -p 3000:3000 api-barbershop
  </pre>

  <h2 id="swagger">Documentação Swagger</h2>
  <p><a href="https://api-barbershop.onrender.com/docs" target="_blank" rel="noopener noreferrer">Swagger</a></p>

  <h2 id="testes">Testes</h2>
  <pre>
npm run test
npm run test:cov
  </pre>

  <h2 id="contato">Contato</h2>
  <p>Desenvolvido por <strong>Moisés Henrique</strong> — <a href="https://github.com/MoisesHsilva1" target="_blank" rel="noopener noreferrer">GitHub</a></p>
</body>
</html>
