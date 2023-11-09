import './App.css'
import '@radix-ui/themes/styles.css';
import { Table } from '@radix-ui/themes';

function App() {

  const tableData = [
    {
      taskName: "Task1",
      respositoryLink: "https://github.com/vikramadityx/Task1",
      repositoryTitle: "Task 1 Repo",
      deploymentLink: "https://timely-starship-2d1b6e.netlify.app/",
      deploymentTitle: "Task 1 deployment"
    },
    {
      taskName: "Task2",
      respositoryLink: "https://github.com/vikramadityx/Task2",
      repositoryTitle: "Task 2 Repo",
      deploymentLink: "https://lighthearted-fox-584119.netlify.app/",
      deploymentTitle: "Task 2 deployment"
    },
    {
      taskName: "Task3",
      respositoryLink: "https://github.com/vikramadityx/Task3",
      repositoryTitle: "Task 3 Repo",
      deploymentLink: "https://stellar-valkyrie-ee6b4f.netlify.app/",
      deploymentTitle: "Task 3 deployment"
    },
    {
      taskName: "Task4",
      respositoryLink: "https://github.com/vikramadityx/Task4",
      repositoryTitle: "Task 4 Repo",
      deploymentLink: "https://capable-florentine-9fe22f.netlify.app/",
      deploymentTitle: "Task 4 deployment"
    },
    {
      taskName: "Task5",
      respositoryLink: "https://github.com/vikramadityx/Task5",
      repositoryTitle: "Task 5 Repo",
      deploymentLink: "https://steady-belekoy-d83fe5.netlify.app/",
      deploymentTitle: "Task 5 deployment"
    },
    {
      taskName: "Task6",
      respositoryLink: "https://github.com/vikramadityx/Task6",
      repositoryTitle: "Task 6 Repo",
      deploymentLink: "https://magnificent-mooncake-c3b4a2.netlify.app/",
      deploymentTitle: "Task 6 deployment"
    },
  ]

  return (
    <div style={{
      padding: "100px"
    }}>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Repository Link</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Deployment Link</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            tableData.map((item, i) => {
              return (
                <Table.Row>
                  <Table.RowHeaderCell>{item.taskName}</Table.RowHeaderCell>
                  <Table.Cell><a href={item.respositoryLink}>{item.repositoryTitle}</a></Table.Cell>
                  <Table.Cell><a href={item.deploymentLink}>{item.deploymentTitle}</a></Table.Cell>
                </Table.Row>
              )
            })
          }

        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default App
