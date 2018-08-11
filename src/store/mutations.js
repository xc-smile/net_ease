import {RECEIVE_BANNER} from './mutation-types'


export default {
  [RECEIVE_BANNER](state, {bannerList}) {
    state.bannerList = bannerList
  }
}
