import {reqBanner} from "../api";
import {RECEIVE_BANNER} from "./mutation-types";

export {
  RECEIVE_BANNER
} from './mutation-types'
export {
  reqBanner
} from '../api/index'

export default {
  async getBanner ({commit}) {
    const result = await reqBanner()
    if(result.code === 0) {
      const bannerList = result.focusList
      commit(RECEIVE_BANNER, {bannerList})
    }
  }
}
