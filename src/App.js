
import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <h1 className='text-5xl'>Mi primer Tailwind</h1>

    <Item></Item>
    <ItemListContainer></ItemListContainer>
    </>
  );
}

export default App;
