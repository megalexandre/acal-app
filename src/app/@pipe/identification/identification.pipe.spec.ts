import { IdentificationPipe } from "./identification.pipe";

describe('IdentificationPipe', () => {
  let pipe: IdentificationPipe = new IdentificationPipe();

  it('should transform string with 11 caracters to CPF "94746209030" to "947.462.090-30"', () => {
    expect( pipe.transform('94746209030')).toEqual('947.462.090-30');
  });

  it('should transform string with 14 caracters to CNPH "15507473000157" to "15.507.473/0001-57"', () => {
    expect( pipe.transform('15507473000157')).toEqual('15.507.473/0001-57');
  });

  it('should do not transform size different do 11 or 14 caracteres', () => {
    expect( pipe.transform('outher')).toEqual('outher');
  });


});
