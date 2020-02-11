import React, { useContext } from 'react'
import { Table } from 'semantic-ui-react'
import { RootStoreContext } from '../../app/stores/rootStore';

const TestTable = () => {
  const rootStore = useContext(RootStoreContext);
  const { getTestData } = rootStore.testDataStore;

  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>CumeDist</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {getTestData.map(data => (
          <Table.Row>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{data.cumeDist}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TestTable;