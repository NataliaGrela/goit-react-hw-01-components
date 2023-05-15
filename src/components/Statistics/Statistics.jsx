import PropTypes from 'prop-types';
import { getRandomColor } from '../../utlis/getRaddomColor.js';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
      <h2 className={css.title}>{title ? title : 'Data' }</h2> 

      </section>
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
