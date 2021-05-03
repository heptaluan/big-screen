import * as _ from 'lodash'

// 格式化数据
export const formatChartData = arr => {
  const unzipData = _.unzip(arr)
  return {
    cities: getTotal(arr, _.uniq(unzipData[1]), 1),
    ages: getTotal(arr, _.uniq(unzipData[2]), 2),
    types: getTotal(arr, _.uniq(unzipData[3]), 3),
    times: getTotal(arr, _.uniq(unzipData[4]), 4),
    distributors: getTotal(arr, _.uniq(unzipData[5]), 5),
  }
}

// 根据类型得到对应的总数
export const getTotal = (arr, list, index) => {
  let totalArr = []
  list.forEach(type => {
    totalArr.push(
      _.unzip(arr.filter(item => item[index] === type))[6].reduce(
        (prev, cur) => (prev += cur)
      )
    )
  })
  return {
    name: list,
    value: totalArr,
  }
}