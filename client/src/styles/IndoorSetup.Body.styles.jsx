
import styled from "styled-components";

const Container = styled.div`
    /* border : 1px solid; */
    margin: .4vw auto auto auto;
    padding: .5vw;
    width: 97.6vw;
    .banner {
        /* border : 1px solid; */
        width: 100%;
        height: 65vh;

        border-radius: .4vw;
    }
    .instruction__1 {
        /* border : 1px solid; */
        width: 88%;
        margin: 2vw auto auto auto;
        .instruction__1__heading {
            /* border : 1px solid; */
            width: fit-content;

            margin: .2vw auto auto .2vw;
        }
        .instruction__1__p1, .instruction__1__p2, .instruction__1__p3, .instruction__1__p4, .instruction__1__p5 {
            /* border : 1px solid; */
            margin: 1vw auto auto .2vw;
            width: fit-content;

        }
    }

    .instruction__2 {
        /* border : 1px solid; */
        width: 88%;
        margin: 2vw auto auto auto;
        .instruction__2__heading {
            /* border : 1px solid; */
            margin: .2vw auto auto .2vw;
            width: fit-content;
        }

        .instruction__2__p1, .instruction__2__p2 {
            /* border : 1px solid; */
            margin: 1vw auto auto .2vw;
            width: fit-content;
        }
        .system__types {
            /* border : 1px solid; */
            width: 99.25%;
            margin : 1vw .2vw auto .2vw;

            display: flex;
            gap: .5vw;
            .types__1, .types__2, .types__3 {
                /* border : 1px solid; */
                width: 33.4%;
                padding: 1.2vw 2.1vw;
                font-size: 1.2vw;
                border: 0;
                color: white;

                cursor: pointer;
            }
        }
        .types__content {
            /* border : 1px solid; */
            width: 96.9%;
            margin : 1vw .2vw auto .2vw;
            padding: 4vw 1vw;
            .types__heading {

                /* border : 1px solid; */
                margin : .5vw .2vw auto .2vw;
                width: fit-content;
            }
            .types__p1 {
                /* border : 1px solid; */
                margin : .5vw .2vw auto .2vw;
                width: fit-content;
            }

            .types__image__point {
                /* border : 1px solid; */
                width: 99.29%;
                margin : 1vw .2vw auto .2vw;
                padding : 1vw 0;
                display: flex;
                gap: .5vw;
                .types__image {
                    /* border : 1px solid; */

                    width: 40%;
                    height: 50vh;
                }
                .types__point {
                    /* border : 1px solid; */
                    width: 57%;
                    padding: .4vw 1vw;
                    .points {
                        /* border : 1px solid; */

                        width: 92%;
                        margin : 1vw .2vw;
                        padding : .5vw 1.5vw;
                        display: grid;
                        grid-template-columns: repeat(2,1fr);
                        gap: .5vw;
                        li {
                            /* border : 1px solid; */
                        }
                    }
                }
            }
        }
    }
    .future__box {
        /* border : 1px solid; */
        margin : 2vw auto auto auto;
        width: 88%;
        .future__heading {

            /* border : 1px solid; */
            margin : .5vw .2vw auto .2vw;
            width: fit-content;
        }
        .future__card {
            border : 1px solid;
            width: 90%;
            padding : 1vw;
            margin : 1vw auto auto auto;

            display: flex;
            gap: .5vw;
            .card__1 {
                border : 1px solid;
                width: 32%;
                padding: .5vw;
                border-radius: .4vw;
                &:hover {
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    transition : 800ms;
                }
                .card__image {
                    border : 1px solid;
                    width: 40%;
                    height: 15vh;
                    /* text-align: center; */
                    margin: .2vw 7vw;
                    border-radius: .4vw;
                }
            }
        }
    }
`

export { Container };