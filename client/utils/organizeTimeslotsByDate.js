import moment from 'moment';

/**
 * @param timeslots
 * @param upcomingDays
 * @return Object
 */
export default function organizeTimeslotsByDate(timeslots = [], upcomingDays = 7) {
  const groups = {};

  for (let dayIncrement = 1; dayIncrement <= upcomingDays; dayIncrement++) {
    const dayStr = moment().add(dayIncrement, 'day').format('YYYY-MM-DD');
    groups[dayStr] = [];
  }

  for (let timeslot of timeslots) {
    const dayStr = moment(timeslot).format('YYYY-MM-DD');

    if (groups[dayStr]) {
      groups[dayStr].push(timeslot);
    }
  }

  return groups;
}
