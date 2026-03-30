# 🐾 PetShop Amigo Fiel — Fase 2

Sistema web desenvolvido para a disciplina de **Fundamentos de Sistemas Web** — Fase 2 do projeto acadêmico.

---

## 📋 Sobre o Projeto

Plataforma online para um petshop fictício que oferece produtos e serviços para animais de estimação. A **Fase 2** incorporou estilização com **CSS customizado + Bootstrap 5**, funções dinâmicas em **JavaScript** e novos formulários de cadastro e agendamento.

---

## ✨ Funcionalidades

### Produtos (Fase 1 — melhoradas na Fase 2)
- 🎀 **Acessórios** — roupas, brinquedos, camas
- 🦴 **Rações** — premium para cães e gatos de todas as idades
- 🧴 **Higiene e Limpeza** — tapetes higiênicos, fraldas, shampoos

### Serviços
- 🛁 Banho e Tosa com tabela de preços responsiva
- 🚗 Serviço de tele-busca (busca e entrega do pet)
- 📅 Agendamento com seleção de data e horário via calendário

### Cadastro
- 👤 Formulário de dados do **cliente** (nome, CPF, endereço, sexo, telefone, e-mail)
- 🐾 Formulário de dados do **pet** (nome, espécie, raça, sexo, idade, peso, vacinas)
- ✅ Consentimento LGPD

### Interatividade (JavaScript)
- 🕐 **Relógio em tempo real** no navbar (atualizado a cada segundo)
- ☀️ **Saudação dinâmica** (bom dia / boa tarde / boa noite)
- 🟢 **Indicador de funcionamento** (aberto/fechado conforme horário)
- 📝 **Máscaras automáticas** de CPF, telefone e CEP
- ✅ **Validação de formulários** com feedback visual
- 📅 **Bloqueio de datas passadas** no calendário de agendamento
- 🖼️ Fallback para imagens de produto não encontradas

### Acessibilidade
- 🔗 **Link "Pular para o conteúdo principal"** (acessível por teclado)
- 🖼️ Atributos `alt` descritivos em **todas as imagens**
- 🏷️ `aria-label`, `aria-live`, `aria-current`, `aria-required` em todos os elementos interativos
- ⌨️ **Foco visível** destacado em todos os elementos interativos
- 🧭 **HTML semântico** (`header`, `nav`, `main`, `footer`, `section`, `article`, `address`, `fieldset`, `legend`)
- 🗣️ `lang="pt-BR"` declarado em todas as páginas
- 📋 `role` adequado em regiões dinâmicas (`role="timer"`, `role="alert"`, `role="region"`)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | — | Estrutura semântica de todas as páginas |
| CSS3 + Bootstrap | 5.3.3 | Estilização, carrossel, layout responsivo |
| Bootstrap Icons | 1.11.3 | Ícones vetoriais |
| JavaScript (ES6) | — | Funções temporais, validação, máscaras |

---

## 📁 Estrutura do Projeto

```
fase1-petshop/
├── index.html              # Página inicial com carrossel e categorias
├── acessorios.html         # Produtos: Acessórios
├── racoes.html             # Produtos: Rações
├── higiene.html            # Produtos: Higiene e Limpeza
├── servicos.html           # Serviços: Banho e Tosa + Tele-busca
├── cadastro.html           # Formulário de cadastro do cliente e pet ✨ Novo
├── agendamento.html        # Formulário de agendamento com calendário ✨ Novo
├── contato.html            # Página de contato com formulário
├── css/
│   └── style.css           # Estilos personalizados ✨ Novo
├── js/
│   └── script.js           # Scripts JavaScript ✨ Novo
├── imagens/                # Imagens dos produtos e serviços (adicionar localmente)
└── README.md               # Este arquivo de ajuda
```

---

## 🚀 Como Visualizar

1. Clone o repositório: `git clone https://github.com/seu-usuario/fase1-petshop.git`
2. Abra o arquivo `index.html` no navegador (duplo clique)
3. Ou acesse via **GitHub Pages** (link abaixo)
4. Navegue pelas páginas usando o menu no topo

> **Nota:** As imagens de produtos precisam ser adicionadas manualmente na pasta `imagens/`. O site funciona normalmente sem as imagens — os cards exibem ícones como fallback.

---

## 📝 Requisitos Atendidos — Fase 2

### CSS/Bootstrap e JavaScript
✅ Bootstrap 5.3 integrado em todas as páginas  
✅ Carrossel responsivo com 3 slides animados (`carousel-fade`) na página inicial  
✅ Navbar responsiva com dropdown de produtos e menu hamburguer para mobile  
✅ Cards de produto com efeito hover e sombra  
✅ Tabela de serviços estilizada com Bootstrap  
✅ Relógio em tempo real atualizado a cada segundo (JavaScript)  
✅ Saudação dinâmica por período do dia (JavaScript)  
✅ Indicador de status de funcionamento do petshop (JavaScript)  
✅ Design responsivo para todas as resoluções  

### Formulário de Cadastro
✅ Dados do cliente: nome, CPF (com máscara), data de nascimento, sexo (radio button), endereço completo, bairro, cidade, estado (select), CEP (com máscara), telefone (com máscara), e-mail  
✅ Dados do pet: nome, espécie (select), raça, sexo (radio button), idade (number), peso (number, passo 0.1), cor, vacinas em dia (checkbox), chip (checkbox), castrado (checkbox), observações (textarea)  
✅ Campos obrigatórios com `required` e `aria-required`  
✅ Placeholders descritivos em todos os campos  
✅ Validação com feedback visual (Bootstrap `is-valid` / `is-invalid`)  
✅ Consentimento LGPD obrigatório  

### Agendamento
✅ Seleção de serviço: Banho, Tosa, Banho+Tosa (checkboxes com cards visuais)  
✅ Método: Tele-busca / Entrega no local (radio buttons)  
✅ Campo de endereço de coleta exibido dinamicamente (apenas para tele-busca)  
✅ Calendário (`input type="date"`) com data mínima = amanhã (bloqueio via JavaScript)  
✅ Seleção de horário por `<select>` com opções de 08:00 a 18:00  
✅ Painel lateral com resumo de preços e informações importantes  

### Acessibilidade
✅ Link "Pular para o conteúdo principal" (acessível por teclado via Tab)  
✅ Atributo `alt` descritivo em todas as imagens  
✅ `aria-label` em botões, links e regiões  
✅ `aria-live` em elementos de atualização dinâmica (relógio, status)  
✅ Foco visível com borda laranja em todos os elementos interativos  
✅ Estrutura de headings hierárquica (h1 → h2 → h3)  
✅ Formulários com `<label>` associado a cada campo  
✅ `<fieldset>` e `<legend>` em grupos de radio buttons  

### Publicação
✅ Código versionado no GitHub  
☐ GitHub Pages (configurar no repositório)  

---

## 🔧 Ajustes Realizados em Relação à Fase 1

1. **Estrutura de arquivos** — criadas pastas `css/` e `js/` para separar responsabilidades
2. **Navegação** — `<nav>` simples substituída por navbar Bootstrap responsiva com dropdown
3. **Tabelas HTML** — substituídas por Bootstrap Cards para produtos; tabela de serviços mantida com estilo Bootstrap
4. **Formulário de contato** — reestilizado com Bootstrap e adicionada validação JavaScript
5. **Formulário único de cadastro** — novo arquivo `cadastro.html` com seções para cliente e pet
6. **Agendamento** — novo arquivo `agendamento.html` com calendário, checkboxes e radio buttons
7. **Acessibilidade** — adicionados `alt`, `aria-*`, skip link e foco visível em todas as páginas
8. **Saudação e relógio** — funções temporais JavaScript no navbar e na página inicial
9. **Indicador de funcionamento** — widget que mostra "Aberto/Fechado" baseado no horário atual
10. **Imagens com fallback** — cards exibem emoji/ícone caso a imagem não seja encontrada

---

## 👨‍💻 Autor

**Filipe Neves**  
Projeto Acadêmico — Fundamentos de Sistemas Web — Fase 2

---

*Última atualização: Março de 2026*
