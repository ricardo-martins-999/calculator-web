# Calculadora Web Completa

Uma calculadora web moderna, responsiva e interativa desenvolvida com **HTML5**, **CSS3** e **JavaScript puro (ES6+)**.

O projeto foi criado com foco em:

- arquitetura modular
- boas práticas de frontend
- manipulação do DOM
- parsing de expressões matemáticas
- experiência visual moderna
- organização escalável do código

A aplicação suporta operações matemáticas avançadas, temas dinâmicos e entrada via teclado, oferecendo uma experiência fluida tanto em desktop quanto em dispositivos móveis.

## Funcionalidades

### Operações Matemáticas

- Adição
- Subtração
- Multiplicação
- Divisão
- Potenciação
- Porcentagem
- Suporte a números decimais
- Suporte a operadores unários (-x)
- Prioridade matemática de operadores
- Tratamento de divisão por zero

### Funções Científicas

- sin(x)
- cos(x)
- tan(x)
- log(x)
- sqrt(x)

## Interface

- Design moderno
- Layout responsivo
- Tema dark/light
- Alternância dinâmica de temas
- Persistência do tema com `localStorage`
- Feedback visual nos botões
- Animações suaves
- Glassmorphism no botão de tema
- Fonte estilizada com `Fira Code` e `Orbitron`

## Tecnologias Utilizadas

- **HTML5** – estrutura da aplicação
- **CSS3** – estilização e responsividade
  - **Font Awesome**
  - **Google Fonts**
- **JavaScript (ES6+)** – lógica da aplicação

## Estrutura do Projeto

```md
calculator/
│
├── assets/
│   └── css/
│       ├── components/
│       ├── layout.css
│       ├── themes.css
│       ├── variables.css
│       └── reset.css
│
├── js/
│   ├── controller/
│   ├── core/
│   ├── parser/
│   ├── state/
│   ├── ui/
│   ├── utils/
│   └── app.js
│
├── index.html
└── README.md
```

## Entrada via Teclado

| Tecla       | Ação                 |
|-------------|----------------------|
|`0-9`        | Inserir números      |
|`+ - * /`    | Operadores           |
|`Enter`      | Calcular resultado   |
|`Backspace`  | Apagar último dígito |
|`Escape / c` | Limpar expressão     |
|`( )`        | Parênteses           |
|`.`          | Decimal              |

## Sistema de Temas

### A calculadora possui dois temas personalizados

- Dark
- Light

Os temas são controlados via:

```css
    [data-theme='dark']
    [data-theme='light']
```

com persistência automática usando `localStorage`.

## Como Executar o Projeto

1 Clone este repositório:

```bash
git clone https://github.com/ricardo-martins-999/calculator-web.git
```

2 Acesse a pasta do projeto:

```bash
cd calculator-web
```

3 Abra o arquivo `index.html` no navegador:

Você pode abrir diretamente o index.html no navegador ou utilizar uma extensão como:

- Live Server
- Vite Preview
- http-server

## Contribuição

Contribuições são bem-vindas.

- Faça um Fork
- Crie uma branch
- Commit suas alterações:

```bash
    git checkout -b feature/minha-feature
```

- Push para a branch

```bash
    git commit -m "feat: nova feature"
```

- Abra um Pull Request

```bash
    git push origin feature/minha-feature
```

## Observação

Este projeto é ideal para fins educacionais e pode ser expandido para aplicações mais complexas.
