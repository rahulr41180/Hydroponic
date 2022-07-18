
import styled from "styled-components";

const Container = styled.div`
    /* border : 1px solid; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .7vw;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;

    justify-content: space-between;
    background-color: white;
    .left__box {
        /* border : 1px solid; */
        width: 32%;
        display: flex;
        /* justify-content: space-between; */
        gap: .6vw;
        .logo__link {

            /* border : 1px solid white; */
            width: 22%;
            display: flex;
            text-decoration: none;
            /* color: white; */
            img {
                /* border : 1px solid; */
                width: 100%;
                height: 6.8vh;
                border-radius: .4vw;
                cursor: pointer;
            }
        }
        .Infrastructure__box {
            /* border : 1px solid; */
            /* font-size: 1vw; */
            width: 24%;
            height: 7.1vh;
            &:hover .drop__down {
                
                /* opacity: 1; */
                display : block;
            }
            border-radius: .4vw;
            button {

                width: 99.9%;
                padding : .1vw;
                font-size: 1.1vw;
                height: 100%;
                background-color: white;

                outline : none;
                cursor: pointer;
                border: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 0 .2vw 0;
            }
            .drop__down {
                /* border : 1px solid; */
                height: fit-content;
                width: 20vw;
                /* opacity : 0; */

                display : none;
                padding : .5vw;
                flex-direction: column;
                gap: .4vw;

                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                border-radius: .2vw;
                background-color: white;
                .drop__down__content {
                    /* border : 1px solid; */
                    font-size: 1.2vw;
                    text-decoration: none;

                    display: flex;
                    gap: 1vw;
                    margin-bottom: .5vw;
                    border-radius: .2vw;
                    &:hover {
                        background-color: #bfbff0;
                    }
                }
            }
        }
        .Automatic__box {
            /* border : 1px solid; */
            width: 27%;
            height: 7.1vh;
            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: .4vw;
            .automatic__content {
                /* border : 1px solid; */
                font-size: 1.2vw;

                text-decoration: none;
                display: block;
                color: black;
                width: fit-content;
            }
        }
        .product__box {
            /* border : 1px solid; */
            width: 14%;
            height: 7.1vh;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: .4vw;

            .product__content {
                /* border : 1px solid; */
                font-size: 1.2vw;

                text-decoration: none;
                display: block;
                color: black;
                width: fit-content;
            }
        }
    }
    .right__box {

        /* border : 1px solid; */
        width: 15%;
    }
`

export { Container };