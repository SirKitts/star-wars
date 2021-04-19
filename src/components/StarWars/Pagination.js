import React from 'react';

const Pagination = ({ prev, page, next, onChangePage }) => {
    return (
        <div className="starwars-pagination">
            {prev && (<i
                className="fas fa-arrow-circle-left starwars-arrow fa-2x"
                onClick={() => onChangePage(prev)}
            />)}
            &nbsp;<span style={{paddingTop: '0.3rem'}}>Page {page}</span>
            {next && (<i
                className="fas fa-arrow-circle-right starwars-arrow fa-2x"
                onClick={() => onChangePage(next)}
            />)}
        </div>
    );
}

export default Pagination;
