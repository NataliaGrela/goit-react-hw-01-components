import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
    </section>
    <ul className={css.statList}>
      {stats.map(stat => {
        const bgColor = {
          backgroundColor: `rgb(
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)}
              )`,
        };
        return (
          <li className={css.item} style={bgColor} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
