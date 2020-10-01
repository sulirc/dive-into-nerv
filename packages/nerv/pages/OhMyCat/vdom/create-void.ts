import { VNodeType } from '../shared'

export default function createVoid () {
  return {
    dom: null,
    vtype: VNodeType.Void
  }
}
