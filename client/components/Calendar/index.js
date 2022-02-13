import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import Day from '../Day';
import Flex from '../Flex';
import organizeTimeslotsByDate from 'utils/organizeTimeslotsByDate';

function Calendar({ timeslots = [], timeslotLengthMinutes }) {
  const groupedTimeslots = useMemo(() => organizeTimeslotsByDate(timeslots), [timeslots]);

  return (
    <Flex>
      {Object.keys(groupedTimeslots).map(baseDate => (
        <Day
          baseDate={baseDate}
          key={baseDate}
          timeslots={groupedTimeslots[baseDate]}
          timeslotLength={timeslotLengthMinutes}
        />
      ))}
    </Flex>
  );
}

Calendar.propTypes = {
  timeslots: propTypes.arrayOf(propTypes.string),
  timeslotLengthMinutes: propTypes.number,
};

export default Calendar;
