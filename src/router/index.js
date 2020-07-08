import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Form from '@/components/Form'
import Transfer from '@/components/Transfer'
import Table from '@/components/Table'
import Drawer from '@/components/Drawer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/transfer',
      name: 'Transfer',
      component: Transfer
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/drawer',
      name: 'Drawer',
      component: Drawer
    },
  ]
})
