import { useState } from 'react';
import Tag from './Tag';
import './TaskForm.css';
import PropTypes from 'prop-types';
export default function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: '',
      status: 'todo',
      tags: [],
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  console.log(taskData.tags); //태그 선택을 확인
  //선택된 태그아이템중 tag가 있으면 true 없으면 false
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={taskData.task}
          name='task'
          className='task_input'
          placeholder='Enter your task'
        />

        <div className='task_form_bottom_line'>
          <div>
            <Tag tagName='HTML' selectTag={selectTag} selected={checkTag('HTML')} />
            <Tag tagName='CSS' selectTag={selectTag} selected={checkTag('CSS')} />
            <Tag tagName='JavaScript' selectTag={selectTag} selected={checkTag('JavaScript')} />
            <Tag tagName='REACT' selectTag={selectTag} selected={checkTag('REACT')} />
          </div>
          <div>
            <select className='task_status' name='status' value={taskData.status} onChange={handleChange}>
              <option value='todo'>할일</option>
              <option value='doing'>진행중</option>
              <option value='done'>완료</option>
            </select>
            <button type='submit' className='task_submit'>
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired,
};
