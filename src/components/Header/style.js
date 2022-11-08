import styled from 'styled-components'
import px2rem from '@/assets/pxTorem'

export const HeaderWrapper = styled.div`
    height: ${px2rem(49)};
    .header {
        position: fixed;
        background-color: #e5001e;
        display: flex;
        height: ${px2rem(49)};
        width: 100%;
        line-height: ${px2rem(49)};
        padding: 0 ${px2rem(10)};
        .list {
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