import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory';
import data from './chartData/lapSpeedData.js'


export default class SpeedChart extends React.Component {
  render() {
    return (
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        theme={VictoryTheme.material}
        padding={{ top: 80, bottom: 80, left: 80, right: 80 }}
        domainPadding={50}
        width={400}
        height={400}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Lap 1", "Lap 2", "Lap 3", "Lap 4"]}
          tickLabelComponent={
              <VictoryLabel 
              verticalAnchor={"middle"}
              angle={270} 
              dx={-20}/>  
          }
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x} mph`)}
        />
        <VictoryBar
          data={data}
          x="lap"
          y="speed"
        />
      </VictoryChart>
    )
  }
}

