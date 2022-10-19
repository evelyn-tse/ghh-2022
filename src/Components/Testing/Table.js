import React from 'react';

const Table = ({tableData}) => {

    // const [total, setTotal] = useState(0)

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.date}</td>
                            <td>{data.category}</td>
                            <td>{data.amount}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;