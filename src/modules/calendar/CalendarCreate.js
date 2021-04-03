/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, View, Text , TextInput} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Formik } from 'formik';

import {Button} from '../../components';

class CalendarScreenCreate extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            currentDate: new Date(),
            minDate: new Date(),
            day: null,
        }
    }

    handlerPressText = (day) => {
        this.setState({currentDate: new Date(day.timestamp), day})
    }

  render() {
      const {currentDate, minDate, day} = this.state;

    return (
      <>
        <Text style={styles.label}>Chọn ngày</Text>
        <Calendar
          current={currentDate}
          minDate={minDate}
          onDayPress={(_day) => this.handlerPressText(_day)}
          monthFormat="dd/MM/yyyy"
          hideExtraDays
          firstDay={1}
          onPressArrowLeft={subtractMonth => subtractMonth()}
          onPressArrowRight={addMonth => addMonth()}
        //   disableAllTouchEventsForDisabledDays
        />
        <Formik
          initialValues={{ name: '', des: '', day: currentDate }}
          onSubmit={values => {
              // eslint-disable-next-line no-param-reassign
              values.day = day;
              console.log(values)
              // call firebase to save data
            }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
              <Text
                style={styles.iputStyle}
              >
                {currentDate.toDateString()}
              </Text>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Tiêu đề công việc"
                style={styles.iputStyle}
              />
              <TextInput
                onChangeText={handleChange('des')}
                onBlur={handleBlur('des')}
                value={values.des}
                placeholder="Miêu tả công việc"
                style={styles.iputStyle}
              />
              <Button onPress={handleSubmit} caption="Tạo lịch" primary style={styles.btn} />
            </View>
     )}
        </Formik>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  iputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
    minWidth: '100%',
    paddingHorizontal: 20
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  btn: {
      marginTop: 30,
      minWidth: 300
  },
  label: {
      color: '#010102',
      marginVertical: 8,
      paddingHorizontal: 20
  },
});

export default CalendarScreenCreate;
