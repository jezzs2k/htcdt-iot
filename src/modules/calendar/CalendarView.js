/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import _ from 'lodash';

import { colors, fonts } from '../../styles';

class CalendarScreen extends React.Component {
  constructor(){
    super();

    this.state = {
      calendars: null,
    }
  }

  componentDidUpdate(prevProps, prevState){
    const {items} = this.props;
    const {calendars} = this.state;


    const conditionVal = items && _.isEqual(items,  prevProps?.items);
    const conditionVal2 = calendars && _.isEqual(items,  calendars);

    if (!conditionVal && !conditionVal2) {
      this.setState({calendars: items})
    }
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  renderItem(item) {
    const labels =
      item.labels &&
      item.labels.map(label => (
        <View
          key={`label-${label}`}
          style={{
            padding: 5,
            backgroundColor:
              label === 'Urgent' ? colors.primary : colors.secondary,
            borderRadius: 3,
          }}
        >
          <Text style={{ color: 'white' }}>{label}</Text>
        </View>
      ));

    return (
      <View style={styles.item}>
        <View>
          <Text
            style={{
              color: '#48506B',
              fontFamily: fonts.primaryRegular,
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ color: '#9B9B9B', fontFamily: fonts.primaryRegular }}>
            {item.time}
          </Text>
        </View>

        <View styleName="horizontal h-start">{labels}</View>
      </View>
    );
  }

  render() {
    const { loadItems } = this.props;
    const { calendars } = this.state;
    
    return (
      <Agenda
        items={calendars}
        loadItemsForMonth={loadItems}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        theme={{
          dotColor: colors.primaryLight,
          selectedDayBackgroundColor: colors.primaryLight,
          agendaDayTextColor: colors.primaryLight,
          agendaDayNumColor: colors.primaryLight,
          agendaTodayColor: '#4F44B6',
          backgroundColor: '#F1F1F8',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteTwo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default CalendarScreen;
