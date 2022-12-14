const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Teste 1' },
    'task-2': { id: 'task-2', content: 'Teste 2' },
    'task-3': { id: 'task-3', content: 'Teste 3' },
    'task-4': { id: 'task-4', content: 'Teste 4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Moment',
      taskIds: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'Finish',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default initialData;
