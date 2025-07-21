<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Jogo de Bingo - Instruções para Copilot

Este é um projeto de jogo de bingo desenvolvido com React, TypeScript, Vite, Tailwind CSS e shadcn/ui.

## Estrutura do Projeto

- **Frontend**: React 18 com TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS com tema personalizado
- **UI Components**: shadcn/ui (componentes baseados em Radix UI)
- **Ícones**: Lucide React

## Convenções de Código

- Use TypeScript estrito com todas as verificações habilitadas
- Siga as convenções de nomenclatura do React (PascalCase para componentes)
- Use hooks funcionais sempre que possível
- Mantenha componentes pequenos e focados em uma responsabilidade
- Use o sistema de design do shadcn/ui para consistência visual

## Funcionalidades Principais

1. **Cartela de Bingo**: Grid 5x5 com números aleatórios por coluna (B: 1-15, I: 16-30, N: 31-45, G: 46-60, O: 61-75)
2. **Sorteio de Números**: Sistema de sorteio aleatório sem repetição
3. **Marcação de Números**: Clique para marcar/desmarcar números na cartela
4. **Detecção de Bingo**: Verifica linhas, colunas e diagonais
5. **Controles de Jogo**: Iniciar, pausar, sortear e novo jogo
6. **Histórico**: Mostra números sorteados organizados por letra

## Padrões de UI

- Use o sistema de cores definido no Tailwind config
- Mantenha responsividade (mobile-first)
- Use animações sutis para feedback visual
- Implemente estados de loading e sucesso
- Mantenha hierarquia visual clara

## Estado da Aplicação

- Use useState para estado local dos componentes
- Use useCallback para otimizar re-renders
- Mantenha o estado do jogo centralizado no App.tsx
- Use TypeScript interfaces para tipagem rigorosa
