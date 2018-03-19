import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import game from '@/components/game'
import Recharge from '@/components/Recharge'
import recharge1 from '@/components/recharge/index'
import pay from '@/components/recharge/pay'
import news from '@/components/news'
import detail from '@/components/news/detail'
import newsList from '@/components/news/list'
import allNews from '@/components/news/list/allNews'
import afficheNews from '@/components/news/list/afficheNews'
import activityNews from '@/components/news/list/activityNews'
import gameNews from '@/components/news/list/gameNews'
import strategy from '@/components/news/list/strategy'
import personage from '@/components/personage'
import retrievePassword from '@/components/retrievePassword'
import retrievePasswordMessage from '@/components/retrievePassword/retrievePasswordMessage'
import changePassword from '@/components/retrievePassword/retrievePasswordMessage/changePassword'
import retrievePasswordMpho from '@/components/retrievePassword/retrievePasswordMessage/retrievePasswordMpho'
import retrievePasswordMemail from '@/components/retrievePassword/retrievePasswordMessage/retrievePasswordMemail'
import retrievePasswordSucce from '@/components/retrievePassword/retrievePasswordSucce'
import retrievePasswordPSucce from '@/components/retrievePassword/retrievePasswordSucce/retrievePasswordPSucce'
import retrievePasswordESucce from '@/components/retrievePassword/retrievePasswordSucce/retrievePasswordESucce'
import retrievePasswordEmSucce from '@/components/retrievePassword/retrievePasswordSucce/retrievePasswordEmSucce'
import choose from '@/components/retrievePassword/choose'
import modified from '@/components/personage/modified'
import person from '@/components/personage/person'
import mystery from '@/components/personage/mystery'
import mystery2 from '@/components/personage/mystery2'
import mystery3 from '@/components/personage/mystery3'
import mysterySucce from '@/components/personage/mysterySucce'
import record from '@/components/personage/record'
import email from '@/components/personage/email'
import email2 from '@/components/personage/email2'
import bindMail from '@/components/personage/email3'
import changemail from '@/components/personage/changemail'
import newemail from '@/components/personage/newemail'
import pho from '@/components/personage/pho'
import phosucce from '@/components/personage/phosucce'
import changepho from '@/components/personage/changepho'
import changephoSucce from '@/components/personage/changephoSucce'
import relievepho from '@/components/personage/relievepho'
import relievephoSucce from '@/components/personage/relievephoSucce'
import password from '@/components/personage/password'
import custody from '@/components/custody'

//落地页
import cwby from '@/components/squeezepage/cwby'
import ztsg from '@/components/squeezepage/ztsg'
import kingofrebirth from '@/components/squeezepage/kingofrebirth'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: home
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/recharge',
      component: Recharge,
      children:[
        {path: '',component: recharge1},
        {path: 'pay',component: pay}
      ]
    },

    {
      path:'/news',
      component: news,
      children:[
        {path:'detail',component:detail},
        {
          path:'newsList',
          component:newsList,
          children:[
            {path:'allNews',component:allNews},
            {path:'afficheNews',component:afficheNews},
            {path:'activityNews',component:activityNews},
            {path:'gameNews',component:gameNews},
            {path:'strategy',component:strategy},
          ]
        }
      ]
    },
    {
      path: '/retrievePassword',
      component: retrievePassword,
      children:[
        {path:'',component:choose},
        {
          path:'retrievePasswordMessage',
          component:retrievePasswordMessage,
          children:[
            {path:'retrievePasswordMemail',component:retrievePasswordMemail},
            {path:'retrievePasswordMpho',component:retrievePasswordMpho},
            {path:'changePassword',component:changePassword}
          ]
        },
        {
          path:'retrievePasswordSucce',
          component:retrievePasswordSucce,
          children:[
            {path:'retrievePasswordPSucce',component:retrievePasswordPSucce},
            {path:'retrievePasswordESucce',component:retrievePasswordESucce},
            {path:'retrievePasswordEmSucce',component:retrievePasswordEmSucce},
          ]
        }
      ]
    },
    {
      path: '/personage',
      component: personage,
      children:[
        {path:'',component:person},
        {path:'modified',component:modified},
        {path:'record',component:record},
        {path:'mystery',component:mystery},
        {path:'mystery2',component:mystery2},
        {path:'mystery3',component:mystery3},
        {path:'mysterySucce',component:mysterySucce},
        {path:'email',component:email},
        {path:'email2',component:email2},
        {path:'bindMail',component:bindMail},
        {path:'changemail',component:changemail},
        {path:'newemail',component:newemail},
        {path:'pho',component:pho},
        {path:'phosucce',component:phosucce},
        {path:'changepho',component:changepho},
        {path:'changephoSucce',component:changephoSucce},
        {path:'relievepho',component:relievepho},
        {path:'relievephoSucce',component:relievephoSucce},
        {path:'password',component:password}
      ]
    },
    {
      path: '/custody',
      name: 'custody',
      component: custody
    },
    {
      path: '/cwby',
      name: 'cwby',
      component: cwby
    },
    {
      path: '/ztsg',
      name: 'ztsg',
      component: ztsg
    },
    {
      path: '/kingofrebirth',
      name: 'kingofrebirth',
      component: kingofrebirth
    }
  ]
})
