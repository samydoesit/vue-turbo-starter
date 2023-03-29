// TODO: Remove once https://github.com/vuejs/test-utils/issues/1973 is resolved
declare module '@vue/test-utils' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  export function mount<T extends DefineComponent<{}, {}, any>>(
    component: T,
    options?: ComponentMountingOptions<T>
  ): VueWrapper<InstanceType<T>>;
}

export {}
