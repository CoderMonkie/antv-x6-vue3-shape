import { defineComponent, h, reactive, Teleport, markRaw, Fragment } from 'vue'
import { Graph } from '@antv/x6'
import { VueShape } from './node'

let active = false
const items = reactive<{ [key: string]: any }>({})

export function connect(
  id: string,
  component: any,
  container: HTMLDivElement,
  node: VueShape,
  graph: Graph,
) {
  if (active) {
    items[id] = markRaw(
      defineComponent({
        render: () => h(Teleport, { to: container } as any, [h(component, { node, graph })]),
        provide: () => ({
          getNode: () => node,
          getGraph: () => graph,
        }),
      }),
    )
  }
}

export function disconnect(id: string) {
  if (active) {
    delete items[id]
  }
}

export function isActive() {
  return active
}

export function getTeleport(): any {
  active = true

  return defineComponent({
    setup() {
      return () =>
        h(
          Fragment,
          {},
          Object.keys(items).map((id) => h(items[id])),
        )
    },
  })
}
