import React from 'react';
import PropTypes from 'prop-types';
import {useBestPosts} from '../hooks/useBestPosts';

export const postContext = React.createContext([]);

export const PostContextProvider = ({children}) => {
  const [posts] = useBestPosts();

  return (
    <postContext.Provider value={{posts}}>
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
