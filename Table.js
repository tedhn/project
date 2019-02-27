import React, {Component} from 'react';



class Table extends Component {
    render() {
        const { characterData , removeCharacter } = this.props;

	

        return (
            <table>
                	<TableHeader />
                	<TableBody 
				charactersData={characterData}
				remove = {removeCharacter} 
			/>
            </table>
        );
    }
}


const TableHeader = () => {
		return (
			<thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                	</thead>

		);
};


const TableBody = props => { 
    const rows = props.charactersData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
		    <td><button onClick={() => props.remove(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default Table;