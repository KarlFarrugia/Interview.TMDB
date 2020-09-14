import styled from 'styled-components';

export const PagingElement = styled.div`    
    padding: 30px;

    ul {
        list-style: none;

        li { 
            width: 65px;
            display: inline-block;

            a {
                color: white;
            }
        }

        li.active {
            a {
                color: black;
            }
        }
    }
    `