import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All 显示全部
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active 显示活跃
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed 显示完成
    </FilterLink>
    <FilterLink filter={VisibilityFilters.HIDE_ALL}>
      Hide 隐藏全部
    </FilterLink>
  </div>
)

export default Footer
