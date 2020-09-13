import styled from 'styled-components';

export const PagingElement = styled.div`    
    background-color: #3e434a;
    padding: 30px;

    ul {
        list-style: none;

        li { 
            width: 45px;
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