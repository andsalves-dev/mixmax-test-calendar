import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader } from './Header.styles';
import Typography from '../Typography';

export default function Header({ calendarName }) {
  return (
    <StyledHeader>
      <Typography as='h1' fontWeight='600' margin='16px 0 4px' fontSize='21px'>
        Schedule a meeting with {calendarName}
      </Typography>
      <Typography dimmed small fontWeight='500'>
        Please pick a time slot below.
      </Typography>
    </StyledHeader>
  );
}

Header.propTypes = {
  calendarName: PropTypes.string.isRequired,
};
