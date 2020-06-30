import styled from 'styled-components';

export const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 258px;
  height: 227px;
  left: 31px;
  top: 80px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;

export const YearHeading = styled.h1`
  width: 235px;
  height: 23px;
  font-size: 18px;
  text-align: center;
  color: #7F7F7F;
  margin-bottom: 0;
`;

export const YearDesc = styled.p`
  width: 235px;
  height: 23px;
  font-size: 14px;
  text-align: center;
  color: #7F7F7F;
  margin-top: 0;
`;

export const YearInput = styled.select`
  width: 207px;
  height: 24px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
  margin-bottom: 15px;
`;