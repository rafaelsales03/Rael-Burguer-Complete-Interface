import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #026401;
    color: #efefef;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid#026401;
    background-color: #efefef;
    color: #026401;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    color: #424242;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  margin-top: 16px;
  background: #026401;
  border-radius: 8px;

  height: 50px;
  border: none;

  color: #ffffff;
  text-align: center;
  line-height: 100%;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
