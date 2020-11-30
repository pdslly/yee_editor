export const DRAW_RECT_WIDTH = 375
export const DRAW_RECT_HEIGHT = 667

export const MODE_EDIT = 'edit'
export const MODE_VIEW = 'view'

export const IS_PROD = process.env.NODE_ENV === 'production'

export const LOCAL_STORAGE_KEY = 'yee-metadata'
export const DEF_METADATA = {
    bgm: null,
    script: null,
    pages: [{
        name: '未命名页面',
        eIndex: 0,
        style: {backgroundColor: '', backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center center',  backgroundRepeat: 'no-repeat'}, 
        elements: []
    }]
}