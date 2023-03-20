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
} from '../../styles/tasks/TasksView.styled';
import { useAuthHeader } from 'react-auth-kit';

const TasksView = () => {
  const [tasks, setTasks] = useState([]);

  const header = useAuthHeader();
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get('http://localhost:8080/user/getTasks').then((response) => {
      const newTasks = response.data;
      console.log(newTasks);
      setTasks([...tasks, ...newTasks]);
    });
  }, []);

  return (
    <TasksContainer>
      <TasksTop>
        <TasksTopText>My Tasks</TasksTopText>
        <Icon>
          <List />
          List
        </Icon>
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
            <button>
              <Plus />
              ADD
            </button>
          </TasksTitle>
          {tasks.map((task) => {
            console.log(task);
            return (
              <TasksContent>
                <TasksMenu>
                  <div className="abc">
                    <CheckCircle />
                    <h1>{task.title}</h1>
                  </div>
                  <MoreVertical />
                </TasksMenu>
                <TasksDate>
                  <p>{task.date}</p>
                  <TasksCategory>{task.category}</TasksCategory>
                </TasksDate>
              </TasksContent>
            );
          })}
        </TasksManager>
      </TasksBottom>
    </TasksContainer>
  );
};

export default TasksView;
