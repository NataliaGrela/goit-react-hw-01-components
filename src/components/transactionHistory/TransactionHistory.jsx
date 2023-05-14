import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionHistory}>
        <thead className={css.tableHead}>
          <tr>
            <th className={css.tableHeadingType}>Type</th>
            <th className={css.tableHeadingAmount}>Amount</th>
            <th className={css.tableHeadingCurrency}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.tableRow} key={id}>
              <td className={css.tableDataType}>{type}</td>
              <td className={css.tableDataAmount}>{amount}</td>
              <td className={css.tableDataCurrency}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
