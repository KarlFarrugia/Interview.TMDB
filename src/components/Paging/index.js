import React, { useState, useEffect } from 'react';
import { PagingElement} from "../../assets/StyledComponents/Paging";
import Pagination from "react-js-pagination";
import {Api_NowPlaying} from '../../api';

// multilanguage component
import { useTranslation } from "react-i18next";

function Paging({page, append_movies, set_page, clear_movies}) {
  const [maxPage, SetMaxPage] = useState(1);
  const { t } = useTranslation("");

  async function GetMovies(){
    SetMaxPage(await Api_NowPlaying(append_movies,1,t("common:locale")));
  }

  //On component load get movies
  useEffect(() => {
      GetMovies();
  },[])

  function handlePageChange(event){
    clear_movies();
    set_page(event);
    Api_NowPlaying(append_movies,event,t("common:locale"));
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