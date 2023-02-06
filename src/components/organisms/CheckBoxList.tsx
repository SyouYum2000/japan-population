import React from 'react';
import styled from 'styled-components';
import { PrefData } from '../../types';
import CheckBox from '../atoms/CheckBox';

type Props = {
  prefData: PrefData[];
  onChange: (prefName: string, prefCode: number, checked: boolean) => void;
};

const CheckBoxList: React.FC<Props> = ({ prefData, onChange }) => {
  return (
    <>
      <StyledCardList>
        {prefData?.map((prefData) => {
          return (
            <CheckBox
              prefData={prefData}
              key={prefData.prefCode}
              onChange={onChange}
            />
          );
        })}
      </StyledCardList>
    </>
  );
};

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: flex-start;
  justify-self: auto;
`;

export default CheckBoxList;
