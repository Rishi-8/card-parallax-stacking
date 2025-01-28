import Card from './components/Card'
import { projects } from './data.js'

function App() {
  return (
    <main className="main">
      {
        projects.map((project, index) => {
          return <Card key={index} {...project} />
        })
      }
    </main>
  );
}

export default App;
