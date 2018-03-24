import applyClasses from './applyClasses';

describe('Apply classes', () => {
  it('should test the classes utility with one class', () => {
    expect(
      applyClasses({
        notification: true,
        hidden: false
      })
    ).toBe('notification');
  });

  it('should test the classes utility with zero class', () => {
    expect(
      applyClasses({
        notification: false
      })
    ).toBe('');
  });

  it('should test the classes utility with two classes', () => {
    expect(
      applyClasses({
        notification: true,
        hidden: true
      })
    ).toBe('notification hidden');
  });

  it('should not generate spaces between classes', () => {
    expect(
      applyClasses({
        notification: true,
        display: false,
        hidden: true
      })
    ).toBe('notification hidden');
  });
});
