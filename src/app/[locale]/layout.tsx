import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import '../globals.css';
import { FC, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { availableLocales } from '@/middleware';
import Link from 'next/link';
import Image from 'next/image';
import CircleIconButton from '@/components/CircleIconButton/CircleIconButton';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckToSlot,
  faComputer,
  faFileSignature,
  faSchoolFlag,
} from '@fortawesome/free-solid-svg-icons';
import {
  linkClassroom,
  linkExtracurriculares,
  linkFacebook,
  linkFuncionarios,
  linkInstagram,
  linkManualConvivencia,
  linkMatricula,
  linkSobreNosotros,
  linkCalendario,
  linkTwitter,
  linkYoutube,
} from '@/constants/links';

const comfortaa = Comfortaa({
  variable: '--font-comfortaa',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gimnasio los Pinos',
  description:
    'En el Gimnasio los Pinos llevamos a cabo un proceso de formación integral para que sus hijos puedan llegar a ser los mejores profesionales del país. Todo esto gracias a nuestro Bachillerato Internacional.',
  keywords: [
    'colegio',
    'primaria',
    'secundaria',
    'bachillerato',
    'bachillerato internacional',
    'educación',
    'colegios bogotá',
    'bogotá',
    'school',
    'colegios usaquén',
    'español',
    'inglés',
    'francés',
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
    url: 'https://gimnasiolospinos.edu.co',
    type: 'website',
    siteName: 'Gimnasio los Pinos',
    title: 'Gimnasio los Pinos',
    description:
      'En el Gimnasio los Pinos llevamos a cabo un proceso de formación integral para que sus hijos puedan llegar a ser los mejores profesionales del país. Todo esto gracias a nuestro Bachillerato Internacional.',
  },
};

interface Props {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout: FC<Props> = ({ children, params: { locale } }) => {
  const t = useTranslations('');

  if (!availableLocales.includes(locale)) notFound();

  const localeLanguages: Record<string, string> = {
    en: t('header.navbar.language-select.options.english'),
    es: t('header.navbar.language-select.options.spanish'),
    fr: t('header.navbar.language-select.options.french'),
  };
  const linkClasses = 'text-black hover:text-green';

  return (
    <html
      lang={locale}
      data-theme='light'
    >
      <body className={`${comfortaa.className} text-black pt-[156.533px]`}>
        <nav className='z-[50] fixed right-0 bottom-0 flex flex-col text-sm'>
          <Link
            href={linkClassroom}
            target='_blank'
            style={{ borderTopLeftRadius: 15 }}
            className='flex flex-col gap-2 justify-center items-center p-2 bg-dark-green-100/50 hover:bg-dark-green-100/100 transition-all font-bold hover:text-lg text-black hover:text-white'
          >
            <FontAwesomeIcon icon={faComputer} />
            <span className='hidden sm:block'>
              {t('floating-buttons.classroom-button-text')}
            </span>
          </Link>
          <Link
            href='/admissions'
            className='flex flex-col gap-2 justify-center items-center p-2 bg-light-green/50 hover:bg-light-green/100 transition-all font-bold hover:text-lg text-black hover:text-white'
          >
            <FontAwesomeIcon icon={faCheckToSlot} />
            <span className='hidden sm:block'>
              {t('floating-buttons.admissions-button-text')}
            </span>
          </Link>
          <Link
            href={linkMatricula}
            target='_blank'
            className='flex flex-col gap-2 justify-center items-center p-2 bg-dark-green-100/50 hover:bg-dark-green-100/100 transition-all font-bold hover:text-lg text-black hover:text-white'
          >
            <FontAwesomeIcon icon={faFileSignature} />
            <span className='hidden sm:block'>
              {t('floating-buttons.tuition-button-text')}
            </span>
          </Link>
          <Link
            href={linkCalendario}
            target='_blank'
            className='flex flex-col gap-2 justify-center items-center p-2 bg-light-green/50 hover:bg-light-green/100 transition-all font-bold hover:text-lg text-black hover:text-white'
          >
            <FontAwesomeIcon icon={faSchoolFlag} />
            <span className='hidden sm:block'>
              {t('floating-buttons.temporal-button-text')}
            </span>
          </Link>
        </nav>
        <header className='w-full fixed top-0 left-0 z-[100000] shadow-classic-sm border-dark-green-100'>
          <div className='drawer z-[100]'>
            <input
              id='my-drawer-3'
              type='checkbox'
              className='drawer-toggle'
            />
            <div className='drawer-content flex flex-col'>
              {/* Navbar */}
              <div className='w-full navbar p-0 flex flex-col'>
                <div className='w-full px-[5px] py-[5px] flex flex-row justify-end gap-2 bg-dark-green-100'>
                  <CircleIconButton
                    icon={faInstagram}
                    href={linkInstagram}
                    target='_blank'
                  />
                  <CircleIconButton
                    icon={faFacebookF}
                    href={linkFacebook}
                    target='_blank'
                  />
                  <CircleIconButton
                    icon={faXTwitter}
                    href={linkTwitter}
                    target='_blank'
                  />
                  <CircleIconButton
                    icon={faYoutube}
                    href={linkYoutube}
                    target='_blank'
                  />
                </div>
                <div className='w-full px-[25px] py-[10px] bg-white'>
                  <div className='flex-none lg:hidden'>
                    <label
                      htmlFor='my-drawer-3'
                      aria-label='open sidebar'
                      className='btn btn-square btn-ghost mr-4'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block w-6 h-6 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        ></path>
                      </svg>
                    </label>
                  </div>
                  <Link href='/'>
                    <Image
                      className='w-[200px]'
                      src='/classicLogo.png'
                      alt='Gimnasio los Pinos logo'
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </Link>
                  <div className='ml-auto hidden lg:block'>
                    <ul className='menu menu-horizontal p-0 items-center'>
                      {/* Navbar menu content here */}
                      <li>
                        <Link
                          href='/'
                          className={`${linkClasses}`}
                        >
                          {t('header.navbar.home-page-link-text')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/educational-project'
                          className={`${linkClasses}`}
                        >
                          {t(
                            'header.navbar.educational-project-page-link-text'
                          )}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/academy'
                          className={`${linkClasses}`}
                        >
                          {t('header.navbar.academy-page-link-text')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/services'
                          className={`${linkClasses}`}
                        >
                          {t('header.navbar.services-page-link-text')}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/international-baccalaureate'
                          className={`${linkClasses}`}
                        >
                          {t(
                            'header.navbar.international-baccalaureate-page-link-text'
                          )}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/admissions'
                          className={`${linkClasses}`}
                        >
                          {t('header.navbar.admissions-page-link-text')}
                        </Link>
                      </li>
                      {/* <div className='dropdown dropdown-end'>
                        <label
                          tabIndex={0}
                          className='btn m-1'
                        >
                          {localeLanguages[locale]}
                        </label>
                        <ul
                          tabIndex={0}
                          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
                        >
                          <li>
                            <Link href='/en'>
                              {t(
                                `header.navbar.language-select.options.english`
                              )}
                            </Link>
                          </li>
                          <li>
                            <Link href='/es'>
                              {t(
                                `header.navbar.language-select.options.spanish`
                              )}
                            </Link>
                          </li>
                          <li>
                            <Link href='/fr'>
                              {t(
                                `header.navbar.language-select.options.french`
                              )}
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Page content here */}
            </div>
            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-3'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <ul className='menu p-4 w-80 min-h-full bg-base-200'>
                {/* Sidebar content here */}
                <li>
                  <a
                    href='/'
                    className={`${linkClasses}`}
                  >
                    {t('header.navbar.home-page-link-text')}
                  </a>
                </li>
                <li>
                  <a
                    href='/educational-project'
                    className={`${linkClasses}`}
                  >
                    {t('header.navbar.educational-project-page-link-text')}
                  </a>
                </li>
                <li>
                  <a
                    href='/academy'
                    className={`${linkClasses}`}
                  >
                    {t('header.navbar.academy-page-link-text')}
                  </a>
                </li>
                <li>
                  <a
                    href='/services'
                    className={`${linkClasses}`}
                  >
                    {t('header.navbar.services-page-link-text')}
                  </a>
                </li>
                <li>
                  <a
                    href='/international-baccalaureate'
                    className={`${linkClasses}`}
                  >
                    {t(
                      'header.navbar.international-baccalaureate-page-link-text'
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href='/admissions'
                    className={`${linkClasses}`}
                  >
                    {t('header.navbar.admissions-page-link-text')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {children}
        <footer className='flex flex-col'>
          <section className='flex flex-row flex-wrap gap-4 sm:gap-10 justify-center items-center px-[20px] lg:px-[200px] py-[25px] bg-light-green'>
            <span className='text-2xl text-white text-center'>
              {t('footer.upper-section.title')}
            </span>
            <Link
              className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-light-green hover:border-white'
              href='/admissions'
            >
              {t('footer.upper-section.admissions-link-text')}
            </Link>
          </section>
          <section className='min-h-[300px] px-[20px] lg:px-[200px] py-[50px] flex flex-row flex-wrap justify-center sm:justify-between items-center bg-dark-green-100 gap-10 text-center'>
            <Image
              className='w-[300px]'
              src='/logoOnAquamarine.png'
              alt='Gimnasio los Pinos logo'
              width={400}
              height={400}
              quality={100}
            />
            <hr className='w-full h-1 sm:hidden' />
            <div className='flex flex-col flex-wrap gap-2 text-lg text-white'>
              <Link href={linkSobreNosotros}>
                {t('footer.mid-section.about-us-link-text')}
              </Link>
              <Link href={'/admissions#our-campus-section'}>
                {t('footer.mid-section.gallery-link-text')}
              </Link>
              <Link href={'/academy'}>
                {t('footer.mid-section.academy-directory-link-text')}
              </Link>
            </div>
            <hr className='w-full h-1 sm:hidden' />
            <div className='flex flex-col flex-wrap gap-2 text-lg text-white'>
              <Link
                href={linkExtracurriculares}
                target='_blank'
              >
                {t('footer.mid-section.extracurricular-link-text')}
              </Link>
              <Link
                href={linkClassroom}
                target='_blank'
              >
                {t('footer.mid-section.classroom-link-text')}
              </Link>
              <Link
                href={linkManualConvivencia}
                target='_blank'
              >
                {t('footer.mid-section.coexistence-link-text')}
              </Link>
              <Link
                href={linkFuncionarios}
                target='_blank'
              >
                {t('footer.mid-section.functionaries-link-text')}
              </Link>
            </div>
            <hr className='w-full h-1 sm:hidden' />
            <div className='flex flex-col flex-wrap gap-2 text-lg text-white'>
              <h3 className='text-xl font-bold'>
                {t('footer.mid-section.contact-us-section.title')}
              </h3>
              <span>
                {t.rich('footer.mid-section.contact-us-section.landline-text', {
                  notable: (text) => {
                    return <b>{text}</b>;
                  },
                })}
              </span>
              <span>
                {t.rich(
                  'footer.mid-section.contact-us-section.mobile-phone-text',
                  {
                    notable: (text) => {
                      return <b>{text}</b>;
                    },
                  }
                )}
              </span>
              <span>
                {t.rich('footer.mid-section.contact-us-section.address-text', {
                  notable: (text) => {
                    return <b>{text}</b>;
                  },
                })}
              </span>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
