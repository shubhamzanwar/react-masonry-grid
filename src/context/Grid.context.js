import React from 'react';
import PropTypes from 'prop-types';

export const GridContext = React.createContext({});

export const GridContextProvider = ({ children, ...props }) => (
  <GridContext.Provider {...props}>{children}</GridContext.Provider>
);

GridContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
