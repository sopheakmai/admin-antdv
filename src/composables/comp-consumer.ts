import type { VNode } from "vue";
import { createVNode } from "vue";

const compMap = new Map<string, VNode>();

export function useCompConsumer() {
  const route = useRoute();
  const getComp = (component: VNode): VNode => {
    // Check if current route contains name, if not, handle it directly
    if (!route.name)
      return component;

    // Get current component name
    // @ts-expect-error this is obj
    const compName = component?.type?.name;
    const routeName = route.name as string;
    if (compMap.has(routeName))
      return compMap.get(routeName) as VNode;

    // If it doesn't exist, need to organize it
    const node = component;
    if (compName && compName === routeName) {
      compMap.set(routeName, node);
      return node;
    }

    const Comp = createVNode(node);
    if (!Comp.type)
      Comp.type = {};

    // @ts-expect-error this is obj
    Comp.type.name = routeName;
    compMap.set(routeName, Comp);
    return Comp;
  };

  return {
    getComp,
  };
}
