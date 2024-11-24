import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'Dashboard',
    iconName: 'solar:widget-add-line-duotone',
    route: '/dashboard',
  },
  {
    navCap: 'Gestión de Usuarios',
    divider: true,
  },
  {
    displayName: 'Usuarios',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/usuarios/usuarios',
  },
  {
    displayName: 'Clientes',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/usuarios/clientes',
  },
  {
    navCap: 'Gestión de Trámites',
    divider: true,
  },
  {
    displayName: 'Registrar Tramite',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/tramites/registrar-tramites',
  },
  {
    displayName: 'Lista de Tramites',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/tramites/lista-tramites',
  },
  {
    displayName: 'Badge',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'solar:danger-circle-line-duotone',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'solar:text-field-focus-line-duotone',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Forms',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'solar:tablet-line-duotone',
    route: '/ui-components/tables',
  },
  {
    navCap: 'Auth',
    divider: true,
  },
  {
    displayName: 'Login',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
    divider: true,
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'solar:planet-3-line-duotone',
    route: '/extra/sample-page',
  },
];
