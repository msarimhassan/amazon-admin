import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer
} from 'recharts';
import '../../styles/App.css';

export default function RevenueReport() {
    const data01 = [
        { name: 'January', value: 400 },
        { name: 'Febuary', value: 300 },
        { name: 'March', value: 300 },
        { name: 'April', value: 200 },
    ];
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        // parent div
        <div className='mt-5 d-flex flex-column flex-md-column flex-lg-row justify-content-center'>
            {/* child div */}
            <div className='align-items-center' >
                <span className='h4'>Orders</span>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data01}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#0A06F9 '
                    />
                    <Pie
                        data={data01}
                        dataKey='value'
                        nameKey='name'
                        cx='50%'
                        cy='50%'
                        innerRadius={60}
                        outerRadius={80}
                        fill='#0B8FEA '
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>

            <div>
                <BarChart height={300} width={750} data={data}>
                    <Bar dataKey='uv' fill='#0B8FEA' />
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
}
