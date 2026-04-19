import { describe, it, expect } from '@jest/globals';
import { applyDiscount } from '../core/discount';

describe('The Discount', () => {
  it('reduces the price by the given percentage', () => {
    const originalPrice = 100;
    const percentage = 10;

    const finalPrice = applyDiscount(originalPrice, percentage);

    expect(finalPrice).toBe(90);
  });
});
