import './App.css';
import BasciTable from './Components/BasciTable';
import FilteringTable from './Components/FilteringTabel';
import SoringTable from './Components/SortingTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Components/Pagination';
import RowSelection from './Components/RowSelection/RowSelection';
import ColumnOrder from './Components/ColumnOrder';
import ColumnHiding from './Components/ColumnHiding';

function App() {
  return (
    <div className='App '>
      <ColumnHiding />
    </div>
  );
}

export default App;
