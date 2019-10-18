import React, { useRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { GridContext } from '../../context/Grid.context';

const GridItem = ({ children }) => {
  const gridItemRef = useRef();
  const gridItemWrapper = useRef();
  const gridContext = useContext(GridContext);

  const itemLoaded = () => {
    const refHeight = gridItemRef.current.clientHeight;
    const refWidth = gridItemRef.current.clientWidth;
    const { columnWidth, rowHeight, gutter: rowGap } = gridContext;

    const desiredHeight = (columnWidth * refHeight) / refWidth;
    const rowSpan = Math.ceil((desiredHeight + rowGap) / (rowHeight + rowGap));

    gridItemWrapper.current.style.height = `${desiredHeight}px`;
    gridItemWrapper.current.style.width = `${columnWidth}px`;
    gridItemWrapper.current.style.gridRowEnd = `span ${rowSpan}`;
  };

  useEffect(itemLoaded, []);

  return (
    <div
      ref={gridItemWrapper}
      style={{ width: `${gridContext.columnWidth}px` }}
    >
      <div ref={gridItemRef} onLoad={itemLoaded}>
        {children}
      </div>
    </div>
  );
};

GridItem.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GridItem;
