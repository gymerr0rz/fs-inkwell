import { Search, Plus, CheckCircle, MoreVertical } from 'lucide-react';
import { useEffect, useState } from 'react';
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
import { useDrag } from 'react-dnd';
import Draggable from 'react-draggable';

const TasksView = () => {
  const [tasks, setTasks] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [showOptions, setShowOptions] = useState([]);
  let [newTaskCount, setNewTaskCount] = useState(0);
  let [completedTask, setCompletedTask] = useState(0);
  const [search, setSearch] = useState(null);
  const header = useAuthHeader();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInside = event.target.closest('.tasks-content');
      if (!clickedInside) {
        handleCloseOptions();
      }
    };
    document.addEventListener('click', handleClickOutside);
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('https://inkwell.onrender.com/user/getTasks').then((response) => {
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
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCloseOptions = () => {
    setShowOptions({});
  };

  const handleClose = () => {
    setShowComponent(false);
  };

  const handleClick = () => {
    setShowComponent(true);
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
      .get(
        'https://inkwell.onrender.com/user/getTasks?search=' + e.target.value
      )
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
              <button onClick={handleClick}>
                <Plus />
                ADD
              </button>
            </TasksTitle>
            <TaskScroll>
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
              <button onClick={handleClick}>
                <Plus />
                ADD
              </button>
            </TasksTitleCompleted>
            <TaskScroll>
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
