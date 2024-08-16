import React, { useState, useEffect } from "react";

import { getData, removeData } from "../../utils";

const DysfunctionalTasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [targetTask, setTargetTask] = useState({});
  const [renderRealRemoveBtn, setRenderRealRemoveBtn] = useState(false);
  const [randomEffect, setRandomEffect] = useState(null);
  const removeBtnEffects = [
    "click-n-times",
    "random-position",
    "make-it-huge",
    "make-description-huge",
    "show-random-background"
  ];

  // n-times click effect
  const [nTimes, setNTimes] = useState(0);
  const [actualTimesClicked, setActualTimesClicked] = useState(0);

  useEffect(() => {
    if (nTimes !== 0 && actualTimesClicked !== 0 && actualTimesClicked < nTimes) {
      if (actualTimesClicked === nTimes) {
        setRenderRealRemoveBtn(true);
        setNTimes(0);
        setActualTimesClicked(0);
        setRandomEffect(null);
      }
    }
  }, [actualTimesClicked, nTimes]);

  useEffect(() => {
    getData("tasks", (tasksResult) => setTasks(tasksResult));
  }, []);

  const triggerRandomEffect = (task) => {
    const randomEffect = removeBtnEffects[Math.floor(Math.random() * removeBtnEffects.length)];
    setRandomEffect(randomEffect);
    setTargetTask(task);
  }

  const renderGagRemoveBtn = (task) => {
    return !renderRealRemoveBtn && !randomEffect && (
      <button 
        onClick={triggerRandomEffect(task)}
      >
        I'm done
      </button>
    );
  };

  const renderRemoveBtnWithEffects = () => {
    if (!renderRealRemoveBtn && randomEffect) {
      switch(randomEffect) {
        case "click-n-times":
          setNTimes(Math.floor(Math.random() * 10) + 1);
          return (
            <button 
              onClick={() => setActualTimesClicked(actualTimesClicked + 1)}
            >
              I'm clicked {actualTimesClicked} times, click me {nTimes} times
            </button>
          );
        case "random-position":
          return (
            <button 
              style={{
                position: "absolute",
                top: `${Math.floor(Math.random() * 100)}%`,
                left: `${Math.floor(Math.random() * 100)}%`,
              }}
              onClick={() => {
                setRandomEffect(null);
                setRenderRealRemoveBtn(true);
              }}
            >
              I'm here, click me
            </button>
          );
        case "make-it-huge":
          return (
            <button 
              style={{
                fontSize: "40px",
                backgroundColor: "red"
              }}
              onClick={() => {
                setRandomEffect(null);
                setRenderRealRemoveBtn(true);
              }}
            >
              I'm a huge button, click me
            </button>
          );
        }
      }
    };

  const handleRemoveBtnClick = () => {
    removeData(
      "tasks",
      targetTask.description,
      "description",
      () => getData("tasks", (tasksResult) => setTasks(tasksResult))
    );
    setRandomEffectSatisfied(false);
  };

  const renderRemoveBtn = () => {
    return renderRealRemoveBtn && !randomEffect && (
      <button 
        onClick={handleRemoveBtnClick()}
      >
        I'm done
      </button>
    );
  };

  const renderList = () => {
    if (tasks && tasks.length) {
      return (
        <ul>
          {tasks.map((task, index) => (
            <li key={"task-" + index}>
              {task.description}
              {renderGagRemoveBtn(task)}
              {renderRemoveBtnWithEffects()}
              {renderRemoveBtn()}
            </li>
          ))}
        </ul>
      );
    }
  };

  return renderList();
};

export default DysfunctionalTasksList;