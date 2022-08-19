import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
const data = [
  {date: 'Aug 05', rank: 'Ass 1', mmr: 100}, 
  {date: 'Aug 07', rank: 'Ass 1', mmr: 200}, 
  {date: 'Aug 07', rank: 'Ass 1', mmr: 300}, 
  {date: 'Aug 08', rank: 'Ass 1', mmr: 200}, 
  {date: 'Aug 09', rank: 'Ass 1', mmr: 500}, 
  {date: 'Aug 10', rank: 'Ass 1', mmr: 600}, 
];

const customizedAxisTick = (props: {x: number; y: number; payload: {value: string}}) => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <text fontSize={12} x={0} y={0} dy={16} textAnchor="end" fill="black" transform="rotate(-35)">
        {props.payload.value}
      </text>
    </g>
  );
}

function Valorant() {
    return (
        <div className="text-center">
          <section className="bg-zinc-100 p-6">
            <ResponsiveContainer width='100%' height={400}>
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                <CartesianGrid stroke="#ccc"  strokeDasharray="5 5"/>
                <XAxis dataKey="date" tick={customizedAxisTick}/>
                <YAxis />
                <Line type="monotone" dataKey="mmr" stroke="#8884d8"/>
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </section>
        </div>
    );
}

export default Valorant;