import React from 'react';

function Child({handleAdd}) {
    return (
        <div>

            <button onClick={handleAdd}>
                Counting
            </button>
        </div>
    );
}

export default Child;