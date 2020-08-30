import Vue from 'vue'
import Vuex from 'vuex'
import Debug from '@/utils/debug'
import Clone from '@/utils/clone'

import {MODE_EDIT, DEF_METADATA} from '@/utils/constant'

Vue.use(Vuex)

let metadata = window.yee_metadata || DEF_METADATA

const Store = new Vuex.Store({
    state: {
        metadata,
        mode: MODE_EDIT,
        vms: {},
        histories: [],
        cacheCtrlData: null,
        currentElementUID: null,
        currentPageIndex: 0,
        currentHistoryIndex: -1,
    },
    getters: {
        getVm: ({vms}) => (uid) => {
            const vm = vms[uid]
            Debug.warn(!vm, `UID[${uid}]不存在`)
            return vm
        },
        getMetaData({metadata}) {
            return metadata
        },
        getCurPageIndex({currentPageIndex}) {
            return currentPageIndex
        },
        getCurPageData({metadata, currentPageIndex}) {
            const data = metadata[currentPageIndex]
            Debug.warn(!data, `PAGE[${currentPageIndex}]不存在`)
            return data || {}
        },
        getElement({metadata, currentPageIndex, currentElementUID}) {
            if (!currentElementUID) return null
            const pageData = metadata[currentPageIndex]
            return pageData.elements.find(({uid}) => currentElementUID === uid)
        },
        getCurHistoryIndex({currentHistoryIndex}) {
            return currentHistoryIndex
        },
        getHistories({histories}) {
            return histories
        },
        getMode({mode}) {
            return mode
        },
        getCacheCtrlData({cacheCtrlData}) {
            return cacheCtrlData
        }
    },
    mutations: {
        updateCacheCtrlData(state, {styleObj: {width, height, left, top, angel = 0}}) {
            state.cacheCtrlData = {width, height, left, top, angel}
        },
        setMetadata(state, metadata) {
            state.metadata = metadata
        },
        setMode(state, mode) {
            state.mode = mode
        },
        setVms({vms}, vm) {
            vms[vm._uid] = vm
        },
        setElementUID(state, uid) {
            state.currentElementUID = uid
        },
        setPageIndex(state, index) {
            state.currentElementUID = null
            state.currentPageIndex = index
        },
        setHistoryIndexPlus(state) {
            state.currentElementUID = null
            state.currentHistoryIndex++
            state.metadata = Clone(state.histories[state.currentHistoryIndex].data)
        },
        setHistoryIndexMinus(state) {
            state.currentElementUID = null
            state.currentHistoryIndex--
            state.metadata = Clone(state.histories[state.currentHistoryIndex].data)
        },
        pushHistory(state, desc) {
            const data = Clone(state.metadata)
            const ind = state.currentHistoryIndex + 1
            const size = state.histories.length - ind
            Debug.log(desc)
            state.histories.splice(ind, size, {desc, data})
            state.currentHistoryIndex = state.histories.length - 1
        },
        addPage(state, data) {
            state.currentElementUID = null
            state.currentPageIndex = state.metadata.push(Clone(data)) - 1
        },
        delPage(state, index) {
            state.currentElementUID = null
            state.metadata.splice(index, 1)
            state.currentPageIndex = Math.max(index - 1, 0)
        },
        delWidget(state, {uid}) {
            const {currentPageIndex, metadata} = state
            const elements = metadata[currentPageIndex].elements
            const ind = elements.findIndex(ele => ele.uid === uid)
            elements.splice(ind, 1)
        },
        addWidget(state, data) {
            const {currentPageIndex, metadata} = state
            const pageData = metadata[currentPageIndex]
            const elements = pageData.elements

            let eData = Clone(data)
            let ind = ++pageData.eIndex
            eData.styleObj.zIndex = ind
            state.currentElementUID = eData.uid = `${currentPageIndex}_${ind}`
            elements.push(eData)
        }
    }
})

export default Store