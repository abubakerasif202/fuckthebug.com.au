import { describe, it, expect } from 'vitest';
import { formatDate } from '@/utils';

describe('smoke', () => {
  it('formatDate helper returns a localized string', () => {
    const result = formatDate('2025-01-15');
    expect(result).toBe('15 Jan 2025');
  });
});
