//#region Imports

// Import react components
import React from 'react';
import Pagination from "react-js-pagination";

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import styled components
import { PagingElement} from "../../assets/StyledComponents/Paging";

//#endregion

/**
 * Paging function
 *  
 * This function renders a paging component to be used by most movie grids
 * 
 * @name Paging
 * @function
 * @param {Int16Array} maxPage The maximum number of possible pages that can be rendered
 * @param {Int16Array} page The current page to be rendered
 * @param {Dispatch} set_page The dispatch action to update the movie page to render
 * @returns {StyledComponent} A styled component which will render the paging functionality
 */
export default function Paging({maxPage, page, set_page}) {
  // Get the translation component to be used to switch between different languages
  const { t } = useTranslation("");

  return (
    <PagingElement>
      <Pagination
        hideDisabled
        prevPageText={t(`page:previous`)}
        nextPageText={t(`page:next`)}
        firstPageText={t(`page:first`)}
        lastPageText={t(`page:last`)}
        activePage={page}
        itemsCountPerPage={1}
        totalItemsCount={maxPage}
        onChange={event => set_page(event)}
      />
    </PagingElement>
  );
}