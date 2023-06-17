import { DefaultFilter, DefaultFilterPage, DefaultModel, DefaultModelPage } from "./default-filter"

export interface Quality extends DefaultModel{
  id: string,
  startedAt: string,
  gathering: Gathering[],
}

export interface QualityPage extends DefaultModelPage {
  id: string,
  startedAt: string,
  gathering: Gathering[],
}

export interface QualityFilter extends DefaultFilter {
  id: string,
  startedAt: string,
  gathering: Gathering[],
}


export class QualityPageFilter extends DefaultFilterPage {
  id?: string = null;
  startedAt?: string = null;

  reset(){
    super.reset();
    Object.keys(this).forEach((key) => {
      this[key] = null;
    });
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


