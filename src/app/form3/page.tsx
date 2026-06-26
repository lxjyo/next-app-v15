import { findToDos } from './actions';
import AddToDoForm from './form';
import DeleteBtn from './delBtn';
import Post from './Post';
import { Suspense } from 'react';

export default async function Page() {
  const todos = await findToDos();
  return (
    <div className="p-4">
      <AddToDoForm />
      <Suspense fallback={<div>Loading post...</div>}>
        <Post  />
      </Suspense>
      <ul className='list-decimal list-inside'>
        {todos.map((todo, i) => <li key={i}>{todo} <DeleteBtn id={i} /></li>)}
      </ul>
    </div>
  )
}
