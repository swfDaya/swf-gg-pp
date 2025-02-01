import React, { useState, useRef, useEffect } from 'react';
import './Body.css';
import exerciseData from './exerciseData.json';
import move from './assets/move.svg';
import helm from './assets/helm.png';
import ScrollPicker from './ScrollPicker';

const OddDay = () => {
  const [selectedExercise, setSelectedExercise] = useState(100000);
  const [selectedSet, setSelectedSet] = useState(0);
  const [imageRotation, setImageRotation] = useState(0);

  const weightsData = Array.from({ length: 200 }, (_, i) => 0.25 * (i + 1));
  const repsData = Array.from({ length: 50 }, (_, i) => i + 1);

  const SetAndExerciseSelect = (exercise, set) => {
    setSelectedExercise(exercise);
    setSelectedSet(set);
  };

  const scrollRootRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    if (scrollRootRef.current) {
      setItemHeight(scrollRootRef.current.getBoundingClientRect().height / 3);
    }
  }, []);

  const handleWeightsScrollDirection = (direction) => {
    if (direction === 'up') {
      setImageRotation((prev) => prev + 10); // Rotate clockwise
    } else if (direction === 'down') {
      setImageRotation((prev) => prev - 10); // Rotate counter-clockwise
    }
  };

  const handleRepsScrollDirection = (direction) => {
    if (direction === 'up') {
      setImageRotation((prev) => prev - 10); // Rotate counter-clockwise
    } else if (direction === 'down') {
      setImageRotation((prev) => prev + 10); // Rotate clockwise
    }
  };

  const handleScroll = (e) => {
  const scrollTop = e.target.scrollTop;
  const itemHeight = e.target.scrollHeight / exerciseData.exercises.length; // Approx height of each item

  // Get index based on how far the user has scrolled
  const exerciseIndex = Math.round(scrollTop / itemHeight);

  // Ensure index is within bounds
  if (exerciseIndex >= 0 && exerciseIndex < exerciseData.exercises.length) {
    setSelectedExercise(exerciseData.exercises[exerciseIndex].exID);
  }
};


  return (
    <div className="odd-body-root font-inter">
      <div className="odd-body-scroll" onScroll={handleScroll}>
        {exerciseData.exercises.map((item, index) => (
          <div key={item.exID} className="odd-body-scroll-each">
            <div className="odd-body-scroll-each-name to-center">
              {item.sno}. {item.name}
            </div>
            <div
              className="odd-body-scroll-each-content"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className="odd-body-scroll-each-content-header font-nunito">
                <div>set</div>
                <div>weights</div>
                <div>reps</div>
              </div>
              {item.sets.map((set, index) => (
                <div
                  key={index}
                  className="odd-body-scroll-each-content-each"
                  onClick={() => SetAndExerciseSelect(set.exID, set.set)}
                  style={{
                    backgroundColor:
                      set.set === selectedSet && set.exID === selectedExercise
                        ? set.highlightColor
                        : '',
                    color:
                      set.set === selectedSet && set.exID === selectedExercise
                        ? 'white'
                        : '',
                    borderRadius:
                      set.set === selectedSet && set.exID === selectedExercise
                        ? '100px'
                        : '',
                  }}
                >
                  <div></div>
                  <div>{set.set}</div>
                  <div>{set.weight}</div>
                  <div>{set.reps}</div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="odd-body-control"
        style={{
          backgroundColor: exerciseData.exercises[selectedExercise % 100000].backgroundColor,
        }}
      >
        <div className="odd-body-control-scroll-parent">
          <div></div>
          <div className="odd-body-control-scroll-weights" ref={scrollRootRef}>
            <ScrollPicker
              arrayData={weightsData}
              itemHeight={itemHeight}
              onScrollDirectionChange={handleWeightsScrollDirection}
            />
          </div>
          <div className="odd-body-control-scroll-icon to-center">
            <img
              alt="moveIcon"
              src={move}
              style={{ transform: `rotate(${imageRotation}deg)` }}
            />
          </div>
          <div className="odd-body-control-scroll-reps">
            <ScrollPicker
              arrayData={repsData}
              itemHeight={itemHeight}
              onScrollDirectionChange={handleRepsScrollDirection}
            />
          </div>
          <div></div>
        </div>
        <div className="odd-body-control-button-parent font-nunito">
          <div
            style={{
              backgroundColor:
                exerciseData.exercises[selectedExercise % 100000].backgroundColor,
            }}
          >
            <div
              className="odd-body-control-button-reset to-center"
              style={{
                color:
                  exerciseData.exercises[selectedExercise % 100000].backgroundColor,
                backgroundColor:
                  exerciseData.exercises[selectedExercise % 100000].sets[0]
                    .highlightColor,
              }}
            >
              reset
            </div>
            <div
              className="odd-body-control-button-save to-center"
              style={{
                color:
                  exerciseData.exercises[selectedExercise % 100000].backgroundColor,
                backgroundColor:
                  exerciseData.exercises[selectedExercise % 100000].sets[0]
                    .highlightColor,
              }}
            >
              save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddDay;