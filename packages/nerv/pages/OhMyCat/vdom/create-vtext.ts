import { VNodeType, VText } from '../shared'

export default function createVText (text: string | number): VText {
  return {
    text,
    vtype: VNodeType.Text,
    dom: null
  }
}
