import { RuipengUIComponent } from './component'

/** Breadcrumb Item Component */
export declare class RpBreadcrumbItem extends RuipengUIComponent {
  /** Target route of the link, same as to of vue-router */
  to: string | object

  /** If true, the navigation will not leave a history record */
  replace: boolean
}
