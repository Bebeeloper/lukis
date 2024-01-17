import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Button } from 'react-native-paper';
import { paletteColors } from '../colors/PaletteColors';

export default function DatePicker(props: any) {

  const { mode } = useSelector((state: RootState) => state.themeReducer);
  const {
    date, 
    setDate, 
    toggleDatePicker, 
    dateAndroid, 
    setDateAndroid,
    showPicker,
    setShowPicker
  } = props;

  const onChangeDate = ({type} : {type:string}, selectedDate: any) => {
    if(type == "set"){
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatePicker();
        setDateAndroid(currentDate.toDateString());
      }
    }else{
      toggleDatePicker();
    }
  }

  const confirmDate = () => {
    setDateAndroid(date.toDateString());
    toggleDatePicker();
  }

  const styles = getDatePickerStyle(mode);
  return (
    <View>
      <DateTimePicker 
        style={styles.datePicker}
        mode='date'
        display='spinner'
        value={date}
        onChange={({type}, selectedDate) => onChangeDate({type}, selectedDate)}
      />
      <Button 
        style={{marginTop: 20}}
        buttonColor={paletteColors.limeLight} 
        // loading={true}
        icon="content-save-outline" 
        mode="contained" 
        onPress={() => confirmDate()}
        // disabled={buttonDisabled}
      >
        Guardar
      </Button>
    </View>
  )
}

const getDatePickerStyle = (mode: boolean) => StyleSheet.create({
  datePicker: {
    height: 100
  }
})