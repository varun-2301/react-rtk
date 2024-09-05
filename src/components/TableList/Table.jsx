import PropTypes from 'prop-types'

export const Table = ({ tableHeaders, tableBodyContent }) => {
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr role="row">
                    {tableHeaders.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{tableBodyContent()}</tbody>
        </table>
    )
}

Table.propTypes = {
    tableHeaders: PropTypes.array,
    tableBodyContent: PropTypes.func,
}
