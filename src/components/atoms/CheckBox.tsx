import React from 'react';
import styled from 'styled-components';
import { PrefData } from '../../types';

type Props = {
  prefData: PrefData;
  onChange: (prefName: string, prefCode: number, checked: boolean) => void;
};

const CheckBox: React.FC<Props> = ({ prefData, onChange }) => {
  return (
    <>
      <StyledCheckCard>
        <input
          type="checkbox"
          onChange={(e) =>
            onChange(prefData.prefName, prefData.prefCode, e.target.checked)
          }
        />
        <StyledText htmlFor={prefData.prefName}>{prefData.prefName}</StyledText>
      </StyledCheckCard>
    </>
  );
};

const StyledCheckCard = styled.div`
  border: none;
  text-align: center;
  padding: 4px;
  margin: 0.5rem;
`;

const StyledText = styled.label`
  display: contents;
  margin-left: 1em;
  cursor: pointer;
`;

export default CheckBox;
