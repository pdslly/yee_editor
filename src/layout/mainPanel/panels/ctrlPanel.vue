<template>
    <div class="panel" data-move="true" :data-uid="this._uid" :style="{top: `${posX}px`, left: `${posY}px`}">
        <div class="el-icon-more"></div>
        <div class="button icon icon-undo" @click="setHistoryIndexMinus" :class="{enable: historyIndex > 0}" title="上一步"></div>
        <div class="button icon icon-redo" @click="setHistoryIndexPlus" title="下一步" :class="{enable: histories.length > historyIndex + 1}"></div>
        <div class="button icon icon-level-up" @click="levelUpHandle" :class="{enable: curEle && curEle.styleObj.zIndex < 999}" title="向上一级"></div>
        <div class="button icon icon-level-down" @click="levelDownHandle" :class="{enable: curEle && curEle.styleObj.zIndex > 0}" title="向下一级"></div>
        <!-- <div class="button icon icon-view enable" @click="preview" title="预览"></div> -->
        <div class="button icon icon-save enable" @click="saveDialogVisible = true" title="保存"></div>
        <el-dialog width="40%" title="确认保存" :visible.sync="saveDialogVisible">
            <el-form ref="form" :model="saveForm" :rules="rules" label-width="80px">
                <el-form-item prop="title" label="项目名称">
                    <el-input v-model="saveForm.title" placeholder="请输入项目名称"></el-input>
                </el-form-item>
                <el-form-item prop="author" label="作者姓名">
                    <el-input v-model="saveForm.author" maxlength="20" placeholder="请输入您的姓名"></el-input>
                </el-form-item>
                <el-row type="flex" justify="center">
                    <el-button type="primary" @click="save">保存</el-button>
                    <el-button type="info" @click="saveDialogVisible = false">取消</el-button>
                </el-row>
            </el-form>
        </el-dialog>
        <el-dialog width="30%" title="预览地址" :visible.sync="showPreviewVisiable">
            <el-row type="flex" justify="center">
                <canvas ref="qrcode" class="preview-qrcode"></canvas>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
import QRCode from 'qrcode'
import {mapGetters, mapMutations} from 'vuex'
import {LOCAL_STORAGE_KEY} from '@/utils/constant'

export default {
    name: 'ctrl-panel',
    data() {
        this.rules = {
            title: [
                {
                    required: true,
                    message: "请输入项目名称",
                    trigger: "blur"
                }
            ],
            author: [
                {
                    required: true,
                    message: "请输入您的姓名",
                    trigger: "blur"
                }
            ]
        }
        return {
            posX: 40,
            posY: 40,
            showPreviewVisiable: false,
            saveDialogVisible: false,
            saveForm: {
                title: '',
                author: '',
                content: ''
            }
        }
    },
    created() {
        this.setVms(this)
    },
    computed: {
        ...mapGetters({
            curEle: 'getElement',
            historyIndex: 'getCurHistoryIndex',
            histories: 'getHistories',
            metadata: 'getMetaData'
        })
    },
    methods: {
        ...mapMutations(['setVms', 'setHistoryIndexPlus', 'setHistoryIndexMinus']),
        setPosition(posX, posY) {
            Object.assign(this, {posX, posY})
        },
        levelUpHandle() {
            this.curEle.styleObj.zIndex ++
        },
        levelDownHandle() {
            this.curEle.styleObj.zIndex --
        },
        preview() {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.metadata))
            window.open('/preview')
        },
        genQrcode(url) {
            console.log(url)
            this.showPreviewVisiable = true
            setTimeout(() => {
                QRCode.toCanvas(this.$refs.qrcode, url, error => {
                    if (error) console.log(error)
                })
            })
        },
        save() {
            this.$refs["form"].validate(valid => {
                if (valid) {
                    this.saveForm.content = JSON.stringify(this.metadata)
                    this.axios.post('/yee-save', this.saveForm).then(
                        (hash) => {
                            this.saveDialogVisible = false         
                            setTimeout(() => this.genQrcode(`${window.location.origin}${hash}`), 100)
                        },
                        ({ msg }) => {
                            this.$message.error(msg)
                        }
                    );
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    position: absolute;
    z-index: 9999;
    padding-bottom: 1.6rem;
    width: 2.2rem;
    background: $csecondary;
    border-radius: 1.6rem;
    cursor: move;
    .el-icon-more {
        width: 100%;
        height: 1.6rem;
        line-height: 1.6rem;
        color: $cborder;
        text-align: center;
        pointer-events: none;
    }
    .button {
        text-align: center;
        font-size: 1.2rem;
        line-height: 2.2rem;
        cursor: not-allowed;
        color: $clightfont;
        border-top: 1px solid $cborder;
        pointer-events: none;
        &:last-child {
            border-bottom: 1px solid $cborder;
        }
        &.enable {
            pointer-events: unset;
            cursor: pointer;
            color: #FFF;
        }
    }
    .preview-qrcode {
        flex-shrink: 0;
        width: 20rem;
        height: 20rem;
    }
}
</style>