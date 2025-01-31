import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

import React from 'react'

const LineChart = () => {
  return (
    <div>
        
      <Line
      
                      data={{
                          labels: ['A', 'B', 'C'],
                          datasets: [
                              {
                                  label: "Revenue",
                                  data: [200, 300, 400],
                              },
                              {
                                  label: 'Loss',
                                  data:[70, 80, 90]
                              }
                          ]
                      }}
                  />
    </div>
  )
}

export default LineChart

