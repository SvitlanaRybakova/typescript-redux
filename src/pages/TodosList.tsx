import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import { fetchTodos, setTodoPage } from '../store/action-creators/fetchTodos';

const TodosList: React.FC = () => {
  const { todos, page, limit, loading, error } = useTypeSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos(page, limit));
  }, [page]);

  const pages = [1, 2, 3, 4, 5];
  return (
    <div>
      ToDo List
      {pages.map((p) => (
        <span
        onClick={()=>dispatch(setTodoPage(p))}
          style={{ border: p === page ? '2px solid green ' : '1px solid gray', padding: 5, margin: 5 }}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default TodosList;
