import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PrefData,
  PrefPopulationData,
  ReturnPopulationData
} from '../../types';
import Graph from '../organisms/Graph';
import CheckBoxList from '../organisms/CheckBoxList';
import styled from 'styled-components';

const Page: React.FC = () => {
  const [prefData, setPrefData] = useState<PrefData[]>([]);
  const [prefPopulationData, setPrefPopulationData] = useState<
    PrefPopulationData[]
  >([]);

  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': process.env.VITE_API_URL }
      })
      .then((res) => {
        setPrefData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClick = async (
    prefName: string,
    prefCode: number,
    checked: boolean
  ) => {
    if (checked) {
      try {
        const res = await axios.get<ReturnPopulationData>(
          'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=' +
            prefCode,
          {
            headers: { 'X-API-KEY': process.env.VITE_API_URL }
          }
        );
        const prefPopulation = res.data;

        setPrefPopulationData([
          ...prefPopulationData,
          {
            type: 'line',
            data: prefPopulation.result.data[0].data.map((item) => item.value),
            name: prefName
          }
        ]);
      } catch (err) {
        console.log(err);
      }
    } else {
      const deletePrefPopulation = prefPopulationData.filter((item) => {
        return item.name !== prefName;
      });
      setPrefPopulationData(deletePrefPopulation);
    }
  };
  return (
    <>
      <div>
        <Styledh2>都道府県</Styledh2>
        {prefData && (
          <CheckBoxList prefData={prefData} onChange={handleClick} />
        )}
        <Styledh2>人口推移グラフ</Styledh2>
        <Graph data={prefPopulationData} />
      </div>
    </>
  );
};

const Styledh2 = styled.h2`
  font-size: 20px;
  padding: 0.5rem 2rem;
  border-left: 4px solid #000;
  margin-left: 10pt;
  color: tomato;
`;

export default Page;
