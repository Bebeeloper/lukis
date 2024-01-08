import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React, {useContext} from 'react'
// import { getStylesAcc } from './AccountScreen';
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';

// Import charts library dependencies
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

export default function HomeScreen() {

  const { mode, setMode } = useContext(themeContext);

  const styles = getStylesHome(mode);

  const data = [
    {value: 250, label: 'Lun'},
    {value: 500, label: 'Mar'},
    {value: 745, label: 'Miér', frontColor: paletteColors.limeLight},
    {value: 320, label: 'Jue'},
    {value: 600, label: 'Vie'},
    {value: 256, label: 'Sáb'},
    {value: 300, label: 'Dom'},
];

  return (
    <SafeAreaView style={styles.container}>
      <View>
          <BarChart
              width={Dimensions.get('window').width}
              barWidth={20}
              noOfSections={5}
              barBorderRadius={4}
              frontColor="lightgray"
              data={data}
              yAxisThickness={0}
              xAxisThickness={0}
              isAnimated 
          />
      </View>
    </SafeAreaView>
  )
}

export const getStylesHome = (mode: boolean) => StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
  },
  accountText: {
    color: mode ? paletteColors.white : paletteColors.black
  }
});