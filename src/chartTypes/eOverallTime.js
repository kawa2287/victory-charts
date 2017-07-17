import React from 'react';
import frontEndData from './chartData/frontEndData.js';
import { VictoryStack, VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryGroup } from 'victory';
import { LeaderBoard } from './chartData/overallSplitTimes.js';
//import { getMax, percentifyData } from './helpers/helperFunctions';
import { getStyles } from './helpers/chartStyles';

const styles = getStyles();

export default class eOverallChart extends React.Component {

  render() {
    
    
    const barData = LeaderBoard(frontEndData);
    console.log(barData);
    



    return (
      <div>
        <VictoryChart 
        domainPadding={{ y: 50}} 
        theme={VictoryTheme.material}
        padding={{ top: 80, bottom: 80, left: 80, right: 80 }}>
        
            <VictoryGroup 
            offset={30} 
            style={{ data: { width: 10 } }}>
            
              <VictoryStack 
              colorScale={"red"} 
              horizontal={true}
              style={styles.stackBarStyleA}
              animate={{
                  duration: 2000,
                  onLoad: { duration: 2000 }
                  
              }}>

                {barData.map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                 
                })}
                
                
              </VictoryStack>
            </VictoryGroup>
            <VictoryAxis
              dependentAxis
              orientation="left"
              standalone={false}
              tickValues={barData[0].map((d) =>{
                return d.x;
              })}
              style={{ tickLabels: { fill: "tomato" } }}
            />
          </VictoryChart>
      </div>
    );
  }
}

