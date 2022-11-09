import styled from 'styled-components'
import {ButtonProps, ImageCardType} from "./types";

export const Container = styled.div`
  text-align: center;
  width: 1000px;
  margin: 0 auto
`
export const Spinner = styled.div`
  margin: 15% auto;
  width: 50px;
  height: 50px;
  border: 7px solid #f3f3f3; 
  border-top: 7px solid green; 
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const Circle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
`
export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover
`

export const ImageCard = styled.div<ImageCardType>`
  display: flex;
  flex-direction: column; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px ;
  width: 180px;
  height: 180px;
  margin-top: 30px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  transition: box-shadow .3s;
  &:hover {
    box-shadow: ${(p:ImageCardType) => p.avatar ? 'none' : '0 0 16px #21212133'};
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%
`
export const NoData = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-top: 30px;
  color: gray;
`
export const SearchContainer = styled.div`
  width: 800px;
  margin: 50px auto 20px;
  text-align: center
`
export const Input = styled.input`
  width: 400px;
  margin-right: 30px;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    box-shadow: 0 0 16px #21212133;
  }
`
export const Button = styled.button<ButtonProps>`
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  color: ${(p: ButtonProps) => p.transparent || p.outline ? 'green' : 'white'};
  border: ${(p: ButtonProps) => p.transparent ? 'none' : p.outline ? '1px solid green' : '1px solid #ccc'} ;
  outline: none;
  cursor: ${(p: ButtonProps) => p.disabled ? 'default' : 'pointer'};
  background: ${(p: ButtonProps) => p.transparent || p.outline ? 'transparent' : p.disabled ? '#ccc' : 'green'};
  margin: ${(p: ButtonProps) => p.transparent ? '30px auto' : '0 5px'};
  &:hover {
    box-shadow: 0 0 10px #ccc;
  }
`
export const Details = styled.div`
  margin-top: 40px;
  margin-left: 60px;
`
export const Card = styled.div`
  padding: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 700px;
  margin-bottom: 15px;
  text-align: left;
  h3 {
    margin: 0;
  }
`
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
export const H2 = styled.h2`
  cursor: pointer;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`
export const Divider = styled.div`
  margin: 10px auto;
  width: 100%;
  height: 0;
  border-top: 1px solid #ccc;
`
