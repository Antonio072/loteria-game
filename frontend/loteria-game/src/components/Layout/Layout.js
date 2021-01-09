import React from 'react';
import Aux from '../../hoc/Hoc';

const layout = ( props ) => (
    <Aux>
        <div>Play, Rules</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;