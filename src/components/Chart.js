import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  
  let data = props.data["Time Series (1min)"] ? Object.keys(props.data["Time Series (1min)"]).map(key => ({ time: key, stock: props.data["Time Series (1min)"][key]["4. close"] })) : [];
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={["dataMin", "dataMax"]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="stock" stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart;
