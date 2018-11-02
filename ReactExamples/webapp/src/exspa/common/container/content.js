import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'

import './content.less'
import index from '../pages/index'
import follow from '../pages/follow'
import Tools from '../pages/tools'
import Music from '../pages/music'
import Todo from '../pages/todo'
import Album from '../pages/album'
import Editor from '../pages/editor'
import TodoList from '../pages/todoList'
import Search from '../pages/search'
import Waterfall from '../pages/waterfall'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content" id="content">
        <Route path="/ex/index" component={index} />
        <Route path="/ex/follow" component={follow} />
        <Route path="/ex/tools" component={Tools} />
        <Route path="/ex/music" component={Music} />
        <Route path="/ex/todo" component={Todo} />
        <Route path="/ex/album" component={Album} />
        <Route path="/ex/editor" component={Editor} />
        <Route path="/ex/todoList" component={TodoList} />
        <Route path="/ex/searchEngine" component={Search} />
        <Route path="/ex/waterfall" component={Waterfall} />
      </Content>
    )
  }
}
