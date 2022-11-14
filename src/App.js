import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './/style.scss'
import JobItem from './components/JobItem';
import JobBoard from './pages/JobBoard';
import ContentLoader from 'react-content-loader';
import JobDetails from './pages/JobDetails';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [id, setId] = useState('');
  React.useEffect(() => {
    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
    .then((res) => res.json())
    .then((json) => {
      setItems(json);
      setIsLoading(false);
    }).catch((err) => {
      console.warn(err);
    })
  }, [])
  return (
    <div className="App">
        
       <Routes>
          <Route path='/' element={<JobBoard items={items} setId={setId} isLoading={isLoading}/>}/>
          <Route path='/job/:id' element={<JobDetails items={items} id={id}/>}/>
       </Routes>
    </div>
  );
}

export default App;
