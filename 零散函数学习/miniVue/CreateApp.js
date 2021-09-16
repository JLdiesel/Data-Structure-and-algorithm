function createApp(rootCompnent) {
    return {
        mount(selector) {
            const container = document.querySelector(selector)
            let isMounted = false
            let oldVnode = null
            watchEffect(() => {
                if (!isMounted) {
                    oldVnode = rootCompnent.render()
                    mount(oldVnode, container)
                    isMounted = true
                } else {
                    const newVNode = rootCompnent.render()
                    patch(oldVnode, newVNode)
                    oldVnode = newVNode
                }
            })
        }
    }
}