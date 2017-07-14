import React from 'react';
import { VictoryStack, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryBar, VictoryGroup } from 'victory';
import overallData from './chartData/overallSplitTimes.js';
import { getMax, percentifyData } from './helpers/helperFunctions';
import { getStyles } from './helpers/chartStyles';

const styles = getStyles();

export default class eOverallChart extends React.Component {

  render() {
    
    
    const getBarData = () => {
      return [1].map(() => {
        return [
          { x: "TC", y:overallData[0]["runTime"] },
          { x: "Mike", y:overallData[1]["runTime"] },
          { x: "Matt", y:overallData[2]["runTime"] }
        ];
      });
    };
    
    
    /*
    const getBarData = [];
    
    for (var i = 0 ;  i < overallData.length ; i++) {
        getBarData[i]["runner"] = overallData[i]["runner"];
        getBarData[i][""]
    }
    */

    return (
      <div>
        <VictoryChart 
        domainPadding={{ y: 50 }} 
        theme={VictoryTheme.material}
        padding={{ top: 80, bottom: 80, left: 80, right: 80 }}>
        
            <VictoryGroup 
            offset={20} 
            style={{ data: { width: 15 } }}>
            
              <VictoryStack 
              colorScale={"red"} 
              horizontal={true}
              style={styles.stackBarStyleA}
              animate={{
                  duration: 2000,
                  onLoad: { duration: 2000 }
                  
              }}>
                
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
                
              </VictoryStack>
            </VictoryGroup>
          </VictoryChart>
      </div>
    );
  }
}

