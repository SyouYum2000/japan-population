import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { PrefPopulationData } from '../../types';
import styled from 'styled-components';

type Props = {
  data: PrefPopulationData[];
};

const Graph: React.FC<Props> = ({ data }) => {
  const options: Highcharts.Options = {
    accessibility: {
      enabled: false
    },
    chart: {
      type: 'line'
    },
    title: {
      text: '都道府県の人口データ'
    },
    xAxis: {
      title: {
        text: '年度'
      },
      categories: [
        '1960年',
        '1965年',
        '1970年',
        '1975年',
        '1980年',
        '1985年',
        '1990年',
        '1995年',
        '2000年',
        '2005年',
        '2010年',
        '2015年',
        '2020年',
        '2025年',
        '2030年',
        '2035年',
        '2040年',
        '2045年'
      ]
    },
    yAxis: {
      title: {
        text: '総人口'
      }
    },
    series:
      data.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : data
  };
  return (
    <StyledGraph>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledGraph>
  );
};

const StyledGraph = styled.div`
  padding: 12px;
`;

export default Graph;
