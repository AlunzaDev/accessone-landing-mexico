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
      <p>Satisfacer las necesidades de administración y operación de nuestros clientes: centros comerciales, estacionamientos, servicios de valet parking, consumidores de tecnología y equipo de control de acceso de cualquier tipo.</p>
      <p>Brindar siempre un servicio de calidad, enfocado en proporcionar atención de primer nivel y excelencia, teniendo como objetivo ser rentables y productivos, haciendo del cliente nuestra prioridad.</p>
      <p>Actuar con dinamismo en la resolución de los retos de los servicios contratados, ajustándonos en todo momento a las peticiones y necesidades de nuestros clientes.</p>
    </>,
  },
  {
    id: 'vision',
    title: 'Visión',
    eyebrow: 'Hacia dónde vamos',
    content: <>
      <p>Ser una empresa competitiva a nivel mundial, brindando el mejor servicio de administración y operación de centros comerciales, estacionamientos y valet parking, así como la venta de tecnología para control de acceso.</p>
      <p>Tener un crecimiento sostenido mediante la búsqueda de la excelencia y la mejora continua, siendo día con día una empresa más productiva y rentable.</p>
    </>,
  },
  {
    id: 'filosofia',
    title: 'Filosofía',
    eyebrow: 'Lo que nos sostiene',
    content: <>
      <p>Todo el personal de AccessOne debe tener una calidad de vida digna y estabilidad laboral, teniendo siempre sólidos los siguientes valores:</p>
      <ul><li>Honestidad</li><li>Lealtad</li><li>Responsabilidad</li><li>La familia</li><li>Transparencia</li></ul>
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
