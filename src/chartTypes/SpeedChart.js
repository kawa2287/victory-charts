import React from 'react';
import frontEndData from './chartData/frontEndData.js'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryLine } from 'victory';
import {speedDataforIndividual} from './chartData/lapSpeedData.js';
import {rateDataforIndividual}  from './chartData/lapChugData.js';
import { getMax, percentifyData } from './helpers/helperFunctions';
import { getStyles } from './helpers/chartStyles';

var person = "Matt"

const lapSpeedData = speedDataforIndividual(person, frontEndData);
const lapChugData = rateDataforIndividual(person, frontEndData);

var maxSpeed = getMax(lapSpeedData, "speed",5);
var maxChugRate = getMax(lapChugData, "rate", 10);
const styles = getStyles();

export default class SpeedChart extends React.Component {
  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{ top: 80, bottom: 80, left: 80, right: 80 }}
        domainPadding={30}>
      
        {/* Shared X-Axis */}
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Lap 1", "Lap 2", "Lap 3", "Lap 4"]}
          tickLabelComponent={
              <VictoryLabel 
              verticalAnchor={"middle"}
              angle={270} 
              dx={-20}/>  
          } 
        />
        
        {/* Left Y-Axis [LAP CHUG RATE] */}
        <VictoryBar
          data={percentifyData(lapChugData, "lap", "rate", 10)}
          x="lap"
          y="rate"
          style={styles.barStyleA}
          animate={{
            duration: 2000,
            onLoad: { duration: 2000 }
          }}
          //labels={(d) => `${d.y}`}
          
        />
        <VictoryAxis
          dependentAxis
          orientation="left"
          standalone={false}
          tickFormat={(x) => (`${Math.ceil(x * maxChugRate/.5)*.5} oz/min`)}
          style={{ tickLabels: { fill: "tomato" } }}
        />
        
        {/* Right Y-Axis [LAP RUN SPEED] */}
        <VictoryLine
            data={percentifyData(lapSpeedData, "lap", "speed", 5)}
            x="lap"
            y="speed"
            interpolation="catmullRom"
            style={{ 
              data: { stroke: "#222222", strokeWidth: 3, strokeLinecap: "round" } }}
            animate={{
              duration: 2000,
              onLoad: { duration: 2000 }
            }}
        />
        <VictoryAxis 
            dependentAxis
            orientation="right"
            standalone={false}
            tickFormat={(x) => (`${Math.ceil(x * maxSpeed/.5)*.5} mph`)}
            style={{ tickLabels: { fill: "#222222" } }}
          />
        
          
      </VictoryChart>
    )
  }
  
  
}

