import styled from 'styled-components'  
import px2rem from '@/assets/pxTorem'
import style from '@/assets/global-style'

export const ShowWrapper = styled.div`
/* height: ${px2rem(4463)}; */
    .show {
        ul {
            padding: 0 ${px2rem(7)};
            width: 100%;
            height: auto;
            border-bottom: solid ${px2rem(3)} ${style["background-color"]};
            li {
                .show-subject {
                    margin: ${px2rem(15)};
                    span {
                        width: 100%;
                        height: ${px2rem(40)};
                        text-align: center;
                        font-size: ${px2rem(17)};
                        color: black;
                    };
                }
                .show-image {
                    img {
                        width: 100%;
                        height: ${px2rem(175)};
                        border-radius: ${px2rem(7)};
                    }
                }
                .logo-box {
                    display: flex;                    
                    height: ${px2rem(45)};
                    align-items: center;
                    .logo-item{
                        flex: 3;
                        img{
                        vertical-align: middle;
                        width: ${px2rem(22)};
                        height: ${px2rem(22)};
                        border-radius: 50%;
                        }
                    span {
                        vertical-align: middle;
                        color: ${style["font-color"]};
                        }
                    }
                    .see-item {
                        display: flex;
                        flex: 1;
                        float: right;
                        color: ${style["font-color"]};
                        i {
                            font-size: ${px2rem(15)};
                        }
                        .see {
                            flex: 1;
                        }
                        .message {
                            flex: 1;
                        }
                    }
                }
                
            }
        }
    }
`