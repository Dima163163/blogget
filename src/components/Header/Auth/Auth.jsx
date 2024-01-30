import style from './Auth.module.css';
import PropsTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {Notice} from './Notice/Notice';

export const Auth = () => {
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth, error] = useAuth();
  console.log('error: ', error);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth({});
  };

  return (
    <>
      {loading && (<Preloader css={{display: 'block'}}
        size={30}/>)}
      <div className={style.container}>
        {auth.name ? (
          <>
            <button className={style.btn} onClick={getOut}>
              <img className={style.img}
                src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
              <Text className={style.btnText}>{auth.name}</Text>
            </button>
            {showLogout && (
              <button className={style.logout} onClick={logOut}>
                Выйти
              </button>
            )}
          </>
        ) :
          (
            <>
              <Text className={style.authLink} As='a' href={urlAuth}>
                <LoginIcon className={style.svg}/>
              </Text>
              {error && <Notice/>}
            </>
          )}
      </div>
    </>
  );
};

Auth.propTypes = {
  token: PropsTypes.string,
  delToken: PropsTypes.func,
  css: PropsTypes.object,
  size: PropsTypes.number,
};
