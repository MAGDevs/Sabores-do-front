import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import type { ReceitaFormData } from '../Types/ReceitaTipos';

interface ReceitaFormContextType {
  register: any;
  handleSubmit: any;
  errors: any;
  watch: any;
  setValue: any;
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
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm<ReceitaFormData>();

  const adicionarReceita = (data: ReceitaFormData) => {
    const novaReceita = {
      ...data,
      id: Date.now()
    };
    setReceitas(prev => [...prev, novaReceita]);
    reset();
  };

  const limparFormulario = () => {
    reset();
  };

  const value = {
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