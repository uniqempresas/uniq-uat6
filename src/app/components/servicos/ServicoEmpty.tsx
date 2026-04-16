/**
 * Componente ServicoEmpty - Estado vazio
 */

import { Scissors } from 'lucide-react';
import { Button } from '../ui/button';

interface ServicoEmptyProps {
  onAddNew?: () => void;
}

export function ServicoEmpty({ onAddNew }: ServicoEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
        <Scissors size={32} className="text-slate-400" />
      </div>
      <h3 className="text-slate-900 font-semibold mb-1">Nenhum serviço encontrado</h3>
      <p className="text-slate-500 text-sm max-w-sm mb-4">
        Tente ajustar os filtros ou adicionar um novo serviço.
      </p>
      {onAddNew && (
        <Button onClick={onAddNew} className="bg-emerald-600 hover:bg-emerald-700">
          Adicionar Novo Serviço
        </Button>
      )}
    </div>
  );
}