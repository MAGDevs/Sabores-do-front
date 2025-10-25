import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { useForm, type UseFormRegister, type UseFormHandleSubmit, type UseFormWatch, type UseFormSetValue, type FieldErrors } from 'react-hook-form';
import type { ReceitaFormData } from '../Types/ReceitaTipos';

interface ReceitaFormContextType {
  register: UseFormRegister<ReceitaFormData>;
  handleSubmit: UseFormHandleSubmit<ReceitaFormData>;
  errors: FieldErrors<ReceitaFormData>;
  watch: UseFormWatch<ReceitaFormData>;
  setValue: UseFormSetValue<ReceitaFormData>;
  receitas: ReceitaFormData[];
  adicionarReceita: (data: ReceitaFormData) => void;
  limparFormulario: () => void;
}

const ReceitaFormContext = createContext<ReceitaFormContextType | undefined>(undefined);

export const useReceitaForm = () => {
  const context = useContext(ReceitaFormContext);
  if (!context) {
    throw new Error('useReceitaForm deve ser usado dentro de ReceitaFormProvider');
  }
  return context;
};

interface ReceitaFormProviderProps {
  children: ReactNode;
}

export const ReceitaFormProvider: React.FC<ReceitaFormProviderProps> = ({ children }) => {
  const [receitas, setReceitas] = useState<ReceitaFormData[]>([]);

  // 👇 Adicionando defaultValues para evitar erros com ingredientes
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm<ReceitaFormData>({
    defaultValues: {
      ingredientes: [] // importante para que o setValue funcione
    }
  });

  const adicionarReceita = (data: ReceitaFormData) => {
    const novaReceita = {
      ...data,
      id: Date.now()
    };
    setReceitas(prev => [...prev, novaReceita]);
    reset({ ingredientes: [] }); // limpa tudo mas mantém a estrutura
  };

  const limparFormulario = () => {
    reset({ ingredientes: [] });
  };

  const value: ReceitaFormContextType = {
    register,
    handleSubmit,
    errors,
    watch,
    setValue,
    receitas,
    adicionarReceita,
    limparFormulario
  };

  return (
    <ReceitaFormContext.Provider value={value}>
      {children}
    </ReceitaFormContext.Provider>
  );
};
