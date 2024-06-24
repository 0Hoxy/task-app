import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
import { useEffect, useState } from 'react';

// 글로벌 변수로 로컬저장소의 'tasks'를 가져와 saveTasks에 저장함
const saveTasks = localStorage.getItem('tasks');

export default function App() {
  // 로컬저장소는 제이슨(문자열)이므로 자바스크립트 객체로 변환함(JSON.parse )
  // 만약 로컬저장소에 tasks가 아예 없다면 || [ ] => 빈 배열을 가져옴 (없으면 에러발생)
  const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <header className='app_header'>구독 할인 이벤트 진행중</header>
      <main className='app_main'>
        <TaskColumn title='할 일' icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete} />
        <TaskColumn title='진행중' icon={doingIcon} tasks={tasks} status='doing' handleDelete={handleDelete} />
        <TaskColumn title='완 료' icon={doneIcon} tasks={tasks} status='done' handleDelete={handleDelete} />
      </main>
    </div>
  );
}
