import { buildCategories, buildLabels, buildSeries } from "../../components/funcs/graphBuilder";
import { PopulationData } from "../../components/StatisticsContainer";
import { describe, expect, it } from "vitest"

const mock: PopulationData = [
  {
    prefCode: 1,
    prefName: '北海道',
    data: [
      {
        label: '総人口',
        data: [
          {
            year: 1960,
            value: 5000000
          },
          {
            year: 1970,
            value: 6000000
          },
          {
            year: 1980,
            value: 7000000
          },
          {
            year: 1990,
            value: 8000000
          },
          {
            year: 2000,
            value: 9000000
          },
          {
            year: 2010,
            value: 10000000
          }
        ]
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1960,
            value: 5000000
          },
          {
            year: 1970,
            value: 6000000
          },
          {
            year: 1980,
            value: 7000000
          },
          {
            year: 1990,
            value: 8000000
          },
          {
            year: 2000,
            value: 9000000
          },
          {
            year: 2010,
            value: 10000000
          }
        ]
      }
    ]
  }
]

describe('buildLabels', () => {
  it('ラベルの一覧のリストが取得されること', () => {
    expect(buildLabels(mock)).toEqual(['総人口', '年少人口'])
  })
  it('データが空の場合は空のリストが取得されること', () => {
    expect(buildLabels([])).toEqual([])
  })
})

describe('buildCategories', () => {
  it('カテゴリの一覧のリストが取得されること', () => {
    expect(buildCategories(mock, '総人口')).toEqual([1960, 1970, 1980, 1990, 2000, 2010])
  })
  it('データが空の場合は空のリストが取得されること', () => {
    expect(buildCategories([], '総人口')).toEqual([])
  })
})

describe('buildSeries', () => {
  it('シリーズの一覧のリストが取得されること', () => {
    expect(buildSeries(mock, '総人口')).toEqual([
      {
        name: '北海道',
        data: [5000000, 6000000, 7000000, 8000000, 9000000, 10000000]
      }
    ])
  })
  it('データが空の場合は空のリストが取得されること', () => {
    expect(buildSeries([], '総人口')).toEqual([])
  })
})
