import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSuppliers } from "../../hooks/useSuppliers";

export function FornecedorDetalhePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { suppliers } = useSuppliers();

  const supplier = suppliers.find((s) => s.id === id);

  useEffect(() => {
    if (!supplier) {
      navigate("/fornecedores", { replace: true });
    } else {
      // redireciona para listagem abrindo o drawer via state (não implementado) 
      // ou simplesmente volta para listagem
      navigate("/fornecedores", { replace: true });
    }
  }, [supplier, navigate]);

  return null;
}
