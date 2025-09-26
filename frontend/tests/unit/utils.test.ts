import { describe, it, expect } from 'vitest';
import { formatSSN, unformatSSN } from '../../src/utils/ssn.utility';
import { formatDate, calcDurationInMinutes } from '../../src/utils/date.utility';

describe('SSN Utilities', () => {
  describe('formatSSN', () => {
    it('correctly formats a complete SSN', () => {
      const result = formatSSN('123456789012345');
      expect(result).toBe('1 23 45 67 890 123 45');
    });

    it('deletes non-numeric characters', () => {
      const result = formatSSN('12a3-4b5.6c7');
      expect(result).toBe('1 23 45 67');
    });

    it('15-digit limit', () => {
      const result = formatSSN('123456789012345678');
      expect(result).toBe('1 23 45 67 890 123 45');
    });
  });

  describe('unformatSSN', () => {
    it('deletes spaces', () => {
      const result = unformatSSN('1 23 45 67 890 123 45');
      expect(result).toBe('123456789012345');
    });
  });
});

describe('Date Utilities', () => {
  describe('formatDate', () => {
    it('formats a date in French', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date);
      expect(result).toMatch(/15\/01\/2024/);
    });
  });

  describe('calcDurationInMinutes', () => {
    it('calculates the duration in minutes', () => {
      const start = new Date('2024-01-01T10:00:00');
      const end = new Date('2024-01-01T10:30:00');
      const result = calcDurationInMinutes(start, end);
      expect(result).toBe(30);
    });
  });
});
