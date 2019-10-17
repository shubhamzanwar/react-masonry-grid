import React, { useRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { GridContext } from "../../context/Grid.context";

const GridItem = props => {
  const gridItemRef = useRef();
  const gridItemWrapper = useRef();
  const gridContext = useContext(GridContext);

  const itemLoaded = () => {
    const refHeight = gridItemRef.current.clientHeight;
    const refWidth = gridItemRef.current.clientWidth;
    const { columnWidth, rowHeight, rowGutter: rowGap } = gridContext;

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
        {props.children}
      </div>
    </div>
  );
};

GridItem.propTypes = {
  children: PropTypes.node
};

export default GridItem;
