import React, { useMemo } from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import { StyledTimeslot } from './Day.styles';

function Timeslot({ timeslot, timeslotLength }) {
  const start = useMemo(() => moment(timeslot), [timeslot]);
  const end = useMemo(
    () => moment(timeslot).add(timeslotLength, 'minutes'),
    [timeslot, timeslotLength]
  );

  return (
    <StyledTimeslot>
      {`${start.format('h:mma')} – ${end.format('h:mma')}`}
    </StyledTimeslot>
  )
}

Timeslot.propTypes = {
  timeslot: propTypes.string,
  timeslotLength: propTypes.number,
}

export default Timeslot;
