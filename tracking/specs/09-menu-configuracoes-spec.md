# SPEC - Menu de Contexto do Módulo Configurações

## 1. Visão Geral do Projeto

Este documento detalha a especificação técnica para implementação do Menu de Contexto no módulo de Configurações do sistema UNIQ Empresas. O objetivo é facilitar a navegação entre as sub-funcionalidades do módulo de configurações que existem mas não são facilmente acessíveis.

**Projeto:** UNIQ Empresas  
**Módulo:** Configurações  
**Rota Base:** `/configuracoes`  
**Versão:** 1.0  
**Data:** 2026-04-15

---

## 2. Requisitos Funcionais

### RF01 - Menu de Contexto em Configurações

O menu de contexto deve ser implementado no header da página `/configuracoes/empresa` (e demais páginas do módulo).

**Itens do Menu:**
1. **Empresa** → `/configuracoes/empresa`
2. **Conta** → `/configuracoes/conta`
3. **Colaboradores** → `/configuracoes/colaboradores`
4. **Novo Colaborador** → `/configuracoes/colaboradores/novo`

**Posição:** Header da página, logo abaixo do título principal ou como navegação por abas (Tabs).

**Comportamento:**
- O item ativo deve ser highlighted conforme a rota atual.
- Ao clicar em um item, o usuário deve ser redirecionado para a rota correspondente.

---

## 3. Requisitos Não Funcionais

- **RNF01** - Usar componentes shadcn/ui (Tabs ou similar) para consistência visual.
- **RNF02** - Manter padrão visual UNIQ (cores, fontes, espaçamento).
- **RNF03** - Responsivo - funcionar em mobile e desktop.
- **RNF04** - Não afetar performance da página.
- **RNF05** - O menu deve estar presente em todas as páginas do módulo Configurações.

---

## 4. Arquitetura Técnica

### Abordagem de Implementação

Opção 1: Criar um componente `<ConfiguracoesMenu />` reutilizável.
Opção 2: Usar o componente `<Tabs />` do shadcn diretamente nas páginas.

**Recomendação:** Criar um componente dedicado que pode ser importado em todas as páginas do módulo para garantir consistência e manutenção.

### Estrutura de Arquivos

```text
src/app/components/configuracoes/
├── ConfiguracoesMenu.tsx      # Componente do menu de contexto
├── EmpresaPage.tsx            # Página existente
├── ContaPage.tsx              # Página existente
├── ColaboradoresPage.tsx      # Página a criar
└── NovoColaboradorPage.tsx   # Página a criar
```

### Componente Proposto: `ConfiguracoesMenu.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, User, Users, UserPlus } from "lucide-react";

const itensMenu = [
  { label: "Empresa", href: "/configuracoes/empresa", icon: Building2 },
  { label: "Conta", href: "/configuracoes/conta", icon: User },
  { label: "Colaboradores", href: "/configuracoes/colaboradores", icon: Users },
  { label: "Novo Colaborador", href: "/configuracoes/colaboradores/novo", icon: UserPlus },
];

export function ConfiguracoesMenu() {
  const pathname = usePathname();

  return (
    <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
      {itensMenu.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-white text-emerald-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Icon size={16} />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
```

---

## 5. Tarefas de Implementação

### Fase 1: Preparação
- [ ] Verificar se as rotas `/configuracoes/colaboradores` e `/configuracoes/colaboradores/novo` existem no roteamento da aplicação.
- [ ] Se não existirem, criar as páginas placeholder para cada rota.

### Fase 2: Componente Reutilizável
- [ ] Criar o arquivo `src/app/components/configuracoes/ConfiguracoesMenu.tsx`.
- [ ] Implementar a lógica de highlighting de item ativo.
- [ ] Estilizar para seguir o padrão visual UNIQ (cores esmeralda, bordas arredondadas, sombras sutis).

### Fase 3: Integração
- [ ] Importar e renderizar `<ConfiguracoesMenu />` em `EmpresaPage.tsx`.
- [ ] Importar e renderizar `<ConfiguracoesMenu />` em `ContaPage.tsx`.
- [ ] Importar e renderizar `<ConfiguracoesMenu />` em `ColaboradoresPage.tsx` (nova página).
- [ ] Importar e renderizar `<ConfiguracoesMenu />` em `NovoColaboradorPage.tsx` (nova página).

---

## 6. Critérios de Aceitação

- [ ] O menu de contexto é exibido no topo da página de Configurações (Empresa).
- [ ] Todos os 4 links estão presentes e funcionais.
- [ ] O item correspondente à rota atual está destacado visualmente.
- [ ] Ao clicar em "Conta", o usuário é redirecionado para `/configuracoes/conta`.
- [ ] Ao clicar em "Colaboradores", o usuário é redirecionado para `/configuracoes/colaboradores`.
- [ ] Ao clicar em "Novo Colaborador", o usuário é redirecionado para `/configuracoes/colaboradores/novo`.
- [ ] O design é responsivo (não quebra em telas menores).
- [ ] O menu está presente em todas as páginas do módulo Configurações.

---

## 7. Notas Adicionais

- O componente deve suportar mudanças futuras nos itens do menu (adição ou remoção de links) de forma fácil.
- Verificar a necessidade dewrapping do componente em `"use client"` para garantir compatibilidade com Next.js App Router e uso de hooks como `usePathname`.

---

*SPEC gerado em: 2026-04-15*
*Planejado por: Vibe Planner*
