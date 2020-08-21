import Vue from 'vue'
import Vuex from 'vuex'
import Debug from '@/utils/debug'
import Clone from '@/utils/clone'

import {MODE_EDIT} from '@/utils/constant'

Vue.use(Vuex)

const Store = new Vuex.Store({
    state: {
        mode: MODE_EDIT,
        vms: {},
        histories: [],
        metadata: [{
            name: '',
            data: {backgroundColor: null, backgroundImage: null}, 
            elements: []
        }],
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
        getCurPageData({metadata, currentPageIndex}) {
            const data = metadata[currentPageIndex]
            Debug.warn(!data, `PAGE[${currentPageIndex}]不存在`)
            return data || {}
        },
        getElement({metadata, currentElementUID}) {
            if (!currentElementUID) return null
            const [pageInd, eleInd] = currentElementUID.split('_')
            return metadata[pageInd].elements[eleInd]
        },
        getCurHistoryIndex({currentHistoryIndex}) {
            return currentHistoryIndex
        },
        getHistories({histories}) {
            return histories
        },
        getMode({mode}) {
            return mode
        }
    },
    mutations: {
        setMode(state, mode) {
            state.mode = mode
        },
        setVms({vms}, vm) {
            vms[vm._uid] = vm
        },
        setElementUID(state, uid) {
            state.currentElementUID = uid
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
        delWidget(state, uid) {
            const {currentPageIndex, metadata} = state
            const elements = metadata[currentPageIndex].elements
            const ind = elements.findIndex(ele => ele.uid === uid)
            elements.splice(ind, 1)
        },
        addWidget(state, data) {
            const {currentPageIndex, metadata} = state
            const elements = metadata[currentPageIndex].elements

            let eData = Clone(data)
            eData.styleObj.zIndex = elements.length
            state.currentElementUID = eData.uid = `${currentPageIndex}_${elements.length}`
            elements.push(eData)
        }
    }
})

export default Store