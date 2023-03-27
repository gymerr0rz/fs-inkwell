import { List, Search, Plus, CheckCircle, MoreVertical } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TasksContainer,
  TasksTop,
  Icon,
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
} from '../../styles/tasks/TasksView.styled';
import { useAuthHeader } from 'react-auth-kit';
import NewTask from './NewTask';
import ShowOptions from './show_options/ShowOptions';

const TasksView = () => {
  const [tasks, setTasks] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [showOptions, setShowOptions] = useState([]);

  const header = useAuthHeader();
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('http://localhost:8080/user/getTasks').then((response) => {
      const newTasks = response.data;
      setTasks([...tasks, ...newTasks]);
    });
  }, []);

  const handleClose = () => {
    setShowComponent(false);
  };

  const handleClick = () => {
    setShowComponent(true);
  };

  const handleOptions = (taskId) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId],
    }));
  };

  return (
    <>
      {showComponent && <NewTask onClose={handleClose} />}
      <TasksContainer>
        <TasksTop>
          <TasksTopText>My Tasks</TasksTopText>
          <TasksSearch>
            <Search />
            <input type="text" placeholder="Search..." />
          </TasksSearch>
        </TasksTop>
        <TasksBottom>
          <TasksManager>
            <TasksTitle>
              <div className="title">
                <h1>New Tasks</h1>
                <div>3</div>
              </div>
              <button onClick={handleClick}>
                <Plus />
                ADD
              </button>
            </TasksTitle>
            {tasks.map((task) => {
              if (task.origin === 'new_tasks') {
                return (
                  <TasksContent>
                    <TasksMenu>
                      <div className="abc">
                        <CheckCircle />
                        <h1>{task.title}</h1>
                      </div>
                      <MoreVertical onClick={() => handleOptions(task.title)} />
                    </TasksMenu>
                    <TasksDate>
                      <p>{task.date}</p>
                      <TasksCategory border={task.color}>
                        {task.category}
                      </TasksCategory>
                    </TasksDate>
                    {showOptions[task.title] && (
                      <ShowOptions title={task.title} />
                    )}
                  </TasksContent>
                );
              }
            })}
          </TasksManager>
          <TasksManager>
            <TasksTitleCompleted>
              <div className="title">
                <h1>Completed</h1>
                <div>3</div>
              </div>
              <button onClick={handleClick}>
                <Plus />
                ADD
              </button>
            </TasksTitleCompleted>
            {tasks.map((task) => {
              if (task.origin === 'completed') {
                return (
                  <TasksContent>
                    <TasksMenu>
                      <div className="abc">
                        <CheckCircle color="#8bffc0" />
                        <h1>{task.title}</h1>
                      </div>
                      <MoreVertical onClick={() => handleOptions(task.title)} />
                    </TasksMenu>
                    <TasksDate>
                      <p>{task.date}</p>
                      <TasksCategory>{task.category}</TasksCategory>
                    </TasksDate>
                    {showOptions[task.title] && (
                      <ShowOptions title={task.title} />
                    )}
                  </TasksContent>
                );
              }
            })}
          </TasksManager>
        </TasksBottom>
      </TasksContainer>
    </>
  );
};

export default TasksView;
