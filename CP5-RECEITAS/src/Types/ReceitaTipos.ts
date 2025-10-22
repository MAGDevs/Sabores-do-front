export interface ReceitaTipos {
  id: number;
  nome: string;
  imagem: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
}

export interface ReceitaFormData {
  id?: number;
  nome: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
  imagem?: string;
}

export type Categoria = 'entrada' | 'prato-principal' | 'sobremesa' | '';