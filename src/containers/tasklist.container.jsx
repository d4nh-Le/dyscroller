import TasksList from "../components/tasks-list";
import React from "react";

export default function TasksListContainer({navigateTo}) {
    return <TasksList navigateTo={navigateTo} />;
}

