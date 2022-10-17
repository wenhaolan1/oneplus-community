import styled from 'styled-components'
import px2rem from '@/assets/pxTorem'

export const HeaderWrapper = styled.div`
    background-color: #e5001e;
    width: 100%;
    .header {
        display: flex;
        height: ${px2rem(49)};
        position: relative;
        width: ${px2rem(370)};
        line-height: ${px2rem(49)};
        padding: 0 ${px2rem(10)};
        .list {
            display: block;
            width: ${px2rem(44)};
            height: ${px2rem(44)};
            text-align: center;
            flex: 1;
            i {
                color: white;
            }
        }
        span{
            font-size: ${px2rem(16)};
            color: white;
            flex: 8;
        }
        .search {
            width: ${px2rem(36)};
            height: ${px2rem(49)};
            text-align: center;
            color: white;
            flex:1;
        }
    }    
`