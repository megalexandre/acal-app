export interface Quality  {
  id: string,
  reference: string,
  gathering: Gathering[],
}

export interface QualityPage {
  id: string,
  reference: string,
  gathering: Gathering[],
}

export interface QualityFilter {
  id: string,
  reference: string,
  gathering: Gathering[],
}

export class QualityPageFilter {
  id?: string = null;
  reference?: string = null;
  page: number = 0;
  direction: string = 'DESC';
  sortedField: string = 'reference';

  reset(){
  }

}

export interface Gathering {
  id: string,
  param: string,
  required: number,
  analyzed:  number,
  conformity:  number,
}

export const params = [
  {title: "COLOR", value: "Cor aparente - 15UH"},
  {title: "TURBIDITY",value: "Turbidez - 5.0 UT"},
  {title: "CHLORINE",value: "Cloro - Min 0,2 mg/l"},
  {title: "ESCHERICHIA" ,value: "Eschirichia Coli"},
  {title: "TOTAL_COLIFORMS",value: "Coliformes Totais"},
]


