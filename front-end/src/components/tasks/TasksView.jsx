import { List, Search } from 'lucide-react';

const TasksView = () => {
  return (
    <div>
      <div>
        <h1>My Tasks</h1>
        <br />
        <List />
        <div>
          <Search />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default TasksView;
