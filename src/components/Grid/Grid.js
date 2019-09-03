import React from 'react';
import {GridContextProvider} from '../../context/Grid.context';
import styles from './Grid.styles.css';

export const Grid = ({gutter, columnWidth, rowHeight, children}) => {
    const gridContainerStyle = {
        gridGap: `${gutter}px`,
        gridTemplateColumns: `repeat(auto-fill, ${columnWidth}px)`,
        gridAutoRows: `${rowHeight}px`
    }
    return (
        <GridContextProvider value={{columnWidth, rowHeight, gutter}}>
            <div className={styles.grid} style={gridContainerStyle}>
                {children}
            </div>
        </GridContextProvider>
    )
}