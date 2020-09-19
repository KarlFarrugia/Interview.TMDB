import React from 'react';
import { PagingElement} from "../../assets/StyledComponents/Paging";
import Pagination from "react-js-pagination";

// multilanguage component
import { useTranslation } from "react-i18next";

function Paging({maxPage, page, set_page}) {
  const { t } = useTranslation("");

  function handlePageChange(event){
    set_page(event);
  }

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
          onChange={event => handlePageChange(event)}
        />
      </PagingElement>
  );
}

export default Paging;