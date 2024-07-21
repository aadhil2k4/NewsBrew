import './App.css';
import React, {useState} from 'react'
import Navbar from './components/navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Search from './components/Search';


const App = () =>{
  const apiKey=process.env.REACT_APP_NEWS_API
  const pagesize = 15;
  const [progress, setProgress] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (query) =>{
      setSearchQuery(query)
  }


    return (
      <div>
        <Router>
          <div>
        <Navbar onSearchChange={handleSearchChange}/>
        <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
    </div>
        <Switch>
        {searchQuery && (
              <Route exact path="/everything">
                <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize} key="everything" country="in" searchQuery={searchQuery} />
              </Route>
            )}
          <Route exact path="/">
          <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize}  key="general" country="in" category="general"/>
          </Route>
          <Route exact path="/business">
          <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize}  key="business" country="in" category="business"/>
          </Route>
          <Route exact path="/sports">
          <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize}  key="sports" country="in" category="sports"/>
          </Route>
          <Route exact path="/technology">
          <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize}  key="technology" country="in" category="technology"/>
          </Route>
          <Route exact path="/entertainment">
          <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize}  key="entertainment"  country="in" category="entertainment"/>
          </Route>
          <Route exact path="/health">
          <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize}  key="health" country="in" category="health"/>
          </Route>
          <Route exact path="/science">
          <News setProgress={setProgress} apiKey={apiKey} pagesize={pagesize}  key="science" country="in" category="science"/>
          </Route>
        </Switch>
        </div>
        </Router>
      </div>
    )
  }

  export default App;

