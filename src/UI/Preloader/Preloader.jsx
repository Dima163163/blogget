import MoonLoader from 'react-spinners/ClipLoader';
import PropsTypes from 'prop-types';

export const Preloader = ({css, size}) => (
  <MoonLoader color='#cc6633' css={css} size={size} />
);

Preloader.propTypes = {
  css: PropsTypes.object,
  size: PropsTypes.number,
};
