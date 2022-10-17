import styled from "styled-components";
import px2rem from "@/assets/global-style"

export const BannersWrapper = styled.div`
  height: ${px2rem(200.4)};
  .swiper {
  width: 100%;
  height: ${px2rem(200.4)};
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`