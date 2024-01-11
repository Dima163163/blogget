import style from './Layout.module.css';
import PropsTypes from 'prop-types';

export const Layout = ({children}) => (
  <div className={style.container}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropsTypes.string
};
