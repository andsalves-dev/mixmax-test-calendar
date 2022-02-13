import styled from 'styled-components';
import { Flex } from 'components/Flex/Flex.styles';

export const StyledTimeslot = styled.div`
  background: #3482d0;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  margin-bottom: 8px;
  text-align: center;
  transition: all 150ms ease-in-out;
  white-space: nowrap;
  width: 100%;
  
  &:hover {
    background: #1e4f80;
  }
`;

export const StyledTransitionList =  styled.div`
  transition: height 2s linear;
`

export const StyledNoSlots = styled(Flex)`
  background: #F5F5F5;
  border-radius: 4px;
  flex: 1;
`;
