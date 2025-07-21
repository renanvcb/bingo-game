# 🎯 Jogo de Bingo

Um jogo de bingo interativo e moderno desenvolvido com React, TypeScript, Vite, Tailwind CSS e shadcn/ui.

![Bingo Game](https://img.shields.io/badge/Status-Funcional-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC)

## 🌟 Características

✨ **Interface Moderna** - Design limpo e intuitivo com componentes shadcn/ui  
🎮 **Totalmente Interativo** - Clique para marcar números na cartela  
🔄 **Sorteio Automático** - Sistema de sorteio aleatório sem repetição  
🏆 **Detecção Inteligente** - Reconhece automaticamente linhas, colunas e diagonais  
📱 **Responsivo** - Funciona perfeitamente em desktop e mobile  
⚡ **Performance** - Build otimizado com Vite para carregamento rápido  
🎨 **Tema Customizável** - Sistema de cores consistente e moderno

## 🚀 Funcionalidades

### 🎲 Mecânicas do Jogo

- **Cartela 5x5** com números aleatórios seguindo as regras tradicionais
- **Espaço Livre** no centro da cartela (marcado automaticamente)
- **Distribuição Correta**: B(1-15), I(16-30), N(31-45), G(46-60), O(61-75)
- **Marcação Visual** com feedback imediato
- **Verificação Automática** de vitória em tempo real

### 🎮 Controles de Jogo

- **Iniciar/Pausar** o jogo a qualquer momento
- **Sortear Número** manualmente ou aguardar sorteio automático
- **Novo Jogo** para gerar nova cartela instantaneamente
- **Progresso Visual** com barra de porcentagem

### 📊 Interface Avançada

- **Número Atual** com destaque visual elegante
- **Histórico Completo** de números sorteados organizados por letra
- **Últimos Sorteados** para referência rápida
- **Modal de Vitória** com celebração animada

## 🛠️ Stack Tecnológica

| Tecnologia       | Versão  | Propósito                |
| ---------------- | ------- | ------------------------ |
| **React**        | 19.1.0  | Framework de interface   |
| **TypeScript**   | 5.8.3   | Tipagem estática         |
| **Vite**         | 7.0.4   | Build tool moderno       |
| **Tailwind CSS** | 4.1.11  | Framework CSS utilitário |
| **shadcn/ui**    | Latest  | Componentes de UI        |
| **Lucide React** | 0.525.0 | Biblioteca de ícones     |

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/bingo-game.git

# Entre no diretório
cd bingo-game

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse no navegador
# http://localhost:5173
```

### Produção

```bash
# Gere a build de produção
npm run build

# Visualize a build localmente
npm run preview
```

## 🎲 Como Jogar

### 🎯 Objetivo

Complete uma linha, coluna ou diagonal na sua cartela antes dos outros jogadores!

### 📋 Passos

1. **Clique em "Iniciar"** para começar um novo jogo
2. **Use "Sortear Número"** para sortear números aleatoriamente
3. **Marque os números** clicando neles quando forem sorteados
4. **Aguarde a vitória!** O jogo detecta automaticamente quando você faz BINGO

### 🏆 Condições de Vitória

- ✅ **Linha horizontal** completa
- ✅ **Coluna vertical** completa
- ✅ **Diagonal principal** completa
- ✅ **Diagonal secundária** completa

> 💡 **Dica**: O espaço central (★) é considerado "livre" e já vem marcado!

## 📁 Estrutura do Projeto

```
src/
├── 📂 components/
│   ├── 📂 ui/
│   │   └── 📄 button.tsx           # Componente de botão do shadcn/ui
│   ├── 📄 BingoCard.tsx            # Cartela interativa do jogador
│   ├── 📄 NumberDrawer.tsx         # Exibição do número atual sorteado
│   ├── 📄 DrawnNumbers.tsx         # Histórico e visualização de números
│   └── 📄 GameControls.tsx         # Controles principais do jogo
├── 📂 lib/
│   └── 📄 utils.ts                 # Utilitários (função cn para classes)
├── 📄 App.tsx                      # Componente principal da aplicação
├── 📄 main.tsx                     # Ponto de entrada do React
└── 📄 index.css                    # Estilos globais e tema Tailwind
```

## 🎨 Design System

### Paleta de Cores

- **Primary**: Azul (#3b82f6) - Elementos principais
- **Secondary**: Cinza claro (#f1f5f9) - Elementos secundários
- **Success**: Verde (#10b981) - Números marcados
- **Warning**: Amarelo (#f59e0b) - Espaço livre
- **Background**: Branco (#ffffff) - Fundo geral

### Componentes

- **Botões** com variantes (default, outline, secondary)
- **Cards** com sombras e bordas arredondadas
- **Grid responsivo** com breakpoints otimizados
- **Animações sutis** para feedback visual

## ⚙️ Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview da build
npm run lint       # Verificação de código
```

## 🔧 Configuração de Desenvolvimento

### TypeScript

- Configuração rigorosa com verificações completas
- Path aliases (`@/` para `src/`)
- Tipagem estrita habilitada

### ESLint

- Regras do React e TypeScript
- Configuração para hooks e refresh
- Verificação de código automática

### Tailwind CSS v4

- Configuração moderna com `@import`
- Tema personalizado com variáveis CSS
- Classes utilitárias otimizadas

## 🚀 Próximas Funcionalidades

- [x] 🌙 **Modo escuro** alternável
- [ ] 🔊 **Efeitos sonoros** para sorteios e vitória
- [ ] 👥 **Modo multiplayer** local
- [ ] 💾 **Salvamento** de estatísticas
- [ ] 🎪 **Temas personalizados** adicionais
- [ ] 📱 **PWA** para instalação mobile

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. 🍴 Fazer fork do projeto
2. 🌿 Criar uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. 💾 Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. 📤 Push para a branch (`git push origin feature/nova-funcionalidade`)
5. 🔀 Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [React](https://react.dev) pela excelente biblioteca
- [Vite](https://vitejs.dev) pela ferramenta de build incrível
- [Tailwind CSS](https://tailwindcss.com) pelo framework CSS poderoso
- [shadcn/ui](https://ui.shadcn.com) pelos componentes elegantes
- [Lucide](https://lucide.dev) pelos ícones lindos

---

<p align="center">
  Feito com ❤️ e muito ☕ 
</p>

<p align="center">
  <a href="#-jogo-de-bingo">Voltar ao topo</a>
</p>
