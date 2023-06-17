import { ParamPipe } from './param.pipe';

describe('ParamPipe', () => {
  let pipe: ParamPipe = new ParamPipe();

  it('should transform "COLOR" category to "Cor aparente - 15UH"', () => {
    expect( pipe.transform('COLOR')).toEqual('Cor aparente - 15UH');
  });

  it('should transform "TURBIDITY" category to "Turbidez - 5.0 UT"', () => {
    expect( pipe.transform('TURBIDITY')).toEqual('Turbidez - 5.0 UT');
  });

  it('should transform "CHLORINE" category to "Cloro - Min 0,2 mg/l"', () => {
    expect( pipe.transform('CHLORINE')).toEqual('Cloro - Min 0,2 mg/l');
  });

  it('should transform "ESCHERICHIA" category to "Eschirichia Coli"', () => {
    expect( pipe.transform('ESCHERICHIA')).toEqual('Eschirichia Coli');
  });

  it('should transform "TOTAL_COLIFORMS" category to "Coliformes Totais"', () => {
    expect( pipe.transform('TOTAL_COLIFORMS')).toEqual('Coliformes Totais');
  });

  it('should NOT transform "OUTHER"', () => {
    expect( pipe.transform('OUTHER')).toEqual('OUTHER');
  });



});
