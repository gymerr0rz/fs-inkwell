import { List, Search, Plus, CheckCircle, MoreVertical } from 'lucide-react';
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
          <TasksContent>
            <TasksMenu>
              <div className="abc">
                <CheckCircle />
                <h1>IconText</h1>
              </div>
              <MoreVertical />
            </TasksMenu>
            <div>
              <p>Monday</p>
              <div>UI/UX</div>
            </div>
          </TasksContent>
        </TasksManager>
      </TasksBottom>
    </TasksContainer>
  );
};

export default TasksView;
