import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {Routes, Route} from 'react-router-dom';
import {Rising} from './Rising/Rising';
import {NotFound} from './NotFound/NotFound';
import {Modal} from '../Modal/Modal';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<Rising />}/>
        <Route path='/auth' element={<Rising />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
      </Routes>
    </Layout>
  </main>
);
