import Layout from '../Layout';
import Heading from './Heading';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Heading text="Главная" />
          <Search/>
          <Auth auth={false}/>
        </div>
      </Layout>
    </header>
  )
}