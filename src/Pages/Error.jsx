import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ACTION_RESOLVE_ERROR } from '../Store/actions/Action'

function Error({resolve_error}) {

    useEffect(() => {
        resolve_error();
    },[]);

    return (
        <div>
            Woops Something went wrong
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    resolve_error: () => dispatch(ACTION_RESOLVE_ERROR()),
})

export default connect(null, mapDispatchToProps)(Error);
  