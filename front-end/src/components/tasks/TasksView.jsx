import { Search, Plus, CheckCircle, MoreVertical } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
  TasksContainer,
  TasksTop,
  TasksSearch,
  TasksBottom,
  TasksTopText,
  TasksManager,
  TasksTitle,
  TasksContent,
  TasksMenu,
  TasksDate,
  TasksCategory,
  TasksTitleCompleted,
  TaskScroll,
} from '../../styles/tasks/TasksView.styled';
import { useAuthHeader } from 'react-auth-kit';
import NewTask from './NewTask';
import ShowOptions from './show_options/ShowOptions';
import SERVER_URL from '../../config/config';

const TasksView = () => {
  const [tasks, setTasks] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [showOptions, setShowOptions] = useState([]);
  let [newTaskCount, setNewTaskCount] = useState(0);
  let [completedTask, setCompletedTask] = useState(0);
  const [search, setSearch] = useState(null);
  const [completeTask, setCompleteTask] = useState(false);
  const [addTask, setAddTask] = useState(false);

  const header = useAuthHeader();

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get(`${SERVER_URL}/user/getTasks`).then((response) => {
      const newTasks = response.data;
      setTasks([...tasks, ...newTasks]);
      newTasks.forEach((task) => {
        if (task.origin === 'new_tasks') {
          console.log('Added count to new task!');
          setNewTaskCount((prevCount) => prevCount + 1);
        } else if (task.origin === 'completed') {
          console.log('Added count to completed task!');
          setCompletedTask((prevCount) => prevCount + 1);
        }
      });
    });
  }, []);

  const handleCloseOptions = () => {
    setShowOptions({});
  };

  const handleClose = () => {
    setShowComponent(false);
  };

  const handleClick = (e) => {
    const newTask = document.getElementById('newBtn');
    const completeBtn = document.getElementById('completeBtn');
    newTask === e.currentTarget
      ? setAddTask((prevState) => !prevState)
      : setCompleteTask((prevState) => !prevState);
  };

  const handleOptions = (taskId) => {
    setShowOptions((prevState) => {
      const nextState = {};
      for (const id in prevState) {
        nextState[id] = id === taskId ? !prevState[id] : false;
      }
      nextState[taskId] = !prevState[taskId];
      return nextState;
    });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    axios
      .get(`${SERVER_URL}/user/getTasks?search=` + e.target.value)
      .then((response) => {
        const newTasks = response.data;
        setTasks([...newTasks]);
      });
  };

  return (
    <>
      {showComponent && <NewTask onClose={handleClose} />}
      <TasksContainer>
        <TasksTop>
          <TasksTopText>My Tasks</TasksTopText>
          <TasksSearch>
            <Search />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleSearch(e)}
            />
          </TasksSearch>
        </TasksTop>
        <TasksBottom>
          <TasksManager>
            <TasksTitle>
              <div className="title">
                <h1>New Tasks</h1>
                <div>{newTaskCount}</div>
              </div>
              <button id="newBtn" onClick={(e) => handleClick(e)}>
                <Plus id="newPlus" />
                ADD
              </button>
            </TasksTitle>
            <TaskScroll>
              {addTask ? (
                <TasksContent
                  className="tasks-content"
                  draggable="true"
                  onMouseLeave={handleCloseOptions}
                >
                  <TasksMenu>
                    <div className="abc">
                      <CheckCircle color="#8D8D8D" />
                      <input type="text" placeholder="Write a task name" />
                    </div>
                    <MoreVertical
                      className="vertical"
                      onClick={() => handleOptions()}
                    />
                  </TasksMenu>
                  <TasksDate>
                    <br />
                  </TasksDate>
                </TasksContent>
              ) : null}
              {tasks.map((task) => {
                if (task.origin === 'new_tasks') {
                  return (
                    <TasksContent
                      className="tasks-content"
                      draggable="true"
                      onMouseLeave={handleCloseOptions}
                    >
                      <TasksMenu>
                        <div className="abc">
                          <CheckCircle color="#8D8D8D" />
                          <h1>{task.title}</h1>
                        </div>
                        <MoreVertical
                          className="vertical"
                          onClick={() => handleOptions(task.title)}
                        />
                      </TasksMenu>
                      <TasksDate>
                        <p>{task.date}</p>
                      </TasksDate>
                      {showOptions[task.title] && (
                        <ShowOptions title={task.title} />
                      )}
                    </TasksContent>
                  );
                }
              })}
            </TaskScroll>
          </TasksManager>
          <TasksManager>
            <TasksTitleCompleted>
              <div className="title">
                <h1>Completed</h1>
                <div>{completedTask}</div>
              </div>
              <button id="completeBtn" onClick={(e) => handleClick(e)}>
                <Plus />
                ADD
              </button>
            </TasksTitleCompleted>
            <TaskScroll>
              {completeTask ? (
                <TasksContent
                  className="tasks-content"
                  draggable="true"
                  onMouseLeave={handleCloseOptions}
                >
                  <TasksMenu>
                    <div className="abc">
                      <CheckCircle color="#8D8D8D" />
                      <input type="text" placeholder="Write a task name" />
                    </div>
                    <MoreVertical
                      className="vertical"
                      onClick={() => handleOptions()}
                    />
                  </TasksMenu>
                  <TasksDate>
                    <br />
                  </TasksDate>
                </TasksContent>
              ) : null}
              {tasks.map((task) => {
                if (task.origin === 'completed') {
                  return (
                    <TasksContent
                      className="tasks-content"
                      draggable="true"
                      onMouseLeave={handleCloseOptions}
                    >
                      <TasksMenu>
                        <div className="abc">
                          <CheckCircle color="#8bffc0" />
                          <h1>{task.title}</h1>
                        </div>
                        <MoreVertical
                          className="vertical"
                          onClick={() => handleOptions(task.title)}
                        />
                      </TasksMenu>
                      <TasksDate>
                        <p>{task.date}</p>
                      </TasksDate>
                      {showOptions[task.title] && (
                        <ShowOptions title={task.title} />
                      )}
                    </TasksContent>
                  );
                }
              })}
            </TaskScroll>
          </TasksManager>
        </TasksBottom>
      </TasksContainer>
    </>
  );
};

export default TasksView;
