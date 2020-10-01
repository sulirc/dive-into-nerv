export const enum VNodeType {
  Text = 1,
  Node = 2,
  Composite = 4,
  Void = 16,
  Portal = 32
}

export type Ref = (node?: Element | null) => void | null | string

export interface Refs {
  [k: string]: any
}

export type VirtualChildren =
  | Array<string | number | VirtualNode>
  | VirtualNode

export interface ComponentLifecycle<P, S> {
  componentWillMount? (): void
  componentDidMount? (): void
  componentWillReceiveProps? (nextProps: Readonly<P>, nextContext: any): void
  shouldComponentUpdate? (
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any
  ): boolean
  componentWillUpdate? (
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any
  ): void
  componentDidUpdate? (
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    prevContext: any
  ): void
  componentWillUnmount? (): void
  componentDidCatch? (error?: any): void
  getDerivedStateFromProps? (
    nextProps: Readonly<P>,
    prevState: Readonly<S>
  ): object | null
  getDerivedStateFromError? (error?: any): object | null
  getSnapshotBeforeUpdate? (
    prevProps: Readonly<P>,
    prevState: Readonly<S>
  ): object | null
}

export interface Widget {
  vtype: VNodeType
  name: string
  props: any
  context: any

  _rendered: any
  _owner: any

  init (parentContext: any, parentComponent: any): Element | null
  update (
    previous: ComponentInstance,
    current: ComponentInstance,
    context: any,
    dom?: Element
  ): Element | null
  destroy (dom?: Element): any
}

export type ComponentInstance = CompositeComponent | StatelessComponent
export interface CompositeComponent extends Widget {
  type: any
  component: Component<any, any>
  ref?: Ref
  dom: Element | null
}
export interface StatelessComponent extends Widget {
  type: Function
  dom: Element | null
}
export interface Component<P, S> extends ComponentLifecycle<P, S> {
  state: Readonly<S>
  props: Readonly<P> & Readonly<any>
  context: any
  prevProps: P
  prevState: S
  prevContext: object
  dom: any
  vnode: CompositeComponent
  clearCallBacks: () => void
  refs: Refs
  getState (): S
  render (props?: any, context?: any): VirtualNode
}

export interface Props {
  children?: VirtualChildren
  ref?: Ref
  key?: any
  className?: string | object
  [k: string]: any
}

export interface VText {
  vtype: VNodeType
  text: string | number
  dom: Text | null
}

export interface VVoid {
  vtype: VNodeType
  dom: Text | null
}

export interface Portal {
  vtype: VNodeType
  type: Element
  children: VirtualNode
  dom: null | Element
}

export interface VNode {
  vtype: VNodeType
  type: string
  props: Props
  children: VirtualChildren
  key: string | number | undefined
  parentContext?: any
  dom: Element | null
  ref: Function | string | null
}

export type VirtualNode =
  | VNode
  | VText
  | CompositeComponent
  | StatelessComponent
  | VVoid
  | Portal
