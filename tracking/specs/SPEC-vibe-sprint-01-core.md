# SPEC - Vibe Sprint 01: Core (Minha Empresa) 🔧

**Data de Criação:** 2026-03-30  
**Versão:** 1.0  
**Status:** Rascunho → Aprovação  
**Arquiteto:** @vibe-planner  
**Implementador:** @vibe-implementer  

---

## 📋 SUMÁRIO

1. [Visão Técnica](#1-visão-técnica)
2. [Estrutura de Pastas](#2-estrutura-de-pastas)
3. [Componentes](#3-componentes)
4. [Hooks Customizados](#4-hooks-customizados)
5. [Integrações](#5-integrações)
6. [Tipos TypeScript](#6-tipos-typescript)
7. [Schemas de Validação](#7-schemas-de-validação)
8. [Sistema de Rotas](#8-sistema-de-rotas)
9. [Database & Migrations](#9-database--migrations)
10. [Sequência de Implementação](#10-sequência-de-implementação)
11. [Checklist Técnico](#11-checklist-técnico)

---

## 1. VISÃO TÉCNICA

### 1.1 Arquitetura de Alto Nível

```
┌─────────────────────────────────────────────────────────────────────┐
│                         LAYER: UI (React 19)                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │  Login   │ │ Cadastro │ │ Dashboard│ │ Empresa  │ │ Config   │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│                     LAYER: State Management                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │  AuthStore   │  │ EmpresaStore │  │  UI Store    │               │
│  │   (Zustand)  │  │   (Zustand)  │  │   (Zustand)  │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
├─────────────────────────────────────────────────────────────────────┤
│                       LAYER: Custom Hooks                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │  useAuth()   │  │ useEmpresa() │  │  useCep()    │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
├─────────────────────────────────────────────────────────────────────┤
│                       LAYER: Services                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│  │   Supabase   │  │   ViaCEP     │  │   Storage    │               │
│  │    Client    │  │     API      │  │   Service    │               │
│  └──────────────┘  └──────────────┘  └──────────────┘               │
├─────────────────────────────────────────────────────────────────────┤
│                       LAYER: External APIs                          │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Supabase (Auth + DB + Storage)  │  ViaCEP (CEP Lookup)      │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.2 Stack Tecnológica Detalhada

| Camada | Tecnologia | Versão | Responsabilidade |
|--------|------------|--------|------------------|
| **Framework** | React | 19.x | UI Components, Hooks |
| **Roteamento** | React Router DOM | 7.x | SPA Navigation |
| **Build** | Vite | 6.x | Dev server, bundling |
| **Estilização** | Tailwind CSS | 3.4.x | Utility-first CSS |
| **Componentes** | shadcn/ui + Radix | latest | Design System |
| **Ícones** | Lucide React | latest | Iconografia |
| **Banco de Dados** | Supabase PostgreSQL | 2.x | Data persistence |
| **Auth** | Supabase Auth | 2.x | JWT authentication |
| **Storage** | Supabase Storage | 2.x | File uploads |
| **Forms** | React Hook Form | 7.x | Form management |
| **Validação** | Zod | 3.x | Schema validation |
| **State** | Zustand | 4.x | Global state |
| **Datas** | date-fns | 3.x | Date utilities |
| **Upload** | react-dropzone | 14.x | Drag & drop files |

### 1.3 Padrões Arquiteturais

#### Padrão: Container/Presentation
- **Containers**: Páginas que gerenciam estado e lógica
- **Presentational**: Componentes puros que recebem props

#### Padrão: Hook Composition
```typescript
// ❌ Evitar: Lógica repetida em componentes
const Component = () => {
  const [data, setData] = useState();
  // ... lógica de fetch
}

// ✅ Fazer: Hook reutilizável
const Component = () => {
  const { data, loading, error } = useData();
}
```

#### Padrão: RLS-First
TODAS as queries devem respeitar as RLS policies do Supabase. Nunca confiar apenas no client-side.

---

## 2. ESTRUTURA DE PASTAS

```
uniq-empresas/
├── 📁 src/
│   ├── 📁 app/                          # App structure (Next.js style no Vite)
│   │   ├── 📁 (auth)/                   # Route group: Auth pages
│   │   │   ├── 📁 login/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 cadastro/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 recuperar-senha/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx               # Auth layout (sem sidebar)
│   │   │
│   │   ├── 📁 (dashboard)/              # Route group: Dashboard pages
│   │   │   ├── 📁 dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 minha-empresa/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 configuracoes/
│   │   │   │   └── page.tsx
│   │   │   ├── 📁 components/           # Layout components
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── header.tsx
│   │   │   │   ├── bottom-nav.tsx
│   │   │   │   └── dashboard-layout.tsx
│   │   │   └── layout.tsx               # Dashboard layout (com sidebar)
│   │   │
│   │   └── 📄 router.tsx                # Main router configuration
│   │
│   ├── 📁 components/
│   │   ├── 📁 ui/                       # shadcn/ui components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   │
│   │   ├── 📁 forms/                    # Form components
│   │   │   ├── login-form.tsx
│   │   │   ├── cadastro/
│   │   │   │   ├── step-empresa.tsx
│   │   │   │   ├── step-admin.tsx
│   │   │   │   ├── step-tipo.tsx
│   │   │   │   └── step-indicator.tsx
│   │   │   └── empresa-form.tsx
│   │   │
│   │   ├── 📁 upload/                   # Upload components
│   │   │   └── logo-upload.tsx
│   │   │
│   │   ├── 📁 onboarding/               # Onboarding components
│   │   │   ├── checklist.tsx
│   │   │   ├── progress-bar.tsx
│   │   │   └── task-item.tsx
│   │   │
│   │   ├── 📁 mel/                      # MEL widget
│   │   │   └── widget-mel.tsx
│   │   │
│   │   └── 📁 layout/                   # Shared layout components
│   │       ├── logo.tsx
│   │       └── footer.tsx
│   │
│   ├── 📁 hooks/                        # Custom React hooks
│   │   ├── use-auth.ts
│   │   ├── use-empresa.ts
│   │   ├── use-usuario.ts
│   │   ├── use-configuracoes.ts
│   │   ├── use-cep.ts
│   │   └── use-mobile.ts
│   │
│   ├── 📁 lib/                          # Utilities & configs
│   │   ├── 📁 supabase/
│   │   │   ├── client.ts                # Supabase client
│   │   │   ├── types.ts                 # Database types
│   │   │   └── auth.ts                  # Auth helpers
│   │   ├── 📁 services/
│   │   │   ├── empresa.service.ts
│   │   │   ├── usuario.service.ts
│   │   │   ├── configuracoes.service.ts
│   │   │   └── storage.service.ts
│   │   ├── 📁 mocks/
│   │   │   ├── empresa.mock.ts
│   │   │   └── usuario.mock.ts
│   │   ├── utils.ts                     # General utilities
│   │   ├── constants.ts                 # App constants
│   │   └── validations.ts               # Helper validations
│   │
│   ├── 📁 types/                        # TypeScript types
│   │   ├── empresa.ts
│   │   ├── usuario.ts
│   │   ├── configuracoes.ts
│   │   └── index.ts
│   │
│   ├── 📁 stores/                       # Zustand stores
│   │   ├── auth-store.ts
│   │   ├── empresa-store.ts
│   │   └── ui-store.ts
│   │
│   ├── 📁 schemas/                      # Zod schemas
│   │   ├── auth.schema.ts
│   │   ├── empresa.schema.ts
│   │   └── index.ts
│   │
│   └── 📄 main.tsx                      # App entry point
│
├── 📁 supabase/                         # Supabase migrations
│   ├── 📁 migrations/
│   │   ├── 001_create_me_empresas.sql
│   │   ├── 002_create_me_usuarios.sql
│   │   ├── 003_create_me_configuracoes.sql
│   │   ├── 004_setup_rls.sql
│   │   ├── 005_setup_triggers.sql
│   │   └── 006_setup_storage.sql
│   └── seed.sql
│
├── 📁 public/                           # Static assets
│   ├── logo-uniq.svg
│   └── favicon.ico
│
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 tsconfig.json
├── 📄 tailwind.config.ts
├── 📄 components.json                   # shadcn/ui config
└── 📄 .env.example
```

---

## 3. COMPONENTES

### 3.1 UI Components (shadcn/ui)

Instalar na seguinte ordem:

```bash
# Core components
npx shadcn add button input label card

# Navigation & Layout
npx shadcn add tabs progress avatar separator

# Feedback
npx shadcn add toast skeleton badge

# Forms
npx shadcn add checkbox switch select textarea

# Overlays
npx shadcn add dialog sheet dropdown-menu tooltip

# Utility
npx shadcn add scroll-area
```

### 3.2 Componentes Customizados

#### 3.2.1 Layout Components

**Sidebar (`components/layout/sidebar.tsx`)**
```typescript
interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
  disabled?: boolean;
  badge?: string;
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Building2, label: 'Minha Empresa', href: '/minha-empresa' },
  { icon: Users, label: 'CRM', href: '/crm', disabled: true },
  { icon: ShoppingCart, label: 'Vendas', href: '/vendas', disabled: true },
  { icon: Package, label: 'Estoque', href: '/estoque', disabled: true },
  { icon: Wallet, label: 'Financeiro', href: '/financeiro', disabled: true },
  { icon: Settings, label: 'Configurações', href: '/configuracoes' },
];
```

**Header (`components/layout/header.tsx`)**
```typescript
interface HeaderProps {
  companyName: string;
  user: Usuario;
  onMenuToggle: () => void;
  className?: string;
}
```

**BottomNav (`components/layout/bottom-nav.tsx`)**
```typescript
interface BottomNavProps {
  className?: string;
}

// Mobile only, 5 items fixos
// Dashboard, Empresa, Add (FAB), Perfil, Config
```

#### 3.2.2 Form Components

**LoginForm (`components/forms/login-form.tsx`)**
```typescript
interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}
```

**CadastroStepIndicator (`components/forms/cadastro/step-indicator.tsx`)**
```typescript
interface StepIndicatorProps {
  currentStep: number; // 1, 2, 3
  steps: { label: string; description: string }[];
}

// Visual:
// ●──────●──────○
// 1      2      3
// Empresa Admin Tipo
```

**CadastroStepEmpresa (`components/forms/cadastro/step-empresa.tsx`)**
```typescript
interface StepEmpresaProps {
  defaultValues?: Partial<EmpresaStepData>;
  onNext: (data: EmpresaStepData) => void;
}

interface EmpresaStepData {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia?: string;
}
```

**CadastroStepAdmin (`components/forms/cadastro/step-admin.tsx`)**
```typescript
interface StepAdminProps {
  defaultValues?: Partial<AdminStepData>;
  onNext: (data: AdminStepData) => void;
  onBack: () => void;
}

interface AdminStepData {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  confirmarSenha: string;
}
```

**CadastroStepTipo (`components/forms/cadastro/step-tipo.tsx`)**
```typescript
interface StepTipoProps {
  defaultValue?: TipoNegocio;
  onSubmit: (tipo: TipoNegocio) => void;
  onBack: () => void;
}

// Cards selecionáveis:
// 🏪 Varejo  🛠️ Serviço  🏭 Indústria  📦 Atacado
```

**EmpresaForm (`components/forms/empresa-form.tsx`)**
```typescript
interface EmpresaFormProps {
  empresa: Empresa;
  onSubmit: (data: UpdateEmpresaData) => Promise<void>;
  isLoading?: boolean;
}
```

#### 3.2.3 Upload Components

**LogoUpload (`components/upload/logo-upload.tsx`)**
```typescript
interface LogoUploadProps {
  currentLogo?: string | null;
  onUpload: (file: File) => Promise<string>; // Returns URL
  onRemove: () => void;
  maxSizeMB?: number;
  acceptedTypes?: string[];
}

// Estados:
// - empty: "Arraste ou clique para fazer upload"
// - dragging: "Solte aqui"
// - uploading: Spinner + progresso
// - preview: Imagem + botão remover
// - error: Toast
```

#### 3.2.4 Onboarding Components

**OnboardingChecklist (`components/onboarding/checklist.tsx`)**
```typescript
interface OnboardingChecklistProps {
  progress: number; // 0-100
  tasks: OnboardingTask[];
  onTaskClick?: (taskId: string) => void;
}

interface OnboardingTask {
  id: string;
  label: string;
  completed: boolean;
  completedAt?: string;
  href?: string;
}
```

**ProgressBar (`components/onboarding/progress-bar.tsx`)**
```typescript
interface ProgressBarProps {
  progress: number; // 0-100
  totalTasks: number;
  completedTasks: number;
  showLabel?: boolean;
}
```

#### 3.2.5 MEL Widget

**WidgetMEL (`components/mel/widget-mel.tsx`)**
```typescript
interface WidgetMELProps {
  message: string;
  consultantName: string;
  consultantAvatar?: string;
  context?: 'cadastro_completo' | 'primeira_venda' | 'day_3_inativo' | 'default';
  onReply?: () => void;
}

// Mensagens pré-definidas por contexto
const messages = {
  cadastro_completo: (nome: string) => `Oi ${nome}! Vi que você completou o cadastro. Que tal agora adicionarmos seus primeiros produtos?`,
  primeira_venda: (nome: string) => `Parabéns pela primeira venda! 🎉 Que tal agora conectar seu WhatsApp para atender clientes?`,
  day_3_inativo: (nome: string) => `Sentiu falta de algo no UNIQ? Me conta como posso ajudar você a organizar seu negócio.`,
  default: () => 'Como posso ajudar você hoje?',
};
```

---

## 4. HOOKS CUSTOMIZADOS

### 4.1 useAuth (`hooks/use-auth.ts`)

```typescript
interface UseAuthReturn {
  // State
  user: Usuario | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  
  // Session
  refreshSession: () => Promise<void>;
}

interface RegisterData {
  empresa: EmpresaStepData;
  admin: AdminStepData;
  tipoNegocio: TipoNegocio;
}

function useAuth(): UseAuthReturn {
  // Implementação deve:
  // 1. Verificar sessão ativa no mount
  // 2. Integrar com Supabase Auth
  // 3. Buscar dados do usuário na tabela me_usuarios
  // 4. Gerenciar loading states
}
```

### 4.2 useEmpresa (`hooks/use-empresa.ts`)

```typescript
interface UseEmpresaReturn {
  // State
  empresa: Empresa | null;
  isLoading: boolean;
  error: Error | null;
  
  // Actions
  fetchEmpresa: () => Promise<void>;
  updateEmpresa: (data: UpdateEmpresaDTO) => Promise<void>;
  updateLogo: (file: File) => Promise<string>;
  removeLogo: () => Promise<void>;
  updateCores: (cores: CoresMarca) => Promise<void>;
  
  // Helpers
  refresh: () => Promise<void>;
}

interface UpdateEmpresaDTO {
  razaoSocial?: string;
  nomeFantasia?: string;
  email?: string;
  telefone?: string;
  website?: string;
  endereco?: Endereco;
  cores?: CoresMarca;
}
```

### 4.3 useUsuario (`hooks/use-usuario.ts`)

```typescript
interface UseUsuarioReturn {
  usuario: Usuario | null;
  isLoading: boolean;
  updateProfile: (data: UpdateUsuarioDTO) => Promise<void>;
  updateAvatar: (file: File) => Promise<string>;
}

interface UpdateUsuarioDTO {
  nome?: string;
  telefone?: string;
  preferencias?: Partial<Usuario['preferencias']>;
}
```

### 4.4 useConfiguracoes (`hooks/use-configuracoes.ts`)

```typescript
interface UseConfiguracoesReturn {
  configuracoes: Configuracoes | null;
  isLoading: boolean;
  updateConfiguracoes: (data: UpdateConfiguracoesDTO) => Promise<void>;
  toggleNotificacao: (tipo: 'whatsapp' | 'email') => Promise<void>;
}

interface UpdateConfiguracoesDTO {
  notificacoesWhatsapp?: boolean;
  notificacoesEmail?: boolean;
  moeda?: string;
  timezone?: string;
  idioma?: string;
  configuracoes?: Record<string, any>;
}
```

### 4.5 useCep (`hooks/use-cep.ts`)

```typescript
interface UseCepReturn {
  endereco: Endereco | null;
  isLoading: boolean;
  error: string | null;
  buscarCep: (cep: string) => Promise<Endereco | null>;
  clear: () => void;
}

interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
}

// Integração: ViaCEP API
// https://viacep.com.br/ws/{cep}/json/
```

### 4.6 useMobile (`hooks/use-mobile.ts`)

```typescript
interface UseMobileReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

// Breakpoints (Tailwind):
// - Mobile: < 768px
// - Tablet: 768px - 1024px
// - Desktop: > 1024px
```

---

## 5. INTEGRAÇÕES

### 5.1 Supabase Client (`lib/supabase/client.ts`)

```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storageKey: 'uniq-auth-token',
    storage: localStorage,
  },
});

// Helper para headers de autenticação
export const getAuthHeaders = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return {
    Authorization: `Bearer ${session?.access_token}`,
  };
};
```

### 5.2 Database Types (`lib/supabase/types.ts`)

```typescript
export type Database = {
  public: {
    Tables: {
      me_empresas: {
        Row: {
          id: string;
          cnpj: string;
          razao_social: string;
          nome_fantasia: string | null;
          email: string;
          telefone: string | null;
          website: string | null;
          endereco: Endereco;
          logo_url: string | null;
          cores: CoresMarca;
          tipo_negocio: TipoNegocio | null;
          status: StatusEmpresa;
          onboarding_progress: number;
          onboarding_checklist: OnboardingChecklist;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          // ... campos obrigatórios para insert
        };
        Update: {
          // ... campos opcionais para update
        };
      };
      me_usuarios: {
        // ... similar structure
      };
      me_configuracoes: {
        // ... similar structure
      };
    };
  };
};
```

### 5.3 Auth Helpers (`lib/supabase/auth.ts`)

```typescript
import { supabase } from './client';

export const auth = {
  // Sign in
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  // Sign up
  async signUp(email: string, password: string, metadata: object) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: metadata },
    });
    if (error) throw error;
    return data;
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  // Reset password
  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/recuperar-senha`,
    });
    if (error) throw error;
  },

  // Get current session
  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session;
  },

  // Listen to auth changes
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
```

### 5.4 ViaCEP Service (`lib/services/viacep.service.ts`)

```typescript
import { z } from 'zod';

const ViaCepResponseSchema = z.object({
  cep: z.string(),
  logradouro: z.string(),
  complemento: z.string(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string(),
  ibge: z.string(),
  gia: z.string(),
  ddd: z.string(),
  siafi: z.string(),
  erro: z.boolean().optional(),
});

export type ViaCepResponse = z.infer<typeof ViaCepResponseSchema>;

export const viaCep = {
  async buscarEndereco(cep: string): Promise<ViaCepResponse> {
    // Remove non-digits
    const cleanCep = cep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      throw new Error('CEP deve ter 8 dígitos');
    }

    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar CEP');
    }

    const data = await response.json();
    const parsed = ViaCepResponseSchema.parse(data);

    if (parsed.erro) {
      throw new Error('CEP não encontrado');
    }

    return parsed;
  },

  toEndereco(viaCepData: ViaCepResponse) {
    return {
      cep: viaCepData.cep,
      logradouro: viaCepData.logradouro,
      bairro: viaCepData.bairro,
      cidade: viaCepData.localidade,
      estado: viaCepData.uf,
    };
  },
};
```

### 5.5 Storage Service (`lib/services/storage.service.ts`)

```typescript
import { supabase } from '@/lib/supabase/client';

export const storage = {
  async uploadLogo(file: File, empresaId: string): Promise<string> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${empresaId}-${Date.now()}.${fileExt}`;
    const filePath = `logos/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('empresas')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('empresas')
      .getPublicUrl(filePath);

    return publicUrl;
  },

  async removeLogo(logoUrl: string): Promise<void> {
    // Extract path from URL
    const url = new URL(logoUrl);
    const pathParts = url.pathname.split('/');
    const filePath = pathParts.slice(pathParts.indexOf('empresas') + 1).join('/');

    const { error } = await supabase.storage
      .from('empresas')
      .remove([filePath]);

    if (error) throw error;
  },

  validateLogoFile(file: File): { valid: boolean; error?: string } {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ['image/png', 'image/jpeg', 'image/svg+xml'];

    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'Formato não suportado. Use PNG, JPG ou SVG.' };
    }

    if (file.size > maxSize) {
      return { valid: false, error: 'Arquivo muito grande. Máximo 5MB.' };
    }

    return { valid: true };
  },
};
```

---

## 6. TIPOS TYPESCRIPT

### 6.1 Empresa Types (`types/empresa.ts`)

```typescript
// Enums
export type TipoNegocio = 'varejo' | 'servico' | 'industria' | 'atacado';
export type StatusEmpresa = 'ativo' | 'inativo' | 'suspenso';

// Sub-types
export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}

export interface CoresMarca {
  primary: string;
  secondary: string;
}

export interface OnboardingChecklist {
  perfil_completo: boolean;
  primeiro_produto: boolean;
  whatsapp_conectado: boolean;
  pagamentos_configurados: boolean;
  primeiro_cliente: boolean;
  primeira_venda: boolean;
  colaborador_convidado: boolean;
}

// Main Entity
export interface Empresa {
  id: string;
  cnpj: string;
  razao_social: string;
  nome_fantasia: string | null;
  email: string;
  telefone: string | null;
  website: string | null;
  endereco: Endereco;
  logo_url: string | null;
  cores: CoresMarca;
  tipo_negocio: TipoNegocio | null;
  status: StatusEmpresa;
  onboarding_progress: number;
  onboarding_checklist: OnboardingChecklist;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

// DTOs
export interface CreateEmpresaDTO {
  cnpj: string;
  razao_social: string;
  nome_fantasia?: string;
  email: string;
  tipo_negocio: TipoNegocio;
}

export interface UpdateEmpresaDTO {
  razao_social?: string;
  nome_fantasia?: string;
  email?: string;
  telefone?: string;
  website?: string;
  endereco?: Partial<Endereco>;
  cores?: Partial<CoresMarca>;
  tipo_negocio?: TipoNegocio;
}
```

### 6.2 Usuário Types (`types/usuario.ts`)

```typescript
// Enums
export type PerfilUsuario = 'admin' | 'gerente' | 'vendedor' | 'visualizador';
export type StatusUsuario = 'ativo' | 'inativo' | 'pendente';

// Main Entity
export interface Usuario {
  id: string;
  empresa_id: string;
  email: string;
  nome: string;
  telefone: string | null;
  avatar_url: string | null;
  perfil: PerfilUsuario;
  status: StatusUsuario;
  ultimo_login: string | null;
  preferencias: {
    tema: 'light' | 'dark';
    notificacoes_email: boolean;
    notificacoes_whatsapp: boolean;
  };
  created_at: string;
  updated_at: string;
}

// DTOs
export interface CreateUsuarioDTO {
  email: string;
  nome: string;
  telefone?: string;
  empresa_id: string;
  perfil?: PerfilUsuario;
}

export interface UpdateUsuarioDTO {
  nome?: string;
  telefone?: string;
  avatar_url?: string | null;
  preferencias?: Partial<Usuario['preferencias']>;
}
```

### 6.3 Configurações Types (`types/configuracoes.ts`)

```typescript
export interface Configuracoes {
  id: string;
  empresa_id: string;
  notificacoes_whatsapp: boolean;
  notificacoes_email: boolean;
  moeda: string;
  timezone: string;
  idioma: string;
  configuracoes: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface UpdateConfiguracoesDTO {
  notificacoes_whatsapp?: boolean;
  notificacoes_email?: boolean;
  moeda?: string;
  timezone?: string;
  idioma?: string;
  configuracoes?: Record<string, any>;
}
```

### 6.4 Index (`types/index.ts`)

```typescript
export * from './empresa';
export * from './usuario';
export * from './configuracoes';

// Utility types
export interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}
```

---

## 7. SCHEMAS DE VALIDAÇÃO

### 7.1 Auth Schemas (`schemas/auth.schema.ts`)

```typescript
import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  rememberMe: z.boolean().default(false),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export const CadastroEmpresaSchema = z.object({
  cnpj: z
    .string()
    .min(1, 'CNPJ é obrigatório')
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido'),
  razaoSocial: z
    .string()
    .min(1, 'Razão Social é obrigatória')
    .max(255, 'Máximo 255 caracteres'),
  nomeFantasia: z
    .string()
    .max(255, 'Máximo 255 caracteres')
    .optional(),
});

export type CadastroEmpresaData = z.infer<typeof CadastroEmpresaSchema>;

export const CadastroAdminSchema = z.object({
  nome: z
    .string()
    .min(1, 'Nome é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(255, 'Máximo 255 caracteres'),
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  telefone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido'),
  senha: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter pelo menos 1 letra maiúscula')
    .regex(/\d/, 'Senha deve conter pelo menos 1 número'),
  confirmarSenha: z.string().min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: 'Senhas não conferem',
  path: ['confirmarSenha'],
});

export type CadastroAdminData = z.infer<typeof CadastroAdminSchema>;

export const CadastroTipoSchema = z.object({
  tipoNegocio: z.enum(['varejo', 'servico', 'industria', 'atacado'], {
    required_error: 'Selecione o tipo de negócio',
  }),
});

export type CadastroTipoData = z.infer<typeof CadastroTipoSchema>;

export const RecuperarSenhaSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
});

export type RecuperarSenhaData = z.infer<typeof RecuperarSenhaSchema>;

export const NovaSenhaSchema = z.object({
  senha: z
    .string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter pelo menos 1 letra maiúscula')
    .regex(/\d/, 'Senha deve conter pelo menos 1 número'),
  confirmarSenha: z.string(),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: 'Senhas não conferem',
  path: ['confirmarSenha'],
});

export type NovaSenhaData = z.infer<typeof NovaSenhaSchema>;
```

### 7.2 Empresa Schemas (`schemas/empresa.schema.ts`)

```typescript
import { z } from 'zod';

export const EnderecoSchema = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
  logradouro: z.string().min(1, 'Logradouro é obrigatório'),
  numero: z.string().min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string().min(1, 'Bairro é obrigatório'),
  cidade: z.string().min(1, 'Cidade é obrigatória'),
  estado: z.string().length(2, 'Estado inválido'),
});

export const CoresSchema = z.object({
  primary: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Cor inválida'),
  secondary: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Cor inválida'),
});

export const EmpresaFormSchema = z.object({
  razaoSocial: z.string().min(1, 'Razão Social é obrigatória'),
  nomeFantasia: z.string().optional(),
  email: z.string().email('Email inválido'),
  telefone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido'),
  website: z.string().url('URL inválida').optional().or(z.literal('')),
  endereco: EnderecoSchema,
  cores: CoresSchema,
});

export type EmpresaFormData = z.infer<typeof EmpresaFormSchema>;
```

### 7.3 Index (`schemas/index.ts`)

```typescript
export * from './auth.schema';
export * from './empresa.schema';
```

---

## 8. SISTEMA DE ROTAS

### 8.1 Router Configuration (`app/router.tsx`)

```typescript
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/stores/auth-store';

// Layouts
import AuthLayout from '@/app/(auth)/layout';
import DashboardLayout from '@/app/(dashboard)/components/dashboard-layout';

// Auth Pages
import LoginPage from '@/app/(auth)/login/page';
import CadastroPage from '@/app/(auth)/cadastro/page';
import RecuperarSenhaPage from '@/app/(auth)/recuperar-senha/page';

// Dashboard Pages
import DashboardPage from '@/app/(dashboard)/dashboard/page';
import EmpresaPage from '@/app/(dashboard)/minha-empresa/page';
import ConfiguracoesPage from '@/app/(dashboard)/configuracoes/page';

// Protected Route Guard
function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuthStore();
  
  if (isLoading) return <div>Carregando...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  
  return <Outlet />;
}

// Public Route Guard (redirect if authenticated)
function PublicRoute() {
  const { isAuthenticated } = useAuthStore();
  
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
          { path: '/cadastro', element: <CadastroPage /> },
          { path: '/recuperar-senha', element: <RecuperarSenhaPage /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/minha-empresa', element: <EmpresaPage /> },
          { path: '/configuracoes', element: <ConfiguracoesPage /> },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '*',
    element: <div>Página não encontrada (404)</div>,
  },
]);
```

### 8.2 Route Definitions

| Rota | Componente | Layout | Auth | Descrição |
|------|------------|--------|------|-----------|
| `/login` | LoginPage | AuthLayout | Pública | Tela de login |
| `/cadastro` | CadastroPage | AuthLayout | Pública | Cadastro multi-step |
| `/recuperar-senha` | RecuperarSenhaPage | AuthLayout | Pública | Recuperação de senha |
| `/dashboard` | DashboardPage | DashboardLayout | Protegida | Dashboard inicial |
| `/minha-empresa` | EmpresaPage | DashboardLayout | Protegida | Edição de empresa |
| `/configuracoes` | ConfiguracoesPage | DashboardLayout | Protegida | Configurações gerais |

---

## 9. DATABASE & MIGRATIONS

### 9.1 Migration 001: Create me_empresas (`supabase/migrations/001_create_me_empresas.sql`)

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create me_empresas table
CREATE TABLE me_empresas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cnpj VARCHAR(18) UNIQUE NOT NULL,
  razao_social VARCHAR(255) NOT NULL,
  nome_fantasia VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  website VARCHAR(255),
  
  -- Endereço estruturado
  endereco JSONB DEFAULT '{
    "cep": "",
    "logradouro": "",
    "numero": "",
    "complemento": "",
    "bairro": "",
    "cidade": "",
    "estado": ""
  }'::jsonb,
  
  -- Identidade visual
  logo_url TEXT,
  cores JSONB DEFAULT '{
    "primary": "#3B82F6",
    "secondary": "#10B981"
  }'::jsonb,
  
  -- Classificação
  tipo_negocio VARCHAR(50), -- varejo, servico, industria, atacado
  status VARCHAR(20) DEFAULT 'ativo', -- ativo, inativo, suspenso
  
  -- Onboarding
  onboarding_progress INTEGER DEFAULT 0,
  onboarding_checklist JSONB DEFAULT '{
    "perfil_completo": false,
    "primeiro_produto": false,
    "whatsapp_conectado": false,
    "pagamentos_configurados": false,
    "primeiro_cliente": false,
    "primeira_venda": false,
    "colaborador_convidado": false
  }'::jsonb,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Soft delete
  deleted_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes
CREATE INDEX idx_me_empresas_cnpj ON me_empresas(cnpj);
CREATE INDEX idx_me_empresas_status ON me_empresas(status);
CREATE INDEX idx_me_empresas_tipo_negocio ON me_empresas(tipo_negocio);
CREATE INDEX idx_me_empresas_created_at ON me_empresas(created_at);
```

### 9.2 Migration 002: Create me_usuarios (`supabase/migrations/002_create_me_usuarios.sql`)

```sql
-- Create me_usuarios table
CREATE TABLE me_usuarios (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  
  -- Dados pessoais
  email VARCHAR(255) UNIQUE NOT NULL,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  avatar_url TEXT,
  
  -- Permissões
  perfil VARCHAR(50) DEFAULT 'admin', -- admin, gerente, vendedor, visualizador
  
  -- Status
  status VARCHAR(20) DEFAULT 'ativo', -- ativo, inativo, pendente
  ultimo_login TIMESTAMP WITH TIME ZONE,
  
  -- Preferências
  preferencias JSONB DEFAULT '{
    "tema": "light",
    "notificacoes_email": true,
    "notificacoes_whatsapp": false
  }'::jsonb,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_me_usuarios_empresa ON me_usuarios(empresa_id);
CREATE INDEX idx_me_usuarios_email ON me_usuarios(email);
CREATE INDEX idx_me_usuarios_status ON me_usuarios(status);
CREATE INDEX idx_me_usuarios_perfil ON me_usuarios(perfil);
```

### 9.3 Migration 003: Create me_configuracoes (`supabase/migrations/003_create_me_configuracoes.sql`)

```sql
-- Create me_configuracoes table
CREATE TABLE me_configuracoes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  empresa_id UUID REFERENCES me_empresas(id) ON DELETE CASCADE,
  
  -- Notificações
  notificacoes_whatsapp BOOLEAN DEFAULT true,
  notificacoes_email BOOLEAN DEFAULT true,
  
  -- Configurações regionais
  moeda VARCHAR(10) DEFAULT 'BRL',
  timezone VARCHAR(50) DEFAULT 'America/Sao_Paulo',
  idioma VARCHAR(10) DEFAULT 'pt-BR',
  
  -- Configurações personalizadas
  configuracoes JSONB DEFAULT '{}'::jsonb,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Restrição: uma configuração por empresa
  CONSTRAINT unique_empresa_config UNIQUE (empresa_id)
);

-- Create indexes
CREATE INDEX idx_me_configuracoes_empresa ON me_configuracoes(empresa_id);
```

### 9.4 Migration 004: Setup RLS (`supabase/migrations/004_setup_rls.sql`)

```sql
-- Enable RLS on all tables
ALTER TABLE me_empresas ENABLE ROW LEVEL SECURITY;
ALTER TABLE me_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE me_configuracoes ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own company's data
CREATE POLICY company_isolation_empresas ON me_empresas
  FOR ALL
  USING (
    id IN (
      SELECT empresa_id FROM me_usuarios 
      WHERE me_usuarios.id = auth.uid()
    )
  );

CREATE POLICY company_isolation_usuarios ON me_usuarios
  FOR ALL
  USING (
    empresa_id IN (
      SELECT empresa_id FROM me_usuarios 
      WHERE me_usuarios.id = auth.uid()
    )
  );

CREATE POLICY company_isolation_configuracoes ON me_configuracoes
  FOR ALL
  USING (
    empresa_id IN (
      SELECT empresa_id FROM me_usuarios 
      WHERE me_usuarios.id = auth.uid()
    )
  );

-- Policy: Users can only update their own profile
CREATE POLICY user_own_profile ON me_usuarios
  FOR UPDATE
  USING (id = auth.uid());

-- Policy: Allow insert during signup (handled by trigger)
CREATE POLICY allow_insert_empresa ON me_empresas
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY allow_insert_usuario ON me_usuarios
  FOR INSERT
  WITH CHECK (true);
```

### 9.5 Migration 005: Setup Triggers (`supabase/migrations/005_setup_triggers.sql`)

```sql
-- Function to update updated_at automatically
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers to all tables
CREATE TRIGGER update_me_empresas_updated_at
  BEFORE UPDATE ON me_empresas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_me_usuarios_updated_at
  BEFORE UPDATE ON me_usuarios
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_me_configuracoes_updated_at
  BEFORE UPDATE ON me_configuracoes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to create default config when empresa is created
CREATE OR REPLACE FUNCTION create_default_config()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO me_configuracoes (empresa_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_create_default_config
  AFTER INSERT ON me_empresas
  FOR EACH ROW EXECUTE FUNCTION create_default_config();

-- Function to update onboarding progress
CREATE OR REPLACE FUNCTION update_onboarding_progress()
RETURNS TRIGGER AS $$
DECLARE
  completed_tasks INTEGER;
  total_tasks INTEGER := 7;
  progress_percent INTEGER;
BEGIN
  -- Count completed tasks
  SELECT (
    (NEW.onboarding_checklist->>'perfil_completo')::boolean::int +
    (NEW.onboarding_checklist->>'primeiro_produto')::boolean::int +
    (NEW.onboarding_checklist->>'whatsapp_conectado')::boolean::int +
    (NEW.onboarding_checklist->>'pagamentos_configurados')::boolean::int +
    (NEW.onboarding_checklist->>'primeiro_cliente')::boolean::int +
    (NEW.onboarding_checklist->>'primeira_venda')::boolean::int +
    (NEW.onboarding_checklist->>'colaborador_convidado')::boolean::int
  ) INTO completed_tasks;
  
  -- Calculate percentage
  progress_percent := (completed_tasks * 100) / total_tasks;
  
  -- Update progress
  NEW.onboarding_progress := progress_percent;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_onboarding_progress
  BEFORE UPDATE ON me_empresas
  FOR EACH ROW
  WHEN (OLD.onboarding_checklist IS DISTINCT FROM NEW.onboarding_checklist)
  EXECUTE FUNCTION update_onboarding_progress();
```

### 9.6 Migration 006: Setup Storage (`supabase/migrations/006_setup_storage.sql`)

```sql
-- Create storage bucket for empresa logos
INSERT INTO storage.buckets (id, name, public)
VALUES ('empresas', 'empresas', true)
ON CONFLICT (id) DO NOTHING;

-- Policy: Allow authenticated users to upload to their empresa folder
CREATE POLICY empresa_logo_upload ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'empresas' AND
    auth.role() = 'authenticated'
  );

-- Policy: Allow users to read logos
CREATE POLICY empresa_logo_read ON storage.objects
  FOR SELECT
  USING (bucket_id = 'empresas');

-- Policy: Allow users to delete their own logos
CREATE POLICY empresa_logo_delete ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'empresas' AND
    auth.role() = 'authenticated'
  );
```

---

## 10. SEQUÊNCIA DE IMPLEMENTAÇÃO

### FASE 1: Setup Inicial (Dia 1)

**Ordem de criação dos arquivos:**

1. ✅ `package.json` - Dependências
2. ✅ `tsconfig.json` - Configuração TypeScript
3. ✅ `vite.config.ts` - Configuração Vite
4. ✅ `tailwind.config.ts` - Configuração Tailwind
5. ✅ `components.json` - Configuração shadcn/ui
6. ✅ `.env.example` - Template de variáveis de ambiente

**Comandos:**
```bash
# Inicializar projeto Vite
echo "my-app" | npx create-vite@latest uniq-empresas --template react-ts

# Instalar dependências
cd uniq-empresas
npm install

# Instalar shadcn/ui
npx shadcn@latest init --yes --defaults

# Instalar dependências do projeto
npm install @supabase/supabase-js react-hook-form @hookform/resolvers zod zustand date-fns react-dropzone lucide-react

# Instalar componentes shadcn
npx shadcn add button input label card tabs progress avatar separator toast skeleton badge checkbox switch select textarea dialog sheet dropdown-menu tooltip scroll-area
```

### FASE 2: Tipos e Schemas (Dia 1-2)

**Ordem de criação:**

7. ✅ `src/types/empresa.ts` - Tipos de Empresa
8. ✅ `src/types/usuario.ts` - Tipos de Usuário
9. ✅ `src/types/configuracoes.ts` - Tipos de Configurações
10. ✅ `src/types/index.ts` - Exportações
11. ✅ `src/schemas/auth.schema.ts` - Schemas de Auth
12. ✅ `src/schemas/empresa.schema.ts` - Schemas de Empresa
13. ✅ `src/schemas/index.ts` - Exportações

### FASE 3: Supabase Setup (Dia 2)

**Ordem de criação:**

14. ✅ `supabase/migrations/001_create_me_empresas.sql`
15. ✅ `supabase/migrations/002_create_me_usuarios.sql`
16. ✅ `supabase/migrations/003_create_me_configuracoes.sql`
17. ✅ `supabase/migrations/004_setup_rls.sql`
18. ✅ `supabase/migrations/005_setup_triggers.sql`
19. ✅ `supabase/migrations/006_setup_storage.sql`
20. ✅ `src/lib/supabase/types.ts` - Database types
21. ✅ `src/lib/supabase/client.ts` - Cliente Supabase
22. ✅ `src/lib/supabase/auth.ts` - Helpers de Auth

**Setup no Supabase Console:**
- Criar projeto no Supabase
- Executar migrations via SQL Editor
- Configurar Auth → Settings → Site URL
- Configurar Storage → Buckets → empresas (public)

### FASE 4: Hooks (Dia 3)

**Ordem de criação:**

23. ✅ `src/hooks/use-auth.ts`
24. ✅ `src/hooks/use-empresa.ts`
25. ✅ `src/hooks/use-usuario.ts`
26. ✅ `src/hooks/use-configuracoes.ts`
27. ✅ `src/hooks/use-cep.ts`
28. ✅ `src/hooks/use-mobile.ts`

### FASE 5: Services (Dia 3-4)

**Ordem de criação:**

29. ✅ `src/lib/services/viacep.service.ts`
30. ✅ `src/lib/services/storage.service.ts`
31. ✅ `src/lib/services/empresa.service.ts`
32. ✅ `src/lib/services/usuario.service.ts`
33. ✅ `src/lib/services/configuracoes.service.ts`

### FASE 6: Stores (Dia 4)

**Ordem de criação:**

34. ✅ `src/stores/auth-store.ts`
35. ✅ `src/stores/empresa-store.ts`
36. ✅ `src/stores/ui-store.ts`

### FASE 7: Componentes UI Base (Dia 4-5)

**Ordem de criação:**

37. ✅ `src/app/(dashboard)/components/sidebar.tsx`
38. ✅ `src/app/(dashboard)/components/header.tsx`
39. ✅ `src/app/(dashboard)/components/bottom-nav.tsx`
40. ✅ `src/app/(dashboard)/components/dashboard-layout.tsx`
41. ✅ `src/app/(auth)/layout.tsx`
42. ✅ `src/components/layout/logo.tsx`

### FASE 8: Componentes de Formulário (Dia 5-6)

**Ordem de criação:**

43. ✅ `src/components/forms/login-form.tsx`
44. ✅ `src/components/forms/cadastro/step-indicator.tsx`
45. ✅ `src/components/forms/cadastro/step-empresa.tsx`
46. ✅ `src/components/forms/cadastro/step-admin.tsx`
47. ✅ `src/components/forms/cadastro/step-tipo.tsx`
48. ✅ `src/components/forms/empresa-form.tsx`

### FASE 9: Componentes de Upload e Onboarding (Dia 6)

**Ordem de criação:**

49. ✅ `src/components/upload/logo-upload.tsx`
50. ✅ `src/components/onboarding/progress-bar.tsx`
51. ✅ `src/components/onboarding/task-item.tsx`
52. ✅ `src/components/onboarding/checklist.tsx`
53. ✅ `src/components/mel/widget-mel.tsx`

### FASE 10: Páginas Auth (Dia 7)

**Ordem de criação:**

54. ✅ `src/app/(auth)/login/page.tsx`
55. ✅ `src/app/(auth)/cadastro/page.tsx`
56. ✅ `src/app/(auth)/recuperar-senha/page.tsx`

### FASE 11: Páginas Dashboard (Dia 7-8)

**Ordem de criação:**

57. ✅ `src/app/(dashboard)/dashboard/page.tsx`
58. ✅ `src/app/(dashboard)/minha-empresa/page.tsx`
59. ✅ `src/app/(dashboard)/configuracoes/page.tsx`

### FASE 12: Router e App Entry (Dia 8)

**Ordem de criação:**

60. ✅ `src/app/router.tsx`
61. ✅ `src/main.tsx`
62. ✅ `index.html`

### FASE 13: Estilos e Assets (Dia 9)

**Ordem de criação:**

63. ✅ `src/styles/globals.css`
64. ✅ `public/logo-uniq.svg`
65. ✅ `src/lib/constants.ts`
66. ✅ `src/lib/utils.ts`
67. ✅ `src/lib/validations.ts`

### FASE 14: Testes e Ajustes (Dia 10)

**Tarefas:**

68. ✅ Testar fluxo de cadastro completo
69. ✅ Testar login/logout
70. ✅ Testar upload de logo
71. ✅ Testar busca de CEP
72. ✅ Testar responsividade (mobile, tablet, desktop)
73. ✅ Verificar RLS policies
74. ✅ Validar acessibilidade (ARIA labels, keyboard nav)
75. ✅ Performance audit (Lighthouse)

---

## 11. CHECKLIST TÉCNICO

### 11.1 Setup e Configuração

- [ ] Projeto Vite criado com React + TypeScript
- [ ] Tailwind CSS configurado
- [ ] shadcn/ui inicializado
- [ ] Todas as dependências instaladas
- [ ] Variáveis de ambiente configuradas (.env)
- [ ] Supabase projeto criado e configurado
- [ ] Storage bucket "empresas" criado (public)

### 11.2 Database

- [ ] Tabela `me_empresas` criada
- [ ] Tabela `me_usuarios` criada
- [ ] Tabela `me_configuracoes` criada
- [ ] RLS policies ativas em todas as tabelas
- [ ] Índices criados em campos de busca
- [ ] Triggers de `updated_at` funcionando
- [ ] Trigger de criação de configurações padrão
- [ ] Trigger de atualização de progresso do onboarding

### 11.3 Tipos e Schemas

- [ ] Todos os tipos TypeScript definidos
- [ ] Schemas Zod para todos os formulários
- [ ] Inferência de tipos funcionando corretamente
- [ ] Validações de CPF/CNPJ implementadas
- [ ] Validações de email único
- [ ] Validações de senha forte

### 11.4 Hooks

- [ ] `useAuth` implementado e testado
- [ ] `useEmpresa` implementado e testado
- [ ] `useUsuario` implementado e testado
- [ ] `useConfiguracoes` implementado e testado
- [ ] `useCep` integrado com ViaCEP
- [ ] `useMobile` detectando breakpoints

### 11.5 Componentes

- [ ] Sidebar funcional (desktop)
- [ ] Sidebar drawer (mobile)
- [ ] Header com avatar e menu
- [ ] Bottom navigation (mobile)
- [ ] Login form com validação
- [ ] Cadastro multi-step funcionando
- [ ] Indicador de progresso visual
- [ ] Upload de logo com drag & drop
- [ ] Preview de logo
- [ ] Busca de CEP automática
- [ ] Color picker funcional
- [ ] Preview da loja em tempo real
- [ ] Onboarding checklist
- [ ] Widget MEL

### 11.6 Páginas

- [ ] `/login` funcional
- [ ] `/cadastro` multi-step funcionando
- [ ] `/recuperar-senha` enviando emails
- [ ] `/dashboard` com dados reais
- [ ] `/minha-empresa` editável
- [ ] `/configuracoes` com abas

### 11.7 Autenticação

- [ ] Login com email/senha funcionando
- [ ] Cadastro criando empresa + usuário
- [ ] Sessão persistida (localStorage)
- [ ] Logout limpando sessão
- [ ] Recuperação de senha enviando email
- [ ] Proteção de rotas funcionando

### 11.8 Responsividade

- [ ] Desktop (1920px): Layout OK
- [ ] Laptop (1366px): Layout OK
- [ ] Tablet (768px): Sidebar colapsada/drawer
- [ ] Mobile (375px): Bottom nav visível
- [ ] Formulários usáveis em mobile
- [ ] Touch targets mínimo 44px
- [ ] Imagens responsivas

### 11.9 Performance

- [ ] Lighthouse Performance > 80
- [ ] Lighthouse Acessibilidade > 90
- [ ] Lighthouse Best Practices > 90
- [ ] Lighthouse SEO > 80
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Bundle size otimizado

### 11.10 Segurança

- [ ] RLS policies testadas
- [ ] Nenhum dado exposto sem autenticação
- [ ] Senhas nunca logadas ou expostas
- [ ] Upload validando tipos e tamanhos
- [ ] CORS configurado corretamente
- [ ] Variáveis de ambiente protegidas

### 11.11 UX/UI

- [ ] Estados de loading em todos os botões
- [ ] Toast notifications funcionando
- [ ] Mensagens de erro claras
- [ ] Validação em tempo real
- [ ] Feedback visual em interações
- [ ] Animações suaves (transições CSS)
- [ ] Empty states implementados

### 11.12 Testes

- [ ] Fluxo de cadastro completo testado
- [ ] Fluxo de login testado
- [ ] Upload de logo testado
- [ ] Busca de CEP testada
- [ ] Responsividade testada em 4 breakpoints
- [ ] Testado em Chrome, Firefox, Safari
- [ ] Testado em mobile (iOS/Android)

### 11.13 Build e Deploy

- [ ] Build de produção sem erros
- [ ] TypeScript sem erros (`tsc --noEmit`)
- [ ] ESLint sem warnings críticos
- [ ] Variáveis de ambiente de produção configuradas
- [ ] Deploy na Vercel funcionando
- [ ] Domínio configurado (opcional)

---

## 12. VARIÁVEIS DE AMBIENTE

### 12.1 Desenvolvimento (`.env.local`)

```bash
# Supabase
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui

# App
VITE_APP_NAME=UNIQ Empresas
VITE_APP_URL=http://localhost:5173
VITE_APP_VERSION=1.0.0
```

### 12.2 Produção (`.env.production`)

```bash
# Supabase
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui

# App
VITE_APP_NAME=UNIQ Empresas
VITE_APP_URL=https://seu-dominio.vercel.app
VITE_APP_VERSION=1.0.0
```

---

## 13. DECISÕES TÉCNICAS

### 13.1 Por que Zustand em vez de Context API?

**Context API:**
- ❌ Re-renderiza toda árvore quando state muda
- ❌ Código boilerplate excessivo
- ❌ Difícil de escalar

**Zustand:**
- ✅ Re-renderização seletiva
- ✅ API simples e direta
- ✅ Fácil persistência
- ✅ TypeScript-friendly

### 13.2 Por que shadcn/ui em vez de outras libs?

- ✅ Código fonte local (não é black box)
- ✅ Baseado em Radix (acessibilidade)
- ✅ Customizável com Tailwind
- ✅ Sem dependências de runtime pesadas

### 13.3 Por que React Hook Form + Zod?

- ✅ Performance otimizada (re-renders controlados)
- ✅ Validação schema-based
- ✅ TypeScript inference perfeita
- ✅ Integração nativa com Zod

### 13.4 Por que ViaCEP em vez de API paga?

- ✅ Gratuito e estável
- ✅ Não requer autenticação
- ✅ Rate limit razoável
- ✅ Fallback fácil (campos editáveis)

### 13.5 Por que RLS no Supabase?

- ✅ Segurança no nível do banco
- ✅ Não depende apenas de client-side
- ✅ Multi-tenancy garantido
- ✅ Simples de implementar

---

## 14. DEPENDÊNCIAS COMPLETAS

### 14.1 package.json

```json
{
  "name": "uniq-empresas",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@supabase/supabase-js": "^2.39.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "date-fns": "^3.0.6",
    "lucide-react": "^0.302.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hook-form": "^7.49.2",
    "react-router-dom": "^6.21.1",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.4",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

---

## 15. REFERÊNCIAS RÁPIDAS

### 15.1 Comandos Úteis

```bash
# Iniciar projeto
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Type checking
npm run type-check

# Lint
npm run lint

# Adicionar componente shadcn
npx shadcn add <component-name>
```

### 15.2 Links de Documentação

- [React Router v6](https://reactrouter.com/en/main)
- [Supabase JS Client](https://supabase.com/docs/reference/javascript/introduction)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)

---

## 16. PRÓXIMOS PASSOS

Após aprovação desta SPEC:

1. **Limpar contexto do chat** (IMPORTANTE para implementação)
2. **Chamar @vibe-implementer** para iniciar desenvolvimento
3. **Acompanhar progresso** via checklist técnico
4. **Revisar código** em checkpoints definidos

---

**Documento gerado em:** 30/03/2026  
**Versão:** 1.0  
**Status:** 🟢 PRONTO PARA IMPLEMENTAÇÃO  

> ⚠️ **IMPORTANTE:** Esta SPEC é um guia técnico completo. O implementador deve seguir a sequência de implementação e validar cada item do checklist técnico.
