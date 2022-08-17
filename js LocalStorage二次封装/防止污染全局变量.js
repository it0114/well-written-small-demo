// 防止全局变量污染
function ym_storage() {
    return {
        'NAME_SPACE': 'integrated_command',
        'getStorage':
            function __getStorage() {
                return JSON.parse(window.localStorage.getItem(this.NAME_SPACE) || '{}')
            },
        'setItem': function __setItem(key, val) {
            const storage = this.getStorage()
            storage[key] = val
            window.localStorage.setItem(this.NAME_SPACE, JSON.stringify(storage))
        },
        'getItem': function __getItem(key) {
            return this.getStorage()[key]
        },
        'clearItem': function __clearItem(key) {
            const storage = this.getStorage()
            delete storage[key]
            window.localStorage.setItem(this.NAME_SPACE, JSON.stringify(storage))
        },
        'clearAll': function __clearAll() {
            window.localStorage.removeItem(this.NAME_SPACE)
            // window.localStorage.clear()
        }
        ,
    }
}

window.$storage = ym_storage()
