import { connect } from 'react-redux';
import { compose } from 'recompose';

import { loadItems } from './CalendarState';

import CalendarScreen from './CalendarView';
import CalendarScreenCreate from './CalendarCreate';

export default compose(
  connect(
    state => ({
      items: state.calendar.items,
    }),
    {
      loadItems,
    },
  ),
)(CalendarScreen);
