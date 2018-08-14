import {
  RECEIVE_BANNER,
  RECEIVE_HOMEDATA,
  RECEIVE_KNOWDATA,
  RECEIVE_CLASSIFYDATA
} from './mutation-types'


export default {
  [RECEIVE_BANNER](state, {bannerList}) {
    state.bannerList = bannerList
  },
  [RECEIVE_HOMEDATA](state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_KNOWDATA](state, {knowData}) {
    state.knowData = knowData
  },
  [RECEIVE_CLASSIFYDATA](state, {classifyData}) {
    state. classifyData = classifyData
  }
}
