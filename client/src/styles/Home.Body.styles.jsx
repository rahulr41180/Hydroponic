
import styled from "styled-components";

const Container = styled.div`
    /* border : 1px solid; */
    margin : 4.6vw 0 0 0;
    width: 97.88vw;
    padding: 1vw;
    .Heading {
        /* border : 1px solid; */
        margin: auto;
        width: fit-content;

        font-size: 2.5vw;
    }
    .line {
        width : 3%;
        height: .7vh;
        background-color: #a03e90;
        border-radius: .2vw;
    }
    .instruction {

        /* border : 1px solid; */
        width : 84%;
        margin : auto;
    }
    .content {
        /* border : 1px solid; */
        width: 52%;
        padding : 1vw;
        margin : 1vw auto auto auto;
        
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 1vw;
        .item__box {
            /* border : 1px solid; */
            img {
                /* border : 1px solid; */
                width: 99.99%;
                height: 32vh;
            }
            .title {
                /* border : 1px solid; */
                margin: .2vw auto auto auto;
                width : fit-content;
                font-size: 1.4vw;
            }

            .description {
                /* border : 1px solid; */
                margin: .2vw auto auto .2vw;
                width : fit-content;
                text-align: center;
                font-size: 1.2vw;
            }
        }
    }
`

export { Container };