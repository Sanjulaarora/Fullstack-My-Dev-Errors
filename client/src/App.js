import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Missing from './components/Missing';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import { AppProvider } from './context/AppContext';

const Home = lazy(() => import('./components/Home'));
const NewBlog = lazy(() => import('./components/NewBlog'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const EditBlog = lazy(() => import('./components/EditBlog'));
const About = lazy(() => import('./components/About'));
const Login = lazy(() => import('./components/Login'));

function App() {
  return (
    <div id="App" className="text-black flex flex-col flex-start overflow-y-auto">
      <AppProvider>
        <Header />
        <Nav />
        <Banner />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/blog' component={NewBlog} />
            <Route path='/edit/:id' component={EditBlog} />
            <Route path='/blog/:id' component={BlogPage} />
            <Route path='/about' component={About}/>
          </Suspense>
          <Route path='*' component={Missing} />
        </Switch>
        <Footer />  
      </AppProvider> 
    </div>
  );
}

export default App;
