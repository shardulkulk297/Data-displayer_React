
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


function App() {
  
  const data = [
    {name: "Facebook", value: 20000000},
    {name: "Instagram", value: 30000000},
    {name: "Twitter", value: 15000000},
    {name: "Telegram", value: 1000000}
  ]

  return (
    <>
       <h1>Social Media Users Chart</h1>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
   
    </>
  )
}

export default App
