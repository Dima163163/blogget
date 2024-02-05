import {useDispatch} from 'react-redux';
import style from './Search.module.css';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {useState} from 'react';
import {searchRequest} from '../../../store/search/searchAction';

export const Search = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest(search));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        className={style.search}
        type='search'
        onChange={e => setSearch(e.target.value)}
        value={search}/>
      <button type='submit' className={style.button}>
        <SearchIcon className={style.svg} />
      </button>
    </form>
  );
};
