import React, { useRef, useState, useEffect, useCallback } from 'react';
import './ScrollPicker.css';

const ScrollPicker = ({ arrayData, itemHeight, onScrollDirectionChange }) => {
  const [currentValue, setCurrentValue] = useState(arrayData[1]); // Initialize with the second item
  const scrollRef = useRef(null);
  const lastScrollTop = useRef(0);

  // Initialize scroll position
  useEffect(() => {
    if (scrollRef.current) {
      // Start with the middle item in view
      scrollRef.current.scrollTop = itemHeight * (arrayData.indexOf(currentValue) - 1);
    }
  }, [itemHeight]);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || !itemHeight) return;

    const scrollTop = container.scrollTop;

    // Calculate the index of the middle item
    const middleIndex = Math.round(scrollTop / itemHeight) + 1; // +1 to account for the middle position

    // Determine scroll direction
    if (scrollTop > lastScrollTop.current) {
      onScrollDirectionChange('up'); // Scrolling down
    } else if (scrollTop < lastScrollTop.current) {
      onScrollDirectionChange('down'); // Scrolling up
    }

    lastScrollTop.current = scrollTop;

    // Ensure the middleIndex is within bounds
    if (middleIndex >= 0 && middleIndex < arrayData.length) {
      setCurrentValue(arrayData[middleIndex]);
    }
  }, [arrayData, itemHeight, onScrollDirectionChange]);

  return (
    <div
      className="scroll-picker-root"
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        scrollSnapType: 'y mandatory',
        scrollPadding: `${itemHeight}px 0`,
      }}
    >
      <div style={{ height: `${itemHeight * arrayData.length}px` }}>
        {arrayData.map((value, index) => (
          <div
            key={index}
            className="scroll-picker-item to-center"
            style={{
              height: `${itemHeight}px`,
              transform: `translateY(${itemHeight * index}px)`,
              color: currentValue === value ? 'red' : 'white', // Highlight the current value
            //   fontSize: currentValue === value ? '1.25rem' : '', // Highlight the current value
              fontWeight: currentValue === value ? '600' : '', // Highlight the current value
            }}
          >
            {typeof value === 'number' ? value.toFixed(2) : value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollPicker;