import React, { useMemo, useState } from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import Flex, { FlexItem } from 'components/Flex';
import Timeslot from './Timeslot';
import Typography from 'components/Typography';
import { StyledNoSlots, StyledTransitionList } from './Day.styles';
import LinkButton from './LinkButton.styles';

const DEFAULT_TIMESLOTS_COUNT = 2;

function Day({ baseDate, timeslotLength, timeslots = [] }) {
  const date = useMemo(() => moment(baseDate), [baseDate]);
  const [showAll, setShowAll] = useState(false);
  let visibleTimeslots = timeslots;

  if (!showAll) {
    visibleTimeslots = timeslots.slice(0, DEFAULT_TIMESLOTS_COUNT);
  }

  const onMoreTimesBtnClick = () => setShowAll(true)
  const onFewerTimesBtnClick = () => setShowAll(false)

  return (
    <FlexItem>
      <Flex margin='0 0 10px' alignCenter>
        <Typography margin='0 5px 0 0' fontWeight='600' fontSize='14px'>
          {date.format('ddd')}
        </Typography>
        <Typography margin='0' dimmed fontWeight='500' fontSize='14px'>
          {date.format('MMM D')}
        </Typography>
      </Flex>
      <StyledTransitionList>
        {
          timeslots.length > 0 ? (
            <Flex>
              {visibleTimeslots.map(timeslot => (
                <Timeslot
                  key={timeslot}
                  timeslot={timeslot}
                  timeslotLength={timeslotLength}
                />)
              )}
              {timeslots.length > DEFAULT_TIMESLOTS_COUNT ? (
                <>
                  {showAll ?
                    <LinkButton onClick={onFewerTimesBtnClick}>Fewer times</LinkButton> :
                    <LinkButton onClick={onMoreTimesBtnClick}>More times</LinkButton>
                  }
                </>
              ) : null}
            </Flex>
          ) : <StyledNoSlots data-testid='noSlotsDay' />
        }
      </StyledTransitionList>
    </FlexItem>
  );
}

Day.propTypes = {
  baseDate: propTypes.string,
  timeslotLength: propTypes.number,
  timeslots: propTypes.arrayOf(propTypes.string),
}

export default Day;
