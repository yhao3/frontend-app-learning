import React from 'react';
import { render } from '../../../../setupTest';
import UnitIcon from './UnitIcon';

describe('Unit Icon', () => {
  const types = {
    video: 'fa-video',
    other: 'fa-book',
    vertical: 'fa-tasks',
    problem: 'fa-edit',
    lock: 'fa-lock',
    undefined: 'fa-book',
  };

  Object.entries(types).forEach(([key, value]) => {
    it(`renders correct icon for ${key} unit`, () => {
      // Suppress warning for undefined prop type.
      if (key === 'undefined') {
        jest.spyOn(console, 'error').mockImplementation(() => {});
      }

      const { container } = render(<UnitIcon type={key} />);
      expect(container.querySelector('svg')).toHaveClass(value);
    });
  });
});