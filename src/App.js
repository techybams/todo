
import './App.css';
import ToDoMenu from './components/ToDoMenu';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-pink-300 text-white">
      <h1 className='text-purple-900 mb-8 text-5x1 pt-12 font-bold'>To do List</h1>
      <ToDoMenu />
    </div>
  );
}

export default App;
