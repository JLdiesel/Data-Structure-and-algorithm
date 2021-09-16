const h = (tag, props, children) => {
    //返回一个vnode对象
    return {
        tag, props, children
    }
}
const mount = (vnode, container) => {
    //把整个元素绑定到vnode.el上

    const el = vnode.el = document.createElement(vnode.tag);
    //处理props  分属性名和事件监听
    if (vnode.props) {
        for (const key in vnode.props) {
            const value = vnode.props[key];
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), value);
            } else {
                el.setAttribute(key, value)
            }
        }
    }

    //处理子节点
    if (vnode.children) {
        if (typeof vnode.children === 'string') {
            el.innerHTML = vnode.children
        } else {
            vnode.children.forEach(child => {
                mount(child, el)
            });
        }
    }
    if (container) {
        container.appendChild(el)
    } else { return el }

}
const patch = (n1, n2) => {
    if (n1.tag !== n2.tag) {
        const parentNode = n1.el.parentElement;
        parentNode.removeChild(n1.el);
        mount(n2, parentNode)
        // parentNode.replaceChild(n2el, n1.el)
    } else {

        //更改el=同时更改了n1和n2的el
        const el = n2.el = n1.el
        //处理props
        const oldProps = n1.props || {};
        const newProps = n2.props || {};
        for (const key in newProps) {

            const oldVal = oldProps[key];
            const newVal = newProps[key];
            if (newVal !== oldVal) {
                if (key.startsWith('on')) {
                    el.addEventListener(key.slice(2).toLowerCase(), newVal);
                    el.removeEventListener(key.slice(2).toLowerCase(), oldVal)
                } else {
                    el.setAttribute(key, newVal)
                }
            }
        }
        for (const key in oldProps) {
            if (!(key in newProps)) {
                if (key.startsWith('on')) {
                    const oldVal = oldProps[key];
                    el.removeEventListener(key.slice(2).toLowerCase(), oldVal)
                } else {
                    el.removeAttribute(key)
                }
            }
        }
        //处理child
        const oldChild = n1.children || [];
        const newChild = n2.children || [];
        if (typeof newChild === 'string') {
            // if (typeof oldChild === 'string') {
            if (newChild !== oldChild) {
                el.innerHTML = newChild
            }
            // } else {
            //     el.innerHTML = newChild
            // }
        }
        //如果newChild是一个字符串
       else {
            //如果newChild是一个数组
            if (typeof oldChild === 'string') {
                el.innerHTML = '';
                newChild.forEach(vnode => {
                    mount(vnode, el)
                })

            } else {
                const commonLength = Math.min(oldChild.length, newChild.length)
                for (let i = 0; i < commonLength; i++) {
                    patch(oldChild[i], newChild[i])
                }
                if (newChild.length > oldChild.length) {
                    newChild.slice(oldChild.length).forEach(item => {
                        mount(item, el)
                    })
                } else {
                    oldChild.slice(newChild.length).forEach(item => {
                        el.removeChild(item.el)
                    })
                }
            }

        }



    }
}