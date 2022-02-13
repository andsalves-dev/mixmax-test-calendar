import React from 'react';
import moment from 'moment';
import { render } from '@testing-library/react';
import Calendar from '../index';

describe('components::Calendar', () => {
  it('renders seven upcoming days', () => {
    const { getByText } = render(<Calendar timeslots={[]} timeslotLengthMinutes={10} />);

    for (let i = 1; i <= 7; i++) {
      const dayText = moment().add(i, 'days').format('MMM D');
      expect(getByText(dayText)).toBeTruthy();
    }
  });
});
