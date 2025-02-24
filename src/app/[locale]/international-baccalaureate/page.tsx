import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Link from 'next/link';
import { imagenPAI, imagenPD, imagenPEP } from '@/constants/images';
import Modal from '@/components/Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bachillerato Internacional - GLP',
  description:
    'El Gimnasio los Pinos es un colegio IB que ofrece los programas del Bachillerato Internacional: Primary Years Programme (PYP), Middle Years Programme (MYP) y Diploma Programme (DP). Formamos profesionales investigativos, informados, pensadores, comunicadores, íntegros, de mentalidad abierta, solidarios, audaces, equilibrados y reflexivos.',
  keywords: [
    'bachillerato internacional',
    'colegio IB',
    'Primary Years Programme',
    'PYP',
    'Middle Years Programme',
    'MYP',
    'Diploma Programme',
    'DP',
    'educación internacional',
    'colegio bilingüe bogotá',
    'formación integral',
    'colegios IB en bogotá',
    'colegios IB en colombia',
    'beneficios del IB',
    'educación de calidad',
    'colegios con bachillerato internacional',
    'perfil de la comunidad IB',
    'colegios en usaquén',
    'colegios en bogotá',
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
    url: 'https://gimnasiolospinos.edu.co/international-baccalaureate',
    type: 'website',
    siteName: 'Gimnasio los Pinos',
    title: 'Bachillerato Internacional - GLP',
    description:
      'Descubre los programas del Bachillerato Internacional en el Gimnasio los Pinos: PYP, MYP y DP. Formamos estudiantes investigativos, informados, pensadores, comunicadores, íntegros y de mentalidad abierta, preparándolos para ser líderes globales.',
  },
};

interface Props {
  params: {
    locale: string;
  };
}

const InternationalBaccalaureatePage: FC<Props> = ({}) => {
  const t = useTranslations('international-baccalaureate-page');

  const colorfulLayerClasses =
    'absolute top-0 left-0 w-full h-full opacity-50 bg-black';
  const h2Classes =
    'text-2xl sm:text-5xl font-bold text-dark-green-100 text-center z-[10]';
  const pClasses = 'text-md sm:text-xl text-center z-[10]';
  const sectionClasses =
    'relative w-full px-[20px] lg:px-[200px] flex flex-col justify-center items-center gap-10 min-h-[50vh] bg-cover bg-no-repeat';
  const normalBtnClasses =
    'w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-dark-green-100 hover:bg-dark-green-200 border-0';
  const blackishLayerClasses =
    'absolute z-[0] left-0 top-0 w-full h-full bg-black opacity-25';

  return (
    <main className='flex flex-col gap-[50px]'>
      <section
        style={{
          alignItems: 'flex-start',
        }}
        className={`py-[50px] ${sectionClasses} items-start bg-[url("/BACHILLERAO%20INTERNACIONAL.jpg")] bg-center`}
      >
        <div className={`${colorfulLayerClasses}`} />
        <h2 className={`${h2Classes} text-start w-auto sm:w-[50%] text-white`}>
          {t('section-1.title')}
        </h2>
        <p className={`${pClasses} text-start w-auto sm:w-[50%] text-white`}>
          {t('section-1.description')}
        </p>
        <ul className='list-disc px-4 text-md sm:text-xl text-white z-[10]'>
          <li>{t('section-1.list.item-1-text')}</li>
          <li>{t('section-1.list.item-2-text')}</li>
          <li>{t('section-1.list.item-3-text')}</li>
          <li>{t('section-1.list.item-4-text')}</li>
          <li>{t('section-1.list.item-5-text')}</li>
          <li>{t('section-1.list.item-6-text')}</li>
          <li>{t('section-1.list.item-7-text')}</li>
          <li>{t('section-1.list.item-8-text')}</li>
          <li>{t('section-1.list.item-9-text')}</li>
          <li>{t('section-1.list.item-10-text')}</li>
        </ul>
      </section>
      <section className='px-[20px] sm:px-[200px] flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center mb-[50px] gap-10'>
        <div className='flex flex-col justify-center items-center gap-10 w-[600px]'>
          <h2 className={`${h2Classes}`}>{t('section-6.title')}</h2>
          <p className={`${pClasses}`}>{t('section-6.description')}</p>
          <Link
            href='https://www.ibo.org/es/'
            target='_blank'
            type='button'
            className={`${normalBtnClasses}`}
          >
            {t('section-4.button-text')}
          </Link>
        </div>
        <figure className='flex flex-col items-center gap-4'>
          <img
            className='w-[500px]'
            src='/internationalBacNew.jpeg'
            alt='Section 3'
          />
          <figcaption className='text-center'>
            {t.rich('section-3.image-fig-caption', {
              link: (text) => {
                return (
                  <Link
                    href='/'
                    className='text-light-green underline font-bold'
                  >
                    {text}
                  </Link>
                );
              },
            })}
          </figcaption>
        </figure>
      </section>
      <section className='flex flex-row flex-wrap gap-5 justify-center items-center'>
        <Link href='#pepSection'>
          <Image
            className='w-[150px] border rounded-lg p-2 glass'
            src='/PEPimage.png'
            alt='PEP'
            width={400}
            height={400}
          />
        </Link>
        <Link href='#paiSection'>
          <Image
            className='w-[150px] border rounded-lg p-2 glass'
            src='/PAIimage.png'
            alt='PAI'
            width={400}
            height={400}
          />
        </Link>
        <Link href='#dpSection'>
          <Image
            className='w-[150px] border rounded-lg p-2 glass'
            src='/DPimage.png'
            alt='DP'
            width={400}
            height={400}
          />
        </Link>
        <Link href='#ibSection'>
          <Image
            className='w-[150px] border rounded-lg p-2 glass'
            src='/IBimage.png'
            alt='IB'
            width={400}
            height={400}
          />
        </Link>
      </section>
      <section
        id='pepSection'
        className={`min-h-[50vh] px-[20px] sm:px-[200px] flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center gap-10`}
      >
        <Image
          className='w-[200px]'
          src='/PEPimage.png'
          alt='PEP'
          width={400}
          height={400}
        />
        <p className={`w-[600px] ${pClasses}`}>
          {t('section-5.pep-description-text')}
        </p>
      </section>
      <div className='divider' />
      <section
        id='paiSection'
        className={`min-h-[50vh] px-[20px] sm:px-[200px] flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center gap-10`}
      >
        <Image
          className='w-[200px]'
          src='/PAIimage.png'
          alt='PAI'
          width={400}
          height={400}
        />
        <p className={`w-[600px] ${pClasses}`}>
          {t('section-5.pai-description-text')}
        </p>
      </section>
      <div className='divider' />
      <section
        id='dpSection'
        className={`min-h-[50vh] px-[20px] sm:px-[200px] flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center gap-10`}
      >
        <Image
          className='w-[200px]'
          src='/DPimage.png'
          alt='DP'
          width={400}
          height={400}
        />
        <p className={`w-[600px] ${pClasses}`}>
          {t('section-5.pd-description-text')}
        </p>
      </section>
      <div className='divider' />
      <section
        id='ibSection'
        className={`min-h-[50vh] px-[20px] sm:px-[200px] flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center gap-10`}
      >
        <Image
          className='w-[200px]'
          src='/IBimage.png'
          alt='IB'
          width={400}
          height={400}
        />
        <p className={`w-[600px] ${pClasses}`}>
          {t('section-5.ib-description-text')}
        </p>
      </section>
      {/* <section
        id='section-4'
        className='px-[200px] flex flex-col items-center gap-10'
      >
        <ul className='flex flex-row gap-10 justify-center items-center flex-wrap'>
          <li className='relative w-[280px] h-[280px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[280px] min-w-[280px] max-w-[280px] bg-[url("/carrousel1.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-dark-green-200 opacity-80 rounded-lg`}
            />
            <span className='z-[10]'>
              {t('section-4.list.list-item-1-text')}
            </span>
          </li>
          <li className='relative w-[280px] h-[280px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[280px] min-w-[280px] max-w-[280px] bg-[url("/carrousel2.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-dark-green-200 opacity-80 rounded-lg`}
            />
            <span className='z-[10]'>
              {t('section-4.list.list-item-2-text')}
            </span>
          </li>
          <li className='relative w-[280px] h-[280px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[280px] min-w-[280px] max-w-[280px] bg-[url("/carrousel3.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-dark-green-200 opacity-80 rounded-lg`}
            />
            <span className='z-[10]'>
              {t('section-4.list.list-item-3-text')}
            </span>
          </li>
          <li className='relative w-[280px] h-[280px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[280px] min-w-[280px] max-w-[280px] bg-[url("/carrousel5.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-dark-green-200 opacity-80 rounded-lg`}
            />
            <span className='z-[10]'>
              {t('section-4.list.list-item-4-text')}
            </span>
          </li>
        </ul>
      </section> */}
      {/* <section
        id='section-5'
        className='w-full min-h-[50vh] px-[20px] lg:px-[200px] py-[50px] flex flex-col gap-4 justify-center items-center bg-no-repeat bg-[url("/modelo.jpg")] bg-center sm:bg-[position:-200%_40%] bg-cover'
      >
        <div className={`${blackishLayerClasses} opacity-25`} />
        <h2 className='text-2xl sm:text-[50px] z-[10] font-bold text-white leading-none text-center sm:text-start'>
          {t('section-3.title')}
        </h2>
        <p className={`${pClasses} text-white z-[100]`}>
          {t('section-3.description')}
        </p>
        <Modal
          title={''}
          labelContent={
            <div className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-white z-[1000]'>
              {t('section-5.pep-button-text')}
            </div>
          }
          additionalContent={
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                className='w-[200px]'
                src='/PEPimage.png'
                alt='PEP'
                width={400}
                height={400}
              />
              <p>{t('section-5.pep-description-text')}</p>
            </div>
          }
          closeBtnText={'Este es el boton para cerrar'}
        />
        <Modal
          title={''}
          labelContent={
            <div className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-white z-[1000]'>
              {t('section-5.pai-button-text')}
            </div>
          }
          additionalContent={
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                className='w-[200px]'
                src='/PAIimage.png'
                alt='PEP'
                width={400}
                height={400}
              />
              <p>{t('section-5.pai-description-text')}</p>
            </div>
          }
          closeBtnText={'Este es el boton para cerrar'}
        />
        <Modal
          title={''}
          labelContent={
            <div className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-white z-[1000]'>
              {t('section-5.pd-button-text')}
            </div>
          }
          additionalContent={
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                className='w-[200px]'
                src='/DPimage.png'
                alt='PEP'
                width={400}
                height={400}
              />
              <p>{t('section-5.pd-description-text')}</p>
            </div>
          }
          closeBtnText={'Este es el boton para cerrar'}
        />
        <Modal
          title={''}
          labelContent={
            <div className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-white z-[1000]'>
              {t('section-5.ib-button-text')}
            </div>
          }
          additionalContent={
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                className='w-[200px]'
                src='/IBimage.png'
                alt='PEP'
                width={400}
                height={400}
              />
              <p>{t('section-5.ib-description-text')}</p>
            </div>
          }
          closeBtnText={'Este es el boton para cerrar'}
        />
      </section> */}
    </main>
  );
};

export default InternationalBaccalaureatePage;
