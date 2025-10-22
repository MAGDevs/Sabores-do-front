import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { 
    useForm, 
    type UseFormRegister, 
    type UseFormHandleSubmit,
    type UseFormWatch,
    type UseFormSetValue, 
    type FieldErrors
} from 'react-hook-form';
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

export const useReceitaForm = (): ReceitaFormContextType => {
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
  } = useForm<ReceitaFormData>({
    defaultValues: {
        ingredientes: [],
        categoria: ''

    }
  });

  const adicionarReceita = (data: ReceitaFormData): void => {
    const novaReceita: ReceitaFormData = {
      ...data,
      id: Date.now()
    };
    setReceitas(prev => [...prev, novaReceita]);
    reset();
  };

  const limparFormulario = () => {
    reset();
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