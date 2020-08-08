import {createGlobalStyle} from 'styled-components'



const Global = createGlobalStyle`

        :root {
            margin : 0 ;
            padding: 0;

            --main-bg-color: #fcfafd;
            --color-primray : rgb(30, 30, 30);
            --color-secondary : #f24c58;
            --color-white : #fff;

        }
        html, body {
            margin : 0;
            padding : 0;
        }

        * {
            font-family: 'Comfortaa', cursive;
            font-size : 60%;
            box-sizing: border-box;
        }


`
export default Global;