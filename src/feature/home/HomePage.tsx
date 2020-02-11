import React from 'react';
import NavBar from '../nav/NavBar';
import { Table, Container } from 'semantic-ui-react';
import TestTable from '../tables/TestTable';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import TestChart from '../charts/TestChart';

const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 300 }, { name: 'Page C', uv: 250 }];

const HomePage = () => {
    return (
        <Container>
            <TestTable />
            <TestChart />
        </Container>
    );
};

export default HomePage;