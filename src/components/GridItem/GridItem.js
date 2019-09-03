import React, {useRef, useContext, useEffect} from 'react';
import {GridContext} from '../../context/Grid.context';

export const GridItem = (props) => {

    const gridItemRef = useRef();
    const gridContext = useContext(GridContext);

    const itemLoaded = () => {
        const refHeight = gridItemRef.current.clientHeight;
        const refWidth = gridItemRef.current.clientWidth;
        const {columnWidth, rowHeight, gutter: rowGap} = gridContext;
        
        const desiredHeight = (columnWidth * refHeight) / refWidth;
        const rowSpan = Math.ceil((desiredHeight + rowGap) / (rowHeight + rowGap))
        
        gridItemRef.current.style = {
            height: `${desiredHeight}px`,
            width: `${columnWidth}px`,
            gridRowEnd: `span ${rowSpan}`
        }
    }

    useEffect(itemLoaded, []);

    return (
        <div 
            ref={gridItemRef} 
            style={{width: `${gridContext.columnWidth}px`, visibility: 'none'}}
            onLoad={itemLoaded}
        >
            {props.children}
        </div>
    )
}