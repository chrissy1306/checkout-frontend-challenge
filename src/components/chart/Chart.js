import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Legend } from 'recharts';

import './Chart.css';

const fillColours = [
    '#E38627', '#C13C37', '#6A2135', '#07b9a2', '#505050'
];

function getPieChartData(ratings) {
    return ratings.map((key, index) => {
        return {
            name: `${key.rating} star`,
            value: key.count,
            fill: fillColours[index]
        }
    });
}

function Chart() {
    const ratings = useSelector(state => state.ratings);
    const pieChartData = getPieChartData(ratings);
    return (
        <div className='ChartContainer'>
            <Typography component="h2" variant="h5" gutterBottom>Review Chart</Typography>
            <PieChart width={500} height={250}>
            <Legend layout="horizontal" verticalAlign="top" align="center" />
            <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
}

export default Chart;