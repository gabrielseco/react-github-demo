import { formatActionType } from './helpers';

describe('Helpers', () => {
  it('should format the placeholder given', () => {
    const placeholder = '[PLACEHOLDER]';
    const type = 'SET_LOCATION';
    const actionType = formatActionType(placeholder, type);
    expect(actionType).toBe(`${placeholder} ${type}`);
  });
});
