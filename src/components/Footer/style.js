import styled from "styled-components";
import px2rem from '@/assets/pxTorem'
import style from '@/assets/global-style'

export const FooterWrapper = styled.div`
display: block;
width: 100%;
height: ${px2rem(60)};
background: white;
position: fixed;
bottom: 0;
left: 0;
display: flex;
border-top: solid ${px2rem(3)} ${style["background-color"]};
a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0.35rem;
    color: #a18b8b;
    &.active {/* &表示上一层 */
        color:#f94d30;
    }
    i {
        font-size: 1rem;
        font-weight:bold;
        /* color: ; */
    }
    span {
        font-size: 0.7rem;
    }
}

`