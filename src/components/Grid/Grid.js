import React from "react";
import PropTypes from "prop-types";
import { GridContextProvider } from "../../context/Grid.context";
import styles from "./Grid.styles.css";

const Grid = ({
  columnGutter,
  columnWidth,
  rowHeight,
  rowGutter,
  children
}) => {
  const gridContainerStyle = {
    gridColumnGap: `${columnGutter}px`,
    gridRowGap: `${rowGutter}px`,
    gridTemplateColumns: `repeat(auto-fill, minmax(${columnWidth}px, 1fr))`,
    gridAutoRows: `${rowHeight}px`
  };
  return (
    <GridContextProvider
      value={{ columnWidth, rowHeight, columnGutter, rowGutter }}
    >
      <div className={styles.grid} style={gridContainerStyle}>
        {children}
      </div>
    </GridContextProvider>
  );
};

Grid.propTypes = {
  columnGutter: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired,
  rowGutter: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default Grid;
