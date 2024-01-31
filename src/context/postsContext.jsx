import React from 'react';
import PropTypes from 'prop-types';
import {useBestPosts} from '../hooks/usePostsData';

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
