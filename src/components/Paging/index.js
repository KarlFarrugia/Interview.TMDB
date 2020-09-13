import React, { useState } from 'react';
import { PagingElement} from "../../assets/StyledComponents/Paging";
import Pagination from "react-js-pagination";
import {useSelector, useDispatch} from 'react-redux';
import { ACTION_SET_PAGE, ACTION_REPLACE_MOVIES } from '../../Store/actions/Action';
import {Api_NowPlaying} from '../../api';

// multilanguage component
import { useTranslation } from "react-i18next";

function Paging({...props}) {
    const max_page = props.max_page;
    const dispatch = useDispatch();
    const { t } = useTranslation("");

    function handlePageChange(event){
        dispatch(ACTION_SET_PAGE(event));
        Api_NowPlaying(dispatch,ACTION_REPLACE_MOVIES,event,t("common:locale"));
    }

    return (
        <PagingElement>
          <Pagination
            hideDisabled
            prevPageText='prev'
            nextPageText='next'
            firstPageText='first'
            lastPageText='last'
            activePage={useSelector(state => state.page)}
            itemsCountPerPage={1}
            totalItemsCount={max_page}
            onChange={event => handlePageChange(event)}
          />
        </PagingElement>
    );
}

export default Paging;