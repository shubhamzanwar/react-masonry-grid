import React from 'react';
import PropTypes from 'prop-types';

import { GridContextProvider } from '../../context/Grid.context';
import styles from './Grid.styles.css';

const Grid = ({
  gutter, columnWidth, rowHeight, children,
}) => {
  const gridContainerStyle = {
    gridGap: `${gutter}px`,
    gridTemplateColumns: `repeat(auto-fill, ${columnWidth}px)`,
    gridAutoRows: `${rowHeight}px`,
  };
  return (
    <GridContextProvider value={{ columnWidth, rowHeight, gutter }}>
      <div className={styles.grid} style={gridContainerStyle}>
        {children}
      </div>
    </GridContextProvider>
  );
};

Grid.propTypes = {
  gutter: PropTypes.number,
  columnWidth: PropTypes.number,
  rowHeight: PropTypes.number,
  children: PropTypes.element.isRequired,
};

Grid.defaultProps = {
  gutter: 0,
  columnWidth: 0,
  rowHeight: 0,
};

export default Grid;
