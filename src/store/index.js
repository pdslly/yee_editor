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
        currentElement: null,
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
        getPageData({metadata}) {
            return metadata.pages
        },
        getCurPageIndex({currentPageIndex}) {
            return currentPageIndex
        },
        getCurPageData({metadata, currentPageIndex}) {
            const data = metadata.pages[currentPageIndex]
            Debug.warn(!data, `PAGE[${currentPageIndex}]不存在`)
            return data || {}
        },
        getElement({currentElement}) {
            return currentElement
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
        updateCacheCtrlData(state, {styleObj}) {
            if (!styleObj) {
                state.cacheCtrlData = null
            } else {
                const {width, height, left, top, angel = 0} = styleObj
                state.cacheCtrlData = {width, height, left, top, angel}
            }
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
        setElement(state, widget) {
            state.currentElement = widget
        },
        setPageIndex(state, index) {
            state.currentElement = null
            state.currentPageIndex = index
        },
        setHistoryIndexPlus(state) {
            state.currentElement = null
            state.currentHistoryIndex++
            state.metadata = Clone(state.histories[state.currentHistoryIndex].data)
        },
        setHistoryIndexMinus(state) {
            state.currentElement = null
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
            state.currentElement = null
            state.currentPageIndex = state.metadata.pages.push(Clone(data)) - 1
        },
        delPage(state, index) {
            state.currentElement = null
            state.metadata.pages.splice(index, 1)
            state.currentPageIndex = Math.max(index - 1, 0)
        },
        delWidget(state, data) {
            const {isConfig, configName} = data
            if (isConfig) {
                state.metadata[configName] = null
            } else {
                const {currentPageIndex, metadata} = state
                const elements = metadata.pages[currentPageIndex].elements
                const ind = elements.findIndex(ele => ele === data)
                elements.splice(ind, 1)
            }
            state.currentElement = null
        },
        addWidget(state, data) {
            const {currentPageIndex, metadata} = state
            const {isConfig, configName} = data
            if (isConfig) {
                metadata[configName] = state.currentElement = data
            } else {
                const pageData = metadata.pages[currentPageIndex]
                const elements = pageData.elements

                let eData = Clone(data)
                let ind = ++pageData.eIndex
                eData.styleObj.zIndex = ind
                eData.uid = `${currentPageIndex}_${ind}`
                state.currentElement = eData
                elements.push(eData)
            }
        }
    }
})

export default Store