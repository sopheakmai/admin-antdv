import { isFunction } from "@/utils/helper";
import { defineComponent } from "vue";

export const ParentCompConsumer = defineComponent({
  name: "ParentCompConsumer",
  setup(_, { slots }) {
    const route = useRoute();
    const parentMap = new Map<string, any>();
    return () => {
      const parentName = route.meta?.parentName;
      const parentComps = route.meta?.parentComps;

      if (parentName) {
        // Get component information
        if (parentMap.has(parentName)) {
          return parentMap.get(parentName);
        }
        else {
          // Does not exist to judge if it existsparentComps
          if (parentComps?.length) {
            // Get component information
            let comp: any;
            for (const parentComp of [...parentComps].reverse()) {
              // From inside to outside
              const comp1: any = isFunction(parentComp) ? defineAsyncComponent(parentComp as any) : parentComp;
              if (comp) {
                comp = h(comp1, null, {
                  default: () => comp,
                });
              }
              else {
                comp = h(comp1, null, slots);
              }
            }
            if (comp) {
              parentMap.set(parentName, comp);
              return comp;
            }
          }
        }
      }
      return slots?.default?.();
    };
  },
});
