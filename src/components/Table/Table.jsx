const Table = (props) => {
    const {data} = props;

    const headers = data.length > 0 ? Object.keys(data[0]) : 0;

    return <>
        <h2>Tables</h2>

        <table className='table table-bordered dataTable table-responsive-lg' id='dataTable'>
            <thead>
            <tr>
                <th className='p-0 m-0 d-flex justify-content-center align-items-center'>
                    <div className="form-check d-inline">
                        <input className="form-check-input mt-3" type="checkbox" checked/>
                    </div>
                </th>
                {headers.map(header => (
                    <th key={header}>{header.toLocaleLowerCase()}</th>
                ))}
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    <td className='p-0 m-0 d-flex justify-content-center align-items-center'>
                        <div className="form-check d-inline">
                            <input className="form-check-input mt-3" type="checkbox" value="" id="flexCheckChecked"/>
                        </div>
                    </td>
                    {headers.map((header) => (
                        <td key={`${index}-${header}`}>{row[header]}</td>
                    ))}
                    <td>Actions</td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}

export default Table;