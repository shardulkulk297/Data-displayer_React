import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

const DoughnutC = () => {
  return (
    <div>
       <Doughnut
      
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

export default DoughnutC
