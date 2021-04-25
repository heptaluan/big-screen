import React from 'react'
import './index.scss'
import { Recharts, Components } from 'react-component-echarts'

const { Dataset, Series } = Components

const PieChartComponent = () => {
  return (
    <div className="pie-chart-box">
      <Recharts
        media={[
          {
            query: { minAspectRatio: 1 },
            option: {
              series: [
                { center: ['25%', '50%'] },
                { center: ['50%', '50%'] },
                { center: ['75%', '50%'] },
              ],
            },
          },
          {
            option: {
              series: [
                { center: ['50%', '25%'] },
                { center: ['50%', '50%'] },
                { center: ['50%', '75%'] },
              ],
            },
          },
        ]}
      >
        <Dataset
          source={[
            ['Product', 'Sales', 'Price', 'Year'],
            ['Cake', 123, 32, 2011],
            ['Cereal', 231, 14, 2011],
            ['Tofu', 235, 5, 2011],
            ['Dumpling', 341, 25, 2011],
            ['Biscuit', 122, 29, 2011],
            ['Cake', 143, 30, 2012],
            ['Cereal', 201, 19, 2012],
            ['Tofu', 255, 7, 2012],
            ['Dumpling', 241, 27, 2012],
            ['Biscuit', 102, 34, 2012],
            ['Cake', 153, 28, 2013],
            ['Cereal', 181, 21, 2013],
            ['Tofu', 395, 4, 2013],
            ['Dumpling', 281, 31, 2013],
            ['Biscuit', 92, 39, 2013],
            ['Cake', 223, 29, 2014],
            ['Cereal', 211, 17, 2014],
            ['Tofu', 345, 3, 2014],
            ['Dumpling', 211, 35, 2014],
            ['Biscuit', 72, 24, 2014],
          ]}
        />
        <Dataset
          transform={{
            type: 'filter',
            config: { dimension: 'Year', value: 2011 },
          }}
        />
        <Dataset
          transform={{
            type: 'filter',
            config: { dimension: 'Year', value: 2012 },
          }}
        />
        <Dataset
          transform={{
            type: 'filter',
            config: { dimension: 'Year', value: 2013 },
          }}
        />
        <Series
          type="pie"
          radius={50}
          center={['50%', '25%']}
          datasetIndex={1}
        />
        <Series
          type="pie"
          radius={50}
          center={['50%', '50%']}
          datasetIndex={2}
        />
        <Series
          type="pie"
          radius={50}
          center={['50%', '75%']}
          datasetIndex={3}
        />
      </Recharts>
    </div>
  )
}

export default PieChartComponent
