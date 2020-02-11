import React, { useContext, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import TestTable from '../tables/TestTable';
import TestChart from '../charts/TestChart';
import { RootStoreContext } from '../../app/stores/rootStore';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { observer } from 'mobx-react-lite';


const HomePage = () => {
    const rootStore = useContext(RootStoreContext);
    const { loadTestData, loadingInitial } = rootStore.testDataStore;

    useEffect(() => {
        loadTestData();
    }, [loadTestData]);


    if (loadingInitial)
        return <LoadingComponent content='Loading Test Data' />;


    return (
        <Container>
            <TestTable />
            <TestChart />
        </Container>
    );
};

export default observer(HomePage);