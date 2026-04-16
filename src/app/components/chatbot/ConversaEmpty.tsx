/**
 * ConversaEmpty - Estado quando nenhuma conversa selecionada
 * Componente de UI do Módulo Chatbot
 * Sprint 12 - UNIQ Empresas
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';

export function ConversaEmpty() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="bg-gray-100 p-6 rounded-full mb-4">
        <MessageCircle className="h-16 w-16 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Nenhuma conversa selecionada
      </h3>
      <p className="text-gray-500 text-center max-w-sm">
        Selecione uma conversa na lista ao lado para começar a atender seus clientes.
      </p>
    </div>
  );
}

export default ConversaEmpty;