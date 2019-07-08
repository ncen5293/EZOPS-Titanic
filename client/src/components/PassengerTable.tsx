import * as React from 'react';

import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class PassengerTable extends React.PureComponent<{passengersList: any[]}, IGridProps> {
    constructor(props: {passengersList: any[]}) {
        super(props);

        const source = {
          localdata: this.props.passengersList,
          datafields: [
            { name: 'Name', type: 'string' },
            { name: 'PassengerId', type: 'number' },
            { name: 'Survived', type: 'number' },
            { name: 'Pclass', type: 'number' },
            { name: 'Sex', type: 'string' },
            { name: 'Age', type: 'number' },
            { name: 'SibSp', type: 'number' },
            { name: 'Parch', type: 'number' },
            { name: 'Ticket', type: 'string' },
            { name: 'Fare', type: 'number' },
            { name: 'Cabin', type: 'string' },
            { name: 'Embarked', type: 'string' }
          ],
          datatype: 'array'
        };

        this.state = {
          source: new jqx.dataAdapter(source),
          columns: [
            { text: 'Passenger Id', datafield: 'PassengerId' },
            { text: 'Survived', datafield: 'Survived' },
            { text: 'Passenger Class', datafield: 'Pclass' },
            { text: 'Name', datafield: 'Name' },
            { text: 'Sex', datafield: 'Sex' },
            { text: 'Age', datafield: 'Age' },
            { text: 'SibSp', datafield: 'SibSp' },
            { text: 'Parch', datafield: 'Parch' },
            { text: 'Ticket', datafield: 'Ticket' },
            { text: 'Fare', datafield: 'Fare' },
            { text: 'Cabin', datafield: 'Cabin' },
            { text: 'Embarked', datafield: 'Embarked' }
          ]
        }
    }

    render() {
      console.log(this.props.passengersList)
      return (
          <JqxGrid
              width={"100%"} autoheight={true} columns={this.state.columns} source={this.state.source}
          />
      )
    }
}

export default PassengerTable;
