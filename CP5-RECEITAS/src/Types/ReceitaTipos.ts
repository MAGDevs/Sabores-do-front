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
  nome: string;
  categoria: string;
  ingredientes: string[];
  modoPreparo: string;
  tempo: string;
  imagem: string;
}