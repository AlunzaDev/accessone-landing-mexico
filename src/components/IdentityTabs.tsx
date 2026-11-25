import {
  IdentityTabs as SharedIdentityTabs,
  type IdentitySection,
} from '@alunzadev/accessone-ui';
import '@alunzadev/accessone-ui/styles/identity-tabs.css';

const sections: IdentitySection[] = [
  {
    id: 'mision',
    title: 'Misión',
    eyebrow: 'Nuestro propósito',
    content: <>
      <p>Satisfacer las necesidades de nuestros clientes, brindando un servicio de calidad y otorgando total transparencia en la operación y administración de sus estacionamientos, logrando maximizar sus ingresos.</p>
    </>,
  },
  {
    id: 'vision',
    title: 'Visión',
    eyebrow: 'Hacia dónde vamos',
    content: <>
      <p>Ser una empresa competitiva a nivel Latinoamérica, brindando el mejor servicio de administración y operación de estacionamientos, con la mejor tecnología de control y procesos estandarizados, logrando el 100 % de la confianza en nuestros clientes.</p>
    </>,
  },
  {
    id: 'filosofia',
    title: 'Valores',
    eyebrow: 'Lo que nos guía',
    content: <>
      <p>Nuestros valores son:</p>
      <ul><li>Transparencia</li><li>Honestidad</li><li>Lealtad</li><li>Responsabilidad</li><li>Integridad</li><li>Responsabilidad Social</li></ul>
      <p>Valores que AccessOne comparte con todos sus clientes y colaboradores.</p>
    </>,
  },
  {
    id: 'valor-agregado',
    title: 'Valor agregado',
    eyebrow: 'Más allá de la operación',
    content: <>
      <p>Planeación y elaboración de proyectos.</p>
      <ul><li>Ejecución de obra civil, eléctrica, red y voz.</li><li>Campaña de inicio de operaciones.</li><li>Imagen corporativa estandarizada.</li><li>Estandarización de procesos.</li><li>Inversión inicial.</li><li>Operación y mantenimiento de equipos de control de estacionamiento de diversas marcas.</li></ul>
    </>,
  },
];

export default function IdentityTabs() {
  return <SharedIdentityTabs sections={sections} />;
}
