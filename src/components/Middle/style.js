import styled from "styled-components";
import px2rem from '@/assets/pxTorem'
import style from '@/assets/global-style'

export const MiddleWrapper = styled.div`
    width: 100%;
    height: ${px2rem(120)};
    border-bottom: solid ${px2rem(10)} ${style["background-color"]};
    border-top: solid ${px2rem(10)} ${style["background-color"]};
    .icon-box{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .jrqd {
            /* display: flex; */
            flex: 1;   
        }
        .sqrw {
            flex: 1;
        }
        .xucj {
            flex: 1;
            .background {
                background-color: #7c996e;
            }
        }
        .background {
            display: flex;
            width: ${px2rem(55)};
            height: ${px2rem(55)};
            background-color: #457ab3;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            transform: translate(${px2rem(35)});
            i {
                width: ${px2rem(30)};
                height: ${px2rem(30)};
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                }
            } 
        p {
            text-align: center;
            color: #757070;
        }
    }
`