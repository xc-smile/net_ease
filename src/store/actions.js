import {
  reqBanner,
  reqHomeData,
  reqKnowData,
  reqClassifyData
} from "../api";
import {
  RECEIVE_BANNER,
  RECEIVE_HOMEDATA,
  RECEIVE_KNOWDATA,
  RECEIVE_CLASSIFYDATA
} from "./mutation-types";


export default {
  async getBanner ({commit}) {
    const result = await reqBanner()
    if(result.code === 0) {
      const bannerList = result.focusList
      commit(RECEIVE_BANNER, {bannerList})
    }
  },
  async getHomeData ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.home
      commit(RECEIVE_HOMEDATA, {homeData})
    }
  },
  async getKnowData ({commit}) {
    const result = await reqKnowData()
    if(result.code === 0) {
      const knowData = result.detail
      commit(RECEIVE_KNOWDATA, {knowData})
    }
  },
  async getClassifyData ({commit}) {
    const result = await reqClassifyData()
    if(result.code === 0){
      const classifyData = result.nav
      commit(RECEIVE_CLASSIFYDATA, {classifyData})
    }
  }
}
