import { NumberFormatterPipe } from './numberformatter.pipe';

describe('NumberFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberFormatterPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return the number in German Currency Format', () => {

    const pipe = new NumberFormatterPipe();

    const result = pipe.transform(300);
    expect(result).toBeTruthy();
});
});
