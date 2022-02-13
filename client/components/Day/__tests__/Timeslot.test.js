import React from 'react';
import { render } from '@testing-library/react';
import Timeslot from '../Timeslot';

describe('components::Timeslot', () => {
  it.each`
    timeslot              | length    | expectedText
    ${'2022-05-01T00:00'} | ${30}     | ${'12:00am – 12:30am'}
    ${'2022-05-02T10:20'} | ${30}     | ${'10:20am – 10:50am'}
    ${'2022-05-02T09:30'} | ${90}     | ${'9:30am – 11:00am'}
    ${'2022-05-02T22:00'} | ${10}     | ${'10:00pm – 10:10pm'}
    ${'2022-05-02T11:00'} | ${60}     | ${'11:00am – 12:00pm'}
  `('renders expected text for timeslot $timeslot with length $length min', ({ timeslot, length, expectedText }) => {
    const { getByText } = render(
      <Timeslot timeslot={timeslot} timeslotLength={length} />
    );
    expect(getByText(expectedText)).toBeTruthy();
  })
})
