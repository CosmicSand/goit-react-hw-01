import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const transactions = items.map(transaction => {
    return (
      <tr key={transaction.id} className={css.row}>
        <td className={css.column}>{transaction.type}</td>
        <td className={css.column}>{transaction.amount}</td>
        <td className={css.column}>{transaction.currency}</td>
      </tr>
    );
  });

  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions}</tbody>
    </table>
  );
};
