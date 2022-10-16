import { computed, ComputedRef, Ref } from "vue";

const usePaginateItems = (
  itemsData: any,
  pageNumber: Ref<number>,
  pageSize: number
): { items: any; isLastPageReached: ComputedRef<boolean> } => {
  pageNumber.value += 1;

  const isLastPageReached = computed(() => {
    return pageNumber.value * pageSize > itemsData!.length - 1;
  });

  return { items: itemsData.slice(0, pageSize * pageNumber.value), isLastPageReached };
};

export default usePaginateItems;
