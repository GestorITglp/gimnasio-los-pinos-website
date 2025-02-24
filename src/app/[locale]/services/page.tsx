import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBowlFood,
  faShirt,
  faUserNurse,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '@/components/Modal/Modal';
import {
  linkBiblioteca,
  linkMenuRestaurante,
  linkPagoTransporte,
} from '@/constants/links';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios - GLP',
  description:
    'En el Gimnasio los Pinos ofrecemos una variedad de servicios integrales para apoyar el desarrollo académico y personal de nuestros estudiantes. Incluimos servicios de psicología, transporte escolar seguro y eficiente, restaurante con opciones saludables, biblioteca bien equipada, uniformes, y atención de enfermería.',
  keywords: [
    'servicios escolares',
    'psicología escolar',
    'transporte escolar',
    'rutas escolares',
    'restaurante escolar',
    'biblioteca escolar',
    'uniformes escolares',
    'enfermería escolar',
    'colegio bilingüe bogotá',
    'educación integral',
    'servicios estudiantiles',
    'colegios en usaquén',
    'colegios en bogotá',
    'apoyo estudiantil',
    'seguridad escolar',
    'salud escolar',
  ],
  generator: 'Next.js',
  applicationName: 'Gimnasio los Pinos',
  creator: 'Daniel Ricardo Ramírez Molina',
  twitter: {
    card: 'summary_large_image',
    images:
      'https://play-lh.googleusercontent.com/_cOJFTCP05a2gam4rSXrB7bnqg4V2QLfUgywW8XZVFtIkN8Wvh8C2rkH-UHR6OKxxok',
  },
  openGraph: {
    images:
      'https://play-lh.googleusercontent.com/_cOJFTCP05a2gam4rSXrB7bnqg4V2QLfUgywW8XZVFtIkN8Wvh8C2rkH-UHR6OKxxok',
    url: 'https://gimnasiolospinos.edu.co/services',
    type: 'website',
    siteName: 'Gimnasio los Pinos',
    title: 'Servicios - GLP',
    description:
      'Descubre los servicios integrales del Gimnasio los Pinos, diseñados para apoyar el desarrollo académico y personal de nuestros estudiantes. Incluye psicología, transporte, restaurante, biblioteca, uniformes y enfermería.',
  },
};

interface Props {
  params: {
    locale: string;
  };
}

const ServicesPage: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('services-page');

  const colorfulLayerClasses =
    'absolute top-0 left-0 w-full h-full opacity-50 bg-black';
  const h2Classes =
    'text-2xl sm:text-5xl font-bold text-dark-green-100 text-center z-[10]';
  const h3Classes = 'text-2xl font-bold text-center';
  const pClasses = 'text-md sm:text-xl text-center z-[10]';
  const sectionClasses =
    'relative w-full px-[20px] lg:px-[200px] flex flex-col justify-center items-center gap-10 min-h-[50vh] bg-cover bg-no-repeat';
  const section2btnClasses =
    'p-2 w-[175px] h-[175px] flex flex-col justify-evenly items-center bg-white hover:bg-light-green text-light-green hover:text-white text-[75px] rounded-xl border-4 border-light-green transition-all';
  return (
    <main className='flex flex-col items-center gap-[50px]'>
      <section
        style={{
          minHeight: '65vh',
        }}
        className={`${sectionClasses} bg-[url("/serviciosIntro.jpg")] bg-top`}
      >
        <div className={`${colorfulLayerClasses}`} />
        <h2 className={`${h2Classes} text-white`}>{t('title')}</h2>
        <p className={`${pClasses} text-white`}>{t('description')}</p>
      </section>
      <section className={`${sectionClasses} border-b-2 border-dark-green-100`}>
        <div className={`${colorfulLayerClasses} bg-transparent`} />
        <h2 className={`${h2Classes}`}>{t('section-1.title')}</h2>
        <div className='flex flex-row flex-wrap sm:flex-nowrap justify-between items-center gap-10'>
          <p className={`${pClasses}`}>
            {t.rich('section-1.description', {
              br: (text) => {
                return (
                  <>
                    <br />
                    <br />
                    {text}
                  </>
                );
              },
            })}
          </p>
          <img
            className='min-w-auto sm:min-w-[400px] self-end'
            src='/PSICOLOGIA.jpg'
            alt='Section 2'
          />
        </div>
      </section>
      <section
        className={`py-[50px] ${sectionClasses} bg-no-repeat bg-center bg-[url("/servicesPageSection3.jpg")]`}
      >
        <div className={`${colorfulLayerClasses}`} />
        <h2 className={`${h2Classes} text-white`}>{t('section-2.title')}</h2>
        <p className={`${pClasses} text-white`}>
          {t.rich('section-2.info', {
            notable: (text) => {
              return <b>{text}</b>;
            },
            br: (text) => {
              return (
                <>
                  <br />
                  <br />
                  {text}
                </>
              );
            },
          })}
        </p>
        <Link
          className='z-[10]'
          href={linkPagoTransporte}
          target='_blank'
        >
          <img
            className='w-[400px] z-[10]'
            src='/integraturLogo.png'
            alt='Integratur logo'
          />
        </Link>
        <p className={`${pClasses} text-white`}>
          {t.rich('section-2.instructions', {
            notable: (text) => {
              return <b>{text}</b>;
            },
            br: (text) => {
              return (
                <>
                  <br />
                  <br />
                  {text}
                </>
              );
            },
          })}
        </p>
      </section>
      <section
        className={`w-full px-[20px] sm:px-[200px] flex flex-col justify-center items-center gap-10 mb-[50px]`}
      >
        <h2 className={`${h2Classes}`}>{t('section-3.title')}</h2>
        <ul className='w-full flex flex-row flex-wrap justify-evenly items-center gap-10'>
          <li className='flex flex-col items-center gap-2 cursor-pointer'>
            <Link
              href={linkMenuRestaurante}
              target='_blank'
              className={`${section2btnClasses}`}
            >
              <FontAwesomeIcon icon={faBowlFood} />
              <span className='text-sm font-black'>
                {t('section-3.list.restaurant.title').toUpperCase()}
              </span>
            </Link>
            <span className='w-full text-center text-xl font-bold'>
              {t('section-3.list.restaurant.download-menu-link-text')}
            </span>
          </li>
          <li className='flex flex-col items-center gap-2 cursor-pointer'>
            <Link
              href={linkBiblioteca}
              target='_blank'
              className={`${section2btnClasses}`}
            >
              <FontAwesomeIcon icon={faBook} />
              <span className='text-sm font-black'>
                {t('section-3.list.library.title').toUpperCase()}
              </span>
            </Link>
            <span className='w-full text-center text-xl font-bold'>
              {t('section-3.list.library.see-more-link-text')}
            </span>
          </li>
          <li className='flex flex-col items-center gap-2 cursor-pointer'>
            <Modal
              title={t('section-3.list.infirmary.title')}
              labelContent={
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                  <div className={`${section2btnClasses}`}>
                    <FontAwesomeIcon icon={faUserNurse} />
                    <span className='text-sm font-black'>
                      {t('section-3.list.infirmary.title').toUpperCase()}
                    </span>
                  </div>
                  <span className='w-full text-center text-xl font-bold'>
                    {t('section-3.list.infirmary.see-more-link-text')}
                  </span>
                </div>
              }
              additionalContent={
                <div className='flex flex-col items-start'>
                  <p className='mt-4'>
                    {t.rich('section-3.infirmary-modal.description', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    })}
                  </p>
                  <span className='mt-4 font-black'>
                    {t('section-3.infirmary-modal.list-introductory-text')}
                  </span>
                  <ul className='list-disc pt-4 px-4'>
                    <li>{t('section-3.infirmary-modal.list.item-1-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-2-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-3-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-4-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-5-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-6-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-7-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-8-text')}</li>
                    <li>{t('section-3.infirmary-modal.list.item-9-text')}</li>
                  </ul>
                </div>
              }
              closeBtnText={t('section-3.infirmary-modal.close-button-text')}
            />
          </li>
          <li className='flex flex-col items-center gap-2 cursor-pointer'>
            <Modal
              styles={{}}
              title={''}
              labelContent={
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                  <div className={`${section2btnClasses}`}>
                    <FontAwesomeIcon icon={faShirt} />
                    <span className='text-sm font-black'>
                      {t('section-3.list.uniforms.title').toUpperCase()}
                    </span>
                  </div>
                  <span className='w-full text-center text-xl font-bold'>
                    {t('section-3.list.uniforms.see-more-link-text')}
                  </span>
                </div>
              }
              additionalContent={
                <img
                  className='w-full rounded-lg'
                  src='/uniformes.jpeg'
                  alt='Uniforms'
                />
              }
              closeBtnText={t('section-3.infirmary-modal.close-button-text')}
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ServicesPage;
