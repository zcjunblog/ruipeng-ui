import { VNodeDirective } from 'vue'

export interface RpInfiniteScroll extends VNodeDirective {
  name: 'infinite-scroll',
  value: Function
}