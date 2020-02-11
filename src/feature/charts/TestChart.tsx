import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { RootStoreContext } from '../../../src/app/stores/rootStore';
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';

const TestChart = () => {
    const rootStore = useContext(RootStoreContext);
    const { getTestData } = rootStore.testDataStore;

    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <BarChart width={600} height={300} data={getTestData!}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="cumeDist" fill="#8884d8" barSize={30} />
                </BarChart>
            </Grid.Column>
        </Grid>

    );
};

export default observer(TestChart);