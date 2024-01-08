import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import {useContext, useEffect, useState} from 'react'
// import { getStylesAcc } from './AccountScreen';
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';

// Import charts library dependencies
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import SegmentedControlTab from "react-native-segmented-control-tab";

export default function HomeScreen() {

  const [tabIndexIncomes, setTabIndexIncomes] = useState(0);
  const [tabIndexExpenses, setTabIndexExpenses] = useState(0);
  const { mode, setMode } = useContext(themeContext);
  const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

  const styles = getStylesHome(mode);

  const dataIncomes = [
    {value: 10, label: 'Lun', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ),},
    {value: 20, label: 'Mar', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ),},
    {value: 30, label: 'Miér', frontColor: paletteColors.limeLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.limeDark, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ),},
    {value: 40, label: 'Jue', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>40k</Text>
    ),},
    {value: 50, label: 'Vie', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ),},
    {value: 60, label: 'Sáb', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ),},
    {value: 70, label: 'Dom', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ),},
  ];

  const dataIncomesMonthly = [
    {value: 70, label: 'Ene', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ),},
    {value: 20, label: 'Feb', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ),},
    {value: 60, label: 'Mar', frontColor: paletteColors.limeLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.limeDark, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ),},
    {value: 50, label: 'Abr', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ),},
    {value: 10, label: 'May', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ),},
    {value: 70, label: 'Jun', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ),},
    {value: 100, label: 'Jul', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>100k</Text>
    ),},
    {value: 20, label: 'Ag', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ),},
    {value: 30, label: 'Sep', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ),},
    {value: 10, label: 'Oct', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ),},
    {value: 80, label: 'Nov', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>80k</Text>
    ),},
    {value: 90, label: 'Dic', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>90k</Text>
    ),},
  ];

  const dataExpenses = [
    {value: 10, label: 'Lun', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ),},
    {value: 20, label: 'Mar', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ),},
    {value: 30, label: 'Miér', frontColor: paletteColors.fireLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.fireLight, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ),},
    {value: 40, label: 'Jue', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>40k</Text>
    ),},
    {value: 50, label: 'Vie', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ),},
    {value: 60, label: 'Sáb', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ),},
    {value: 70, label: 'Dom', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ),},
  ];

  const dataExpensesMonthly = [
    {value: 70, label: 'Ene', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ),},
    {value: 20, label: 'Feb', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ),},
    {value: 60, label: 'Mar', frontColor: paletteColors.fireLight, topLabelComponent: () => (
      <Text style={{color: paletteColors.fireLight, fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>60k</Text>
    ),},
    {value: 50, label: 'Abr', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>50k</Text>
    ),},
    {value: 10, label: 'May', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ),},
    {value: 70, label: 'Jun', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>70k</Text>
    ),},
    {value: 100, label: 'Jul', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>100k</Text>
    ),},
    {value: 20, label: 'Ag', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>20k</Text>
    ),},
    {value: 30, label: 'Sep', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>30k</Text>
    ),},
    {value: 10, label: 'Oct', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>10k</Text>
    ),},
    {value: 80, label: 'Nov', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>80k</Text>
    ),},
    {value: 90, label: 'Dic', topLabelComponent: () => (
      <Text style={{color: 'black', fontSize: 8, fontWeight: 'bold', marginBottom: 6}}>90k</Text>
    ),},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <View style={{marginRight: 'auto', marginLeft: 'auto', padding: 2, width: '90%'}} onLayout={(event) => {
          // Obtén las dimensiones del View cuando cambie su tamaño
          const { width } = event.nativeEvent.layout;
          setViewWidth(width);
          setTimeout(() => {
            console.log(width);
            
          }, 3000);
        }}>
          <View style={{marginBottom: 15}}>
            <SegmentedControlTab
              tabStyle={{width: '80%', height: 50, backgroundColor: paletteColors.white, borderColor: paletteColors.limeLight}}
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
                    // width={viewWidth}
                    barWidth={20}
                    noOfSections={5}
                    barBorderRadius={4}
                    frontColor="lightgray"
                    data={dataIncomes}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    isAnimated 
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
                  isAnimated 
              />
            </View>
          }
        </View>

        <View style={{marginRight: 'auto', marginLeft: 'auto', padding: 2, width: '90%'}} onLayout={(event) => {
          // Obtén las dimensiones del View cuando cambie su tamaño
          const { width } = event.nativeEvent.layout;
          setViewWidth(width);
          setTimeout(() => {
            console.log(width);
            
          }, 3000);
        }}>
          <View style={{marginBottom: 15}}>
            <SegmentedControlTab
              tabStyle={{width: '80%', height: 50, backgroundColor: paletteColors.white, borderColor: paletteColors.fireLight}}
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
                    isAnimated 
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
                  isAnimated 
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