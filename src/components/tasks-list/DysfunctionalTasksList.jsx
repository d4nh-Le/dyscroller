import React, { useState, useEffect } from "react";

import { getData, removeData } from "../../utils";

const DysfunctionalTasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [targetTask, setTargetTask] = useState({});
  const [renderRealRemoveBtn, setRenderRealRemoveBtn] = useState(false);
  const [randomEffect, setRandomEffect] = useState(null);
  const removeBtnEffects = [
    // "click-n-times",
    "random-position",
    "make-it-huge",
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
        onClick={() => triggerRandomEffect(task)}
      >
        I'm done
      </button>
    );
  };

  const renderRemoveBtnWithEffects = () => {
    if (!renderRealRemoveBtn && randomEffect) {
      switch(randomEffect) {
        case "random-position":
          return (
            <div
              style={{
                position: "relative",
                top: `${Math.floor(Math.random() * 70)}%`,
                left: `${Math.floor(Math.random() * 70)}%`,
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
                onClick={() => {
                  setRandomEffect(null);
                  setRenderRealRemoveBtn(true);
                }}
              >
                I'm here, click me
              </button>
            </div>
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
    setRenderRealRemoveBtn(false);
    setRandomEffect(null);
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