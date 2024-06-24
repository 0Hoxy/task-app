import Tag from './Tag';
import deleteIcon from '../assets/delete.png';
import './TaskCard.css';
import PropTypes from 'prop-types'; // PropTypes import 추가

export default function TaskCard({ title, tags, handleDelete, index }) {
  return (
    <article className='task_card'>
      <p className='task_text'>{title}</p>

      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag, index) => (
            <Tag tagName={tag} key={index} selected={true} />
          ))}
        </div>
        <div className='task_delete'>
          <img className='delete_icon' src={deleteIcon} alt='delete icon' onClick={() => handleDelete(index)} />
        </div>
      </div>
    </article>
  );
}
TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
