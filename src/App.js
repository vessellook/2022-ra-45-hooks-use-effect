import { useState } from 'react';
import './App.css';
import useJsonFetch from './hooks/useJsonFetch';
import { listEndpoint } from './api';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [users, loading, error] = useJsonFetch(listEndpoint);
  const [chosenUser, setChosenUser] = useState(null);

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  if (loading || users == null) {
    return <div className="loading">Загрузка...</div>;
  }

  const details = chosenUser != null && <Details info={chosenUser} />;

  return (
    <div className='app'>
      <List
        users={users}
        chosenUser={chosenUser}
        onChoose={(user) => setChosenUser(user)}
      />
      {details}
    </div>
  );
}

export default App;
