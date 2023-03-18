import { Camera, List, Search } from 'lucide-react';
import {
  TasksContainer,
  TasksTop,
  Icon,
  TasksSearch,
  TasksBottom,
  TasksTopText,
  TasksManager,
} from '../../styles/tasks/TasksView.styled';

const TasksView = () => {
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
          <div>
            <h1>New Tasks</h1>
            <div>3</div>
            <button>ADD</button>
          </div>
          <div>
            <div>
              <Camera />
              <h1>IconText</h1>
              <Camera />
            </div>
            <div>
              <p>Monday</p>
              <div>UI/UX</div>
            </div>
          </div>
        </TasksManager>
      </TasksBottom>
    </TasksContainer>
  );
};

export default TasksView;
