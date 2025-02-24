import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Link from 'next/link';
import AdmissionForm, {
  FormField,
} from '@/components/AdmissionForm/AdmissionForm';
import {
  linkCompraFormulario,
  linkFormularioInscripcion,
  linkFormularioPreinscripcion,
  linkUtilesEscolares,
  linkVideo,
} from '@/constants/links';
import { carouselMedia } from '@/constants/carouselMedia';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admisiones - GLP',
  description:
    'Encuentra toda la información necesaria para el proceso de admisión en el Gimnasio los Pinos. Descubre los requisitos, formularios de preinscripción e inscripción, lista de útiles escolares y detalles sobre los uniformes. ¡Te guiamos paso a paso para que formes parte de nuestra comunidad educativa!',
  keywords: [
    'admisiones colegio',
    'proceso de admisión',
    'formulario de preinscripción',
    'formulario de inscripción',
    'compra de formulario',
    'lista de útiles escolares',
    'uniformes escolares',
    'requisitos de admisión',
    'colegio bogotá',
    'colegio usaquén',
    'colegio bilingüe',
    'colegio IB',
    'colegio internacional',
    'colegios en bogotá',
    'colegios en colombia',
    'admisión estudiantes nuevos',
    'colegio trilingüe',
    'educación de calidad',
    'colegios privados bogotá',
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
    url: 'https://gimnasiolospinos.edu.co/admissions',
    type: 'website',
    siteName: 'Gimnasio los Pinos',
    title: 'Admisiones - GLP',
    description:
      'Descubre el proceso de admisión del Gimnasio los Pinos. Encuentra formularios de preinscripción e inscripción, lista de útiles escolares, requisitos y detalles sobre uniformes. ¡Únete a nuestra comunidad educativa!',
  },
};

interface Props {
  params: {
    locale: string;
  };
}

const AdmissionsPage: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('admissions-page');

  const colorfulLayerClasses =
    'absolute top-0 left-0 w-full h-full opacity-50 bg-white';
  const h2Classes =
    'text-2xl sm:text-5xl font-bold text-dark-green-100 text-center z-[10]';
  const h3Classes = 'text-lg sm:text-2xl font-bold text-center z-[10]';
  const pClasses = 'text-md sm:text-xl text-center z-[10]';
  const sectionClasses =
    'relative w-full px-[20px] lg:px-[200px] flex flex-col justify-center items-center gap-10 min-h-[50vh] bg-cover bg-no-repeat';
  const section2btnClasses =
    'w-[175px] h-[175px] flex flex-col justify-evenly items-center bg-white hover:bg-light-green text-light-green hover:text-white text-[75px] rounded-xl border-4 border-light-green transition-all';
  const formFields: Array<FormField> = [
    {
      id: 'legalResponsibleName',
      label: t('section-1.form.legal-responsible-name-field.label'),
      placeholder: t('section-1.form.legal-responsible-name-field.placeholder'),
      componentType: 'input',
      dataType: 'text',
    },
    {
      id: 'legalResponsibleNumber',
      label: t('section-1.form.legal-responsible-number-field.label'),
      placeholder: t(
        'section-1.form.legal-responsible-number-field.placeholder'
      ),
      componentType: 'input',
      dataType: 'tel',
    },
    {
      id: 'legalResponsibleEmail',
      label: t('section-1.form.legal-responsible-email-field.label'),
      placeholder: t(
        'section-1.form.legal-responsible-email-field.placeholder'
      ),
      componentType: 'input',
      dataType: 'email',
    },
    {
      id: 'childName',
      label: t('section-1.form.child-name-field.label'),
      placeholder: t('section-1.form.child-name-field.placeholder'),
      componentType: 'input',
      dataType: 'text',
    },
    {
      id: 'childAge',
      label: t('section-1.form.child-age-field.label'),
      placeholder: t('section-1.form.child-age-field.placeholder'),
      componentType: 'input',
      dataType: 'number',
    },
    {
      id: 'childGrade',
      label: t('section-1.form.child-grade-field.label'),
      placeholder: t('section-1.form.child-grade-field.placeholder'),
      componentType: 'dropdown',
      options: [
        t('section-1.form.child-grade-field.options.opt-1-text'),
        t('section-1.form.child-grade-field.options.opt-2-text'),
        t('section-1.form.child-grade-field.options.opt-3-text'),
        t('section-1.form.child-grade-field.options.opt-4-text'),
      ],
    },
  ];
  return (
    <main className='flex flex-col justify-center items-center gap-[50px]'>
      <section
        className={`py-[50px] relative w-full px-[20px] sm:px-[200px] flex flex-col justify-center items-center sm:items-start gap-2 min-h-[50vh] bg-cover bg-right-top bg-no-repeat bg-[url("/PROCESO%20DE%20ADMISION.jpg")] bg-[position:-200%_35%]`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-50 bg-black`}
        />
        <h1
          className={`text-2xl sm:text-5xl font-bold text-center z-[10] text-white mb-4`}
        >
          {t('section-1.title')}
        </h1>
        <AdmissionForm
          fields={formFields}
          sendButtonText={t('section-1.form.send-button-text')}
          successMessage={t('section-1.form.success-message-text')}
          errorMessage={t('section-1.form.error-message-text')}
          closeAlertBtnText={t('section-1.form.close-alert-button-text')}
          enableFormBtnText={t('section-1.enable-form-button-text')}
        />
        <div className='w-full self-center flex flex-row flex-wrap justify-end items-center gap-10 sm:gap-10'>
          <Link
            className={`p-4 w-[150px] h-[150px] flex justify-center items-center ${h3Classes} text-dark-green-100 bg-white hover:text-white hover:bg-dark-green-100 transition-all rounded-lg drop-shadow-lg`}
            href={linkUtilesEscolares}
            target='_blank'
          >
            {t('section-1.supply-list-section.title')}
          </Link>
          <div className='p-4 flex flex-col justify-center items-center gap-0 z-[10] bg-dark-green-100 hover:bg-white hover:text-dark-green-100 transition-all rounded-lg drop-shadow-lg text-white text-center'>
            <h3 className={`${h3Classes} transition-all`}>
              {t('section-1.forms-section.title')}
            </h3>
            <ul className='flex flex-col items-center gap-2 font-light'>
              <li>
                <Link
                  className={`${pClasses} hover:underline transition-all`}
                  href={linkFormularioPreinscripcion}
                  target='_blank'
                >
                  {t('section-1.forms-section.list.item-1-text')}
                </Link>
              </li>
              <li>
                <Link
                  className={`${pClasses} hover:underline transition-all`}
                  href={linkFormularioInscripcion}
                  target='_blank'
                >
                  {t('section-1.forms-section.list.item-2-text')}
                </Link>
              </li>
              <li>
                <Link
                  className={`${pClasses} hover:underline transition-all`}
                  href={linkCompraFormulario}
                  target='_blank'
                >
                  {t('section-1.forms-section.list.item-3-text')}
                </Link>
              </li>
            </ul>
          </div>
          <Link
            className={`p-4 w-[150px] h-[150px] ${h3Classes} flex justify-center items-center text-dark-green-100 bg-white hover:text-white hover:bg-dark-green-100 rounded-lg drop-shadow-lg`}
            target='_blank'
            href='/uniforms.JPG'
          >
            {t('section-1.uniforms.title')}
          </Link>
        </div>
      </section>
      <section className='flex flex-col gap-10 justify-center items-center'>
        <h2 className={`${h2Classes}`}>{t('section-2.title')}</h2>
        <ul className='timeline timeline-vertical lg:timeline-horizontal'>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <div className='timeline-start'>{t('section-2.step-1.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-1.description')}
            </div>
            <hr />
          </li>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <hr />
            <div className='timeline-start'>{t('section-2.step-2.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-2.description')}
            </div>
            <hr />
          </li>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <hr />
            <div className='timeline-start'>{t('section-2.step-3.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-3.description')}
            </div>
            <hr />
          </li>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <hr />
            <div className='timeline-start'>{t('section-2.step-4.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-4.description')}
            </div>
            <hr />
          </li>
        </ul>
        <ul className='timeline timeline-vertical lg:timeline-horizontal'>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <div className='timeline-start'>{t('section-2.step-5.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-5.description')}
            </div>
            <hr />
          </li>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <hr />
            <div className='timeline-start'>{t('section-2.step-6.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-6.description')}
            </div>
            <hr />
          </li>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <hr />
            <div className='timeline-start'>{t('section-2.step-7.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-7.description')}
            </div>
            <hr />
          </li>
          <li className='text-dark-green-100 w-[200px] sm:w-fit'>
            <hr />
            <div className='timeline-start'>{t('section-2.step-8.title')}</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end timeline-box text-black text-sm sm:text-md w-[100px] break-words sm:w-auto'>
              {t('section-2.step-8.description')}
            </div>
            <hr />
          </li>
        </ul>
      </section>
      <section className='px-[200px] flex flex-col gap-10'>
        <h2 className={`${h2Classes}`}>{t('section-3.title')}</h2>
        <ul className='flex flex-row gap-10 justify-center items-center flex-wrap'>
          <li className='relative w-[250px] h-[250px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[250px] bg-[url("/bilingual.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg`}
            />
            <span className='z-[10]'>{t('section-3.list.item-1-text')}</span>
          </li>
          <li className='relative w-[250px] h-[250px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[250px] bg-[url("/dobleTitulacion.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg`}
            />
            <span className='z-[10]'>{t('section-3.list.item-2-text')}</span>
          </li>
          <li className='relative w-[250px] h-[250px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[250px] bg-[url("/arte.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg`}
            />
            <span className='z-[10]'>{t('section-3.list.item-3-text')}</span>
          </li>
          <li className='relative w-[250px] h-[250px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[250px] bg-[url("/humanidades.jpeg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg`}
            />
            <span className='z-[10]'>{t('section-3.list.item-4-text')}</span>
          </li>
          <li className='relative w-[250px] h-[250px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[250px] bg-[url("/deportes.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg`}
            />
            <span className='z-[10]'>{t('section-3.list.item-5-text')}</span>
          </li>
          <li className='relative w-[250px] h-[250px] bg-red-500 flex-1 rounded-lg flex justify-center items-center text-center p-4 text-lg font-bold text-white basis-[250px] bg-[url("/ciencias.jpg")] bg-cover bg-center'>
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg`}
            />
            <span className='z-[10]'>{t('section-3.list.item-6-text')}</span>
          </li>
        </ul>
      </section>
      <section
        className={`${sectionClasses} py-[50px] bg-[url("/admissionsPageSection4.jpg")] bg-cover bg-center`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-50 bg-black`}
        />
        <h1 className={`${h2Classes} text-white`}>{t('section-4.title')}</h1>
        <div className='w-full flex flex-row flex-wrap justify-evenly items-center text-white z-[10] text-md sm:text-xl text-center gap-10'>
          <ul className='flex flex-col gap-2'>
            <li>{t('section-4.list.item-1-text')}</li>
            <li>{t('section-4.list.item-2-text')}</li>
            <li>{t('section-4.list.item-3-text')}</li>
            <li>{t('section-4.list.item-4-text')}</li>
            <li>{t('section-4.list.item-5-text')}</li>
          </ul>
          <hr className='w-full h-1 sm:hidden' />
          <ul className='flex flex-col gap-2'>
            <li>{t('section-4.list.item-6-text')}</li>
            <li>{t('section-4.list.item-7-text')}</li>
            <li>{t('section-4.list.item-8-text')}</li>
            <li>{t('section-4.list.item-9-text')}</li>
          </ul>
        </div>
        <div className='w-[50%] min-w-[300px] flex justify-center items-center z-[10] rounded-xl'>
          <iframe
            className='w-full aspect-video self-center rounded-xl shadow-2xl drop-shadow-2xl'
            src={linkVideo}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </div>
      </section>
      <section
        id='our-campus-section'
        className={`flex flex-col h-[80vh] mb-[50px] gap-10`}
      >
        <h2 className={h2Classes}>{t('section-5.title')}</h2>
        <div className='carousel w-full'>
          {carouselMedia.map((media, index) => {
            const prevSlide =
              index === 0 ? carouselMedia.length - 1 : index - 1;
            const nextSlide =
              index === carouselMedia.length - 1 ? 0 : index + 1;

            return (
              <div
                key={index}
                id={`slide${index + 1}`}
                className='carousel-item relative w-full'
              >
                {/* Render image or video based on the type */}
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    className='w-full object-contain'
                    alt={`Slide ${index + 1}`}
                  />
                ) : (
                  <div className='w-full aspect-video'>
                    <iframe
                      src={`https://www.youtube.com/embed/${media.videoId}?autoplay=0&controls=1&mute=0`}
                      className='w-full h-full'
                      title={`YouTube Video ${index + 1}`}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a
                    href={`#slide${prevSlide + 1}`}
                    className='btn btn-circle'
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${nextSlide + 1}`}
                    className='btn btn-circle'
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default AdmissionsPage;
