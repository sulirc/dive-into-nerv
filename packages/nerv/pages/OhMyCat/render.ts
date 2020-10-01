import { isFunction } from './shared'

function render (vnode, container, cb) {
  const dom = mountVNode(vnode)

  mountElement(dom, container)
  isFunction(cb) && cb()
}

function mountVNode (vnode) {}
function mountElement (dom, container) {}

export default render
