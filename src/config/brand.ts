import type { LandingBrandConfig, NavigationLink } from '@alunzadev/accessone-ui';

export const brand: LandingBrandConfig = {
  name: 'AccessOne Parking México',
  region: 'México',
  locale: 'es-MX',
  logos: {
    onLight: '/accessone-mexico-horizontal-dark.png',
    onDark: '/accessone-mexico-horizontal-light.png',
  },
};

export const navigation: readonly NavigationLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/factura', label: 'Obtén tu factura' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
];

