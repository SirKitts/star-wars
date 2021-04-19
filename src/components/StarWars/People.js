import React, { Fragment } from 'react';

const TableHead = () => (
    <table id="people">
        <thead>
            <tr>
                <th width="50%">
                    Name
                </th>
                <th width="25%">
                    Height
                </th>
                <th width="25%">
                    Mass
                </th>
            </tr>
        </thead>
    </table>
);

const Person = ({ item, onSelectedPerson }) => (
    <tr onClick={() => onSelectedPerson(item)}>
        <td width="50%">{item.name}</td>
        <td width="25%">{item.height}</td>
        <td width="25%">{item.mass}</td>
    </tr>
);

const People = ({ list, onSelectedPerson }) => {
    return (
        <Fragment>     
            <TableHead />
            <section className="starwars-people">
                <table id="people">
                    <tbody>
                        {list.map(person => (
                            <Person
                                key={person.name}
                                item={person}
                                onSelectedPerson={onSelectedPerson}
                            />
                        ))}
                    </tbody>
                </table>
            </section>
        </Fragment>
    );
}

export default People;
