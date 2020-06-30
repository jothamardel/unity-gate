import styled from 'styled-components';

export const HomePage = styled.div`

`; 

export const HomePageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 261px;
  left: 32px;
  top: 90px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(127, 127, 127, 0.5);
  border-radius: 21px;
`;

export const HomePageImageContainer = styled.div`
  padding-top: 20px;
`;

export const HomePageImage = styled.img`
  width: 50px;
  height: 55px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HomePageDesc = styled.div`
  text-align: center;
  padding: 0;
  color: #7F7F7F
`;

export const HomePageDescHeading = styled.div`
  margin: 0;
  line-height: 29px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CustomLink = styled.p`
    color: #7F7F7F;
    font-size: 12px;
    margin-top: 5px;
    &:hover {
      background-color: #7F7F7F;
      color: white;
      cursor: pointer;
    }
`;

export const I = styled.i`
  margin-right: 10px;
  color: #3b5998;
`;