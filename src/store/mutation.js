import {
  CHANGE_LEFTNAV_STATE,
  START_LOADING,
  FINISH_LOADING,
  FETCH_COMING_SOON_SUCCESS,
  FETCH_NOW_PLAYING_SUCCESS,
  FETCH_DETAIL_SUCCESS,
  FETCH_BANNER_SUCCESS
}from './mutation-types'

const mutations = {
  [CHANGE_LEFTNAV_STATE](state,isShow){
      state.leftNavState = isShow;
  },
  //进场动画开始
  [START_LOADING] (state) {
    state.loading = true;
    console.log(state.loading);
  },
  //进场动画结束
  [FINISH_LOADING] (state) {
    state.loading = false;
    console.log(state.loading);
  },
  // 获取即将上映电影列表
  [FETCH_COMING_SOON_SUCCESS] (state, data) {
    state.comingSoonFilms = data.films
  },
  // 获取正在上映电影列表
  [FETCH_NOW_PLAYING_SUCCESS] (state, data) {
    state.nowPlayingFilms = data.films
  },
  // 获取电影详情
  [FETCH_DETAIL_SUCCESS] (state, data) {
    state.detail = data.film
  },
  // 获取广告列表
  [FETCH_BANNER_SUCCESS] (state, data) {
    state.billboards = data.billboards
  }
};

export default mutations;
