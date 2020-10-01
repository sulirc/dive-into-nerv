import { VirtualNode, VNodeType, Portal } from '../shared'

export default function createPortal (
  children: VirtualNode,
  container: Element
): Portal {
  return {
    type: container,
    vtype: VNodeType.Portal,
    children,
    dom: null
  }
}
