import { ReferencePipe } from "./reference.pipe";

describe('ReferencePipe', () => {
  let pipe: ReferencePipe = new ReferencePipe();

  it('should transform "012023" lenth string to "JANEIRO/2023"', () => {
    expect( pipe.transform('012023')).toEqual('JANEIRO/2023');
  });

  it('should transform "022023" lenth string to "FEVEREIRO/2023"', () => {
    expect( pipe.transform('022023')).toEqual('FEVEREIRO/2023');
  });

  it('should transform "032023" lenth string to "MARÇO/2023"', () => {
    expect( pipe.transform('032023')).toEqual('MARÇO/2023');
  });

  it('should transform "042023" lenth string to "ABRIL/2023"', () => {
    expect( pipe.transform('042023')).toEqual('ABRIL/2023');
  });

  it('should transform "052023" lenth string to "MAIO/2023"', () => {
    expect( pipe.transform('052023')).toEqual('MAIO/2023');
  });

  it('should transform "062023" lenth string to "JUNHO/2023"', () => {
    expect( pipe.transform('062023')).toEqual('JUNHO/2023');
  });

  it('should transform "072023" lenth string to "JULHO/2023"', () => {
    expect( pipe.transform('072023')).toEqual('JULHO/2023');
  });

  it('should transform "082023" lenth string to "AGOSTO/2023"', () => {
    expect( pipe.transform('082023')).toEqual('AGOSTO/2023');
  });

  it('should transform "092023" lenth string to "SETEMBRO/2023"', () => {
    expect( pipe.transform('092023')).toEqual('SETEMBRO/2023');
  });

  it('should transform "102023" lenth string to "OUTUBRO/2023"', () => {
    expect( pipe.transform('102023')).toEqual('OUTUBRO/2023');
  });

  it('should transform "112023" lenth string to "NOVEMBRO/2023"', () => {
    expect( pipe.transform('112023')).toEqual('NOVEMBRO/2023');
  });

  it('should transform "122023" lenth string to "DEZEMBRO/2023"', () => {
    expect( pipe.transform('122023')).toEqual('DEZEMBRO/2023');
  });

  it('should do not transform when has not 6 caracters', () => {
    expect( pipe.transform('0120230')).toEqual('0120230');
  });

});
