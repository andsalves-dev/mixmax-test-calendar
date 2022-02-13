import React from 'react';
import { render } from '@testing-library/react';
import Day from '../index';

describe('components::Timeslot', () => {
  const defaults = {
    timeslots: ['2022-02-25'],
    timeslotLength: 10,
    baseDate: '2022-02-22',
  }

  it('renders a placeholder when there is no slots for the day', () => {
    const { queryByTestId, rerender } = render(<Day {...defaults} />);
    expect(queryByTestId('noSlotsDay')).toBeFalsy();

    rerender(<Day {...defaults} timeslots={[]} />);
    expect(queryByTestId('noSlotsDay')).toBeTruthy();
  })
})
