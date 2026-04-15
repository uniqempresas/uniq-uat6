# SPEC Técnica — Menu de Contexto do Módulo Fornecedores

**Projeto:** UNIQ Empresas  
**Módulo:** Fornecedores (`/fornecedores`)  
**Data da SPEC:** 2026-04-15  
**Status:** Pronto para implementação

---

## 1. Visão Geral

### 1.1 Objetivo
Criar a estrutura de menu de contexto para o módulo Fornecedores, garantindo navegação fluida entre a listagem e o cadastro de novos fornecedores.

### 1.2 Itens do Menu
| Item | Rota | Descrição |
|------|------|------------|
| Lista Fornecedores | `/fornecedores` | Página principal de listagem |
| Novo Fornecedor | `/fornecedores/novo` | Página de cadastro |

---

## 2. Estrutura de Arquivos

### 2.1 Arquivos Envolvidos
```
src/app/components/fornecedores/
├── FornecedoresPage.tsx    # /fornecedores — listagem principal
└── FornecedorNovoPage.tsx  # /fornecedores/novo — cadastro
```

### 2.2 Arquivos a Modificar
```
src/app/components/fornecedores/FornecedoresPage.tsx  # Adicionar botão no header
```

---

## 3. Implementação

### 3.1 Botão "Novo Fornecedor" no Header

**Localização:** Header da página `FornecedoresPage` (canto superior direito)

**Especificação do Botão:**
```tsx
<Button
  asChild
  className="bg-gradient-to-r from-[#1B6B3A] to-[#15803d] text-white hover:opacity-90 transition-opacity"
>
  <Link to="/fornecedores/novo">
    <Plus className="mr-2 h-4 w-4" />
    Novo Fornecedor
  </Link>
</Button>
```

**Propriedades:**
- **Estilo:** Gradiente emerald (`from-[#1B6B3A] to-[#15803d]`)
- **Texto:** "Novo Fornecedor"
- **Ícone:** `Plus` do Lucide (à esquerda do texto)
- **Link:** `/fornecedores/novo`
- **Tooltip:** Opcional — "Cadastrar novo fornecedor"

### 3.2 Posicionamento no Layout

O botão deve ser posicionado no header da página, alinhado à direita, após o título "Fornecedores".

**Estrutura sugerida do header:**
```tsx
<div className="flex items-center justify-between mb-6">
  <div>
    <h1 className="text-2xl font-bold text-slate-900">Fornecedores</h1>
    <p className="text-slate-500 text-sm mt-1">
      {count} fornecedores encontrados
    </p>
  </div>
  
  <Button
    asChild
    className="bg-gradient-to-r from-[#1B6B3A] to-[#15803d] text-white hover:opacity-90 transition-opacity"
  >
    <Link to="/fornecedores/novo">
      <Plus className="mr-2 h-4 w-4" />
      Novo Fornecedor
    </Link>
  </Button>
</div>
```

---

## 4. Integração com rotas

### 4.1 Rotas Existentes
As rotas já estão configuradas em `src/app/routes.tsx`:

```tsx
{ path: "/fornecedores", Component: FornecedoresPage },
{ path: "/fornecedores/novo", Component: FornecedorNovoPage },
```

### 4.2 Navegação
- O botão direciona para `/fornecedores/novo`
- O formulário de novo fornecedor deve ter botão "Cancelar" que retorna para `/fornecedores`

---

## 5. Componentes shadcn/ui Utilizados

| Componente | Propósito |
|------------|-----------|
| `Button` | Botão "Novo Fornecedor" |
| `Link` | Navegação (via Radix UI) |

### Dependências de ícones
- `Plus` do Lucide ( já está em uso no projeto)

---

## 6. Checklist de Implementação

- [ ] Adicionar botão "Novo Fornecedor" no header de `FornecedoresPage.tsx`
- [ ] Verificar que o link `/fornecedores/novo` está funcionando
- [ ] Verificar que o botão "Cancelar" em `/fornecedores/novo` retorna para a listagem
- [ ] Aplicar estilo de gradiente emerald conforme especificado

---

## 7. Observações

- **Rotas:** Já existem e estão funcionando.
- **Página de listagem:** `FornecedoresPage.tsx` já existe com a estrutura de header.
- **Página de cadastro:** `FornecedorNovoPage.tsx` já existe e renderiza o formulário.

**Tarefa principal:** Apenas adicionar o botão no header existente da página de listagem.

---

**Fim da SPEC**