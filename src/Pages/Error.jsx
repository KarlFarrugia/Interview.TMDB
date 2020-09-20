//#region Imports

// Import react components
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Import redux action
import { ACTION_RESOLVE_ERROR } from '../Store/actions/Action'

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import error image
import ErrorImage from '../assets/images/error.png'

// Import custom styled components
import { ErrorContainer, ErrorImg, ErrorText} from '../assets/StyledComponents/Error'

//#endregion

/**
 * Error function
 *  
 * This function renders a paging component to be used by most movie grids
 * 
 * @name Error
 * @function
 * @param {Dispatch} resolve_error The dispatch action to set the render state to true and resolve the error
 * @returns {StyledComponent} A styled component to render the error screen
 */
function Error({resolve_error}) {
    // Get the translation component to be used to switch between different languages
    const { t } = useTranslation("");

    // On loading the page remove the error state so the user can navigate away and continue browsing the site
    useEffect(() => {
        resolve_error();
    },[resolve_error]);

    return (
        <ErrorContainer>
            <ErrorText>{t("common:error")}<br/> <ErrorImg src={ErrorImage} width={500}/></ErrorText>
        </ErrorContainer>
    );
}

// actions to be retrieved from the reducers
const mapDispatchToProps = dispatch => ({
    resolve_error: () => dispatch(ACTION_RESOLVE_ERROR()),
})

export default connect(null, mapDispatchToProps)(Error);
  