import TaskCard from './TaskCard';
import './TaskColumn.css';
import PropTypes from 'prop-types';

export default function TaskColumn({ title, icon, tasks, status, handleDelete }) {
  return (
    <section className='task_column'>
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} alt={`${title} icon`} />
        {title}
      </h2>
      {tasks.length > 0
        ? tasks.map(
            (task, index) =>
              task.status === status && (
                <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} />
              )
          )
        : null}
    </section>
  );
}
TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
