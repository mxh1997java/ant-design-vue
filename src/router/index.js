import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Form from '@/components/Form'
import Transfer from '@/components/Transfer'

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
    }
  ]
})
