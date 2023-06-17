import { Category } from '@model/default/group';
import { CategoryPipe } from './category.pipe';

describe('CategoryPipe', () => {
  let pipe: CategoryPipe;

  beforeEach(() => {
    pipe = new CategoryPipe();
  });

  it('should transform FOUNDER category to "Fundador"', () => {
    const category: Category = { name: 'FOUNDER' };
    const transformedValue = pipe.transform(category);
    expect(transformedValue).toEqual('Fundador');
  });

  it('should transform EFFECTIVE category to "Efetivo"', () => {
    const category: Category = { name: 'EFFECTIVE' };
    const transformedValue = pipe.transform(category);
    expect(transformedValue).toEqual('Efetivo');
  });

  it('should transform TEMPORARY category to "Temporário"', () => {
    const category: Category = { name: 'TEMPORARY' };
    const transformedValue = pipe.transform(category);
    expect(transformedValue).toEqual('Temporário');
  });

  it('should return "Not Found" for a null category', () => {
    const category: Category = null;
    const transformedValue = pipe.transform(category);
    expect(transformedValue).toEqual('Not Found');
  });
});
