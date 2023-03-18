import { List, Search } from 'lucide-react';
import {
  TasksContainer,
  TasksTop,
  Icon,
  TasksSearch,
  TasksBottom,
  TasksTopText,
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
        <div>
          <div>
            <h1>New Tasks</h1>
            <div>3</div>
            <button>ADD</button>
          </div>
        </div>
        <div>
          <div>
            <h1>New Tasks</h1>
            <div>3</div>
            <button>ADD</button>
          </div>
        </div>
        <div>
          <div>
            <h1>New Tasks</h1>
            <div>3</div>
            <button>ADD</button>
          </div>
        </div>
      </TasksBottom>
    </TasksContainer>
  );
};

export default TasksView;
