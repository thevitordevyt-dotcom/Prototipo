# BJV E-commerce - Tecnologias de Soluções Logísticas 📦

Este é o repositório front-end da plataforma **BJV E-commerce**, um sistema voltado para o setor logístico que oferece soluções tecnológicas para otimização de entregas, gerenciamento de pedidos e integração entre empresas locais de logística.

## 🚀 Visão Geral

O projeto consiste em uma interface web responsiva que atua como um painel administrativo e portal do cliente. Ele permite o rastreamento de entregas, geração de relatórios de envio (PDF), leitura das políticas de privacidade e acesso a um chatbot de suporte.

## ✨ Funcionalidades

* **Painel do Administrador:** Acompanhamento de entregas recentes, pesquisa avançada com filtros (data, quantidade, status) e painel lateral de navegação.
* **Status de Entregas:** Rastreamento visual e simplificado de pedidos (🟢 Entregue, 🟡 Pendente, 🔴 Atrasado).
* **Geração de Envios (PDF):** Interface dedicada para preenchimento de dados de clientes e envio de produtos.
* **Chatbot / Ajuda:** Tela de suporte para comunicação direta com administradores e dúvidas frequentes.
* **Modo Dark/Light (Tema Escuro/Claro):** Alternância de temas perfeitamente integrada usando CSS Variables e JavaScript, garantindo acessibilidade visual e conforto ao usuário.
* **Design Responsivo:** Layout adaptável para dispositivos móveis, tablets e desktops utilizando Flexbox e Media Queries.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica de todas as páginas.
* **CSS3:** Estilização com uso de variáveis de raiz (`:root`), transições suaves, gradientes e design responsivo.
* **JavaScript (Vanilla):** Lógica simples e eficiente para a alternância do Modo Dark.

## 📂 Estrutura de Arquivos

Abaixo está a estrutura de diretórios esperada para que o projeto funcione corretamente com base nos caminhos (`href` e `src`) definidos no código:

```text
/
├── index.html               # Página inicial (Home)
├── administrativo.html      # Painel do administrador e filtros de pesquisa
├── status.html              # Visão geral do status de entregas
├── pdf.html                 # Interface de envio de produtos via PDF
├── ajuda.html               # Tela de chatbot e suporte ao cliente
├── termos.html              # Página de contato e redirecionamento de termos
├── termosum.html            # Documento completo de Política de Privacidade (LGPD)
├── css/
│   └── style.css            # Arquivo principal de estilos e variáveis
├── js/
│   └── script.js            # Arquivo de scripts (Toggle Modo Dark)
└── img/                     # Diretório de imagens
    ├── bjv.png              # Background da Home
    ├── Bjv3.png             # Favicon
    ├── Dev.png              # Ícone de logo secundária
    ├── Quadrado.png         # Imagem de placeholder para status de pedidos
    └── list.png             # Imagem representativa de inputs no painel PDF