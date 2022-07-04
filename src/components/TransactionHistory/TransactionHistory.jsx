import { Table, Head, TransactionItem } from './TransactionHistory.styled';
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Head>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Head>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionItem key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </TransactionItem>))}
            </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};