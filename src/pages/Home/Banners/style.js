import styled from 'styled-components'  
import px2rem from '@/assets/pxTorem'
export const BannersWrapper = styled.div`
    height: ${px2rem(200.4)};
    /* margin-top:20px; */
    border: none;
.btn_banners{
    width:100%;
    height:50vw;
    background:#fff;
}     
.swiper-slide{
    display: flex;
    
}
.swiper-item{
    display:flex;
    width: 100%;
    height: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    
} 

.swiper-item p{
    height:${px2rem(200.4)};
    width:${px2rem(390)};
}

.swiper-item img{
    height:100%;
    width:100%;
    transform: translateX(${px2rem(7)});
}
.swiper-pagination{
    height: ${px2rem(20)};
    bottom: 0;
    
}
.swiper-pagination-bullet{
    width: ${px2rem(8)};
    border-radius: 50%;
    height: ${px2rem(8)};
    border: 1px solid #fff;
    background: transparent;
    background-color: #121111;
    &.swiper-pagination-bullet-active{
        background-color: white;
    }
}
`