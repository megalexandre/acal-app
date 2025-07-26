import { GroupPipe } from './group.pipe';

describe('GroupPipe', () => {
  let pipe: GroupPipe;

  beforeEach(() => {
    pipe = new GroupPipe();
  });

  it('deve criar o pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve transformar "FOUNDER" para "Sócio Fundador"', () => {
    expect(pipe.transform('FOUNDER')).toBe('Sócio Fundador');
  });

  it('deve transformar "EFFECTIVE" para "Sócio Efetivo"', () => {
    expect(pipe.transform('EFFECTIVE')).toBe('Sócio Efetivo');
  });

  it('deve transformar "TEMPORARY" para "Temporário"', () => {
    expect(pipe.transform('TEMPORARY')).toBe('Temporário');
  });

  it('deve retornar o valor original se não encontrar correspondência', () => {
    expect(pipe.transform('UNKNOWN')).toBe('UNKNOWN');
  });
});