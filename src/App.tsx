import { app } from './App.css';
import { Header } from './features';
import { StatisticsContainer } from './features/Statistics/components/StatisticsContainer';

function App() {
  return (
    <>
      <Header />
      <main className={app}>
        <StatisticsContainer />
      </main>
    </>
  );
}

export default App;
