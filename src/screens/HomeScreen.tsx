import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import {useContext, useEffect, useState} from 'react'
// import { getStylesAcc } from './AccountScreen';
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';

// Import charts library dependencies
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { lightBlue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default function HomeScreen() {

  const [tabIndexIncomes, setTabIndexIncomes] = useState(0);
  const [tabIndexExpenses, setTabIndexExpenses] = useState(0);
  const { mode, setMode } = useContext(themeContext);
  const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

  const styles = getStylesHome(mode);

  const dataIncomes = [
    {value: 10, label: 'Lun', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 20, label: 'Mar', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 30, label: 'Miér', frontColor: paletteColors.limeLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.limeLight, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 40, label: 'Jue', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>40k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 50, label: 'Vie', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 60, label: 'Sáb', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 70, label: 'Dom', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ), labelTextStyle: {color: 'gray'}},
  ];

  const dataIncomesMonthly = [
    {value: 70, label: 'Ene', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 20, label: 'Feb', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 60, label: 'Mar', frontColor: paletteColors.limeLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.limeDark, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 50, label: 'Abr', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 10, label: 'May', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 70, label: 'Jun', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 100, label: 'Jul', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>100k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 20, label: 'Ago', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 30, label: 'Sep', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 10, label: 'Oct', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 80, label: 'Nov', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>80k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 90, label: 'Dic', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>90k</Text>
    ), labelTextStyle: {color: 'gray'}},
  ];

  const dataExpenses = [
    {value: 10, label: 'Lun', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 20, label: 'Mar', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 30, label: 'Miér', frontColor: paletteColors.fireLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.fireLight, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 40, label: 'Jue', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>40k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 50, label: 'Vie', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 60, label: 'Sáb', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 70, label: 'Dom', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ), labelTextStyle: {color: 'gray'}},
  ];

  const dataExpensesMonthly = [
    {value: 70, label: 'Ene', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 20, label: 'Feb', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 60, label: 'Mar', frontColor: paletteColors.fireLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.fireLight, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 50, label: 'Abr', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 10, label: 'May', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 70, label: 'Jun', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 100, label: 'Jul', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>100k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 20, label: 'Ago', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 30, label: 'Sep', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 10, label: 'Oct', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 80, label: 'Nov', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>80k</Text>
    ), labelTextStyle: {color: 'gray'}},
    {value: 90, label: 'Dic', ...( mode && {frontColor: paletteColors.light}), topLabelComponent: () => (
      <Text style={{color: `${mode ? paletteColors.white : paletteColors.black}`, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>90k</Text>
    ), labelTextStyle: {color: 'gray'}},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <View style={{marginRight: 'auto', marginLeft: 'auto', padding: 10, width: '90%', backgroundColor: `${mode ? paletteColors.blackLight : paletteColors.whiteDark}`, borderRadius: 10}}>
          <View style={{marginBottom: 15}}>
            <SegmentedControlTab
              tabStyle={{width: '80%', height: 50, backgroundColor: `${mode ? paletteColors.black : paletteColors.white}`, borderColor: paletteColors.limeLight}}
              tabTextStyle={{color: paletteColors.limeLight}}
              activeTabStyle={{backgroundColor: paletteColors.limeLight}}
              values={["Semanal", "Mensual"]}
              selectedIndex={tabIndexIncomes}
              onTabPress={(value) => setTabIndexIncomes(value)}
            />
          </View>
          {tabIndexIncomes === 0 ?
            <View>
                <BarChart
                    width={Dimensions.get('window').width * 0.75}
                    barWidth={20}
                    noOfSections={5}
                    barBorderRadius={4}
                    frontColor="lightgray"
                    data={dataIncomes}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    yAxisTextStyle={{color: 'gray'}}
                    isAnimated
                    onPress = {(item: any, index: any)=>console.log('item', item)}
                    rulesColor={`${mode ? paletteColors.backgroundLight : 'lightgray'}`}
                />
            </View>
          :
            <View>
              <BarChart
                  width={Dimensions.get('window').width * 0.75}
                  // width={viewWidth}
                  barWidth={20}
                  noOfSections={5}
                  barBorderRadius={4}
                  frontColor="lightgray"
                  data={dataIncomesMonthly}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  yAxisTextStyle={{color: 'gray'}}
                  isAnimated
                  rulesColor={`${mode ? paletteColors.backgroundLight : 'lightgray'}`}
              />
            </View>
          }
        </View>

        <View style={{marginRight: 'auto', marginLeft: 'auto', padding: 10, width: '90%', backgroundColor: `${mode ? paletteColors.blackLight : paletteColors.whiteDark}`, borderRadius: 10}}>
          <View style={{marginBottom: 15}}>
            <SegmentedControlTab
              tabStyle={{width: '80%', height: 50, backgroundColor: `${mode ? paletteColors.black : paletteColors.white}`, borderColor: paletteColors.fireLight}}
              tabTextStyle={{color: paletteColors.fireLight}}
              activeTabStyle={{backgroundColor: paletteColors.fireLight}}
              values={["Semanal", "Mensual"]}
              selectedIndex={tabIndexExpenses}
              onTabPress={(value) => setTabIndexExpenses(value)}
            />
          </View>
          {tabIndexExpenses === 0 ?
            <View>
                <BarChart
                    width={Dimensions.get('window').width * 0.75}
                    // width={viewWidth}
                    barWidth={20}
                    noOfSections={5}
                    barBorderRadius={4}
                    frontColor="lightgray"
                    data={dataExpenses}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    yAxisTextStyle={{color: 'gray'}}
                    isAnimated 
                    rulesColor={`${mode ? paletteColors.backgroundLight : 'lightgray'}`}
                />
            </View>
          :
            <View>
              <BarChart
                  width={Dimensions.get('window').width * 0.75}
                  // width={viewWidth}
                  barWidth={20}
                  noOfSections={5}
                  barBorderRadius={4}
                  frontColor="lightgray"
                  data={dataExpensesMonthly}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  yAxisTextStyle={{color: 'gray'}}
                  isAnimated
                  rulesColor={`${mode ? paletteColors.backgroundLight : 'lightgray'}`} 
              />
            </View>
          }
        </View>
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