import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1cc5df75 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _61d02964 = () => interopDefault(import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */))
const _66252de8 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _ab61f4d6 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _b8aef1a4 = () => interopDefault(import('../pages/admin/article-edit.vue' /* webpackChunkName: "pages/admin/article-edit" */))
const _88b443ee = () => interopDefault(import('../pages/admin/article-manage.vue' /* webpackChunkName: "pages/admin/article-manage" */))
const _15f8f612 = () => interopDefault(import('../pages/admin/category-manage.vue' /* webpackChunkName: "pages/admin/category-manage" */))
const _b9321e00 = () => interopDefault(import('../pages/admin/comment-manage.vue' /* webpackChunkName: "pages/admin/comment-manage" */))
const _668d9fc4 = () => interopDefault(import('../pages/admin/guestbook-manage.vue' /* webpackChunkName: "pages/admin/guestbook-manage" */))
const _73d78e18 = () => interopDefault(import('../pages/admin/profile-settings.vue' /* webpackChunkName: "pages/admin/profile-settings" */))
const _1f79c764 = () => interopDefault(import('../pages/admin/system-settings.vue' /* webpackChunkName: "pages/admin/system-settings" */))
const _fe9ed744 = () => interopDefault(import('../pages/auth/change-password.vue' /* webpackChunkName: "pages/auth/change-password" */))
const _337c76a2 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _523433e0 = () => interopDefault(import('../pages/blog/_category/index.vue' /* webpackChunkName: "pages/blog/_category/index" */))
const _23c96599 = () => interopDefault(import('../pages/blog/_category/_article.vue' /* webpackChunkName: "pages/blog/_category/_article" */))
const _0017bb16 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _1cc5df75,
    name: "admin"
  }, {
    path: "/guestbook",
    component: _61d02964,
    name: "guestbook"
  }, {
    path: "/profile",
    component: _66252de8,
    name: "profile"
  }, {
    path: "/search",
    component: _ab61f4d6,
    name: "search"
  }, {
    path: "/admin/article-edit",
    component: _b8aef1a4,
    name: "admin-article-edit"
  }, {
    path: "/admin/article-manage",
    component: _88b443ee,
    name: "admin-article-manage"
  }, {
    path: "/admin/category-manage",
    component: _15f8f612,
    name: "admin-category-manage"
  }, {
    path: "/admin/comment-manage",
    component: _b9321e00,
    name: "admin-comment-manage"
  }, {
    path: "/admin/guestbook-manage",
    component: _668d9fc4,
    name: "admin-guestbook-manage"
  }, {
    path: "/admin/profile-settings",
    component: _73d78e18,
    name: "admin-profile-settings"
  }, {
    path: "/admin/system-settings",
    component: _1f79c764,
    name: "admin-system-settings"
  }, {
    path: "/auth/change-password",
    component: _fe9ed744,
    name: "auth-change-password"
  }, {
    path: "/auth/login",
    component: _337c76a2,
    name: "auth-login"
  }, {
    path: "/blog/:category?",
    component: _523433e0,
    name: "blog-category"
  }, {
    path: "/blog/:category?/:article",
    component: _23c96599,
    name: "blog-category-article"
  }, {
    path: "/",
    component: _0017bb16,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
