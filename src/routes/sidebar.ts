export type Route = {
  label: string,
  href?: string,
  children?: Route[],
  disabled?: boolean,
}

const routes: Route[] = [
  {
    label: 'Components',
    children: [
      {
        label: 'Button',
        href: '/components/button',
      },
      {
        label: 'Dialog',
        href: '/components/dialog',
      },
      {
        label: 'Alert',
        href: '/components/alert',
      },
      {
        label: 'Select',
        href: '/components/select',
      },
    ]
  },
  {
    label: 'Layouts',
    disabled: true,
  }
]

export { routes }
