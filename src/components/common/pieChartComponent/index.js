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
          ]}
        />
        <Dataset
          transform={{
            type: 'filter',
            config: { dimension: 'Year', value: 2011 },
          }}
        />
        <Series
          type="pie"
          radius={50}
          center={['50%', '25%']}
          datasetIndex={1}
        />
      </Recharts>
    </div>
  )
}

export default PieChartComponent
