import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckToSlot,
  faComputer,
  faFileSignature,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import { linkClassroom, linkMatricula } from '@/constants/links';
import InfiniteLogoScroll from '@/components/InfiniteLogoScroll/InfiniteLogoScroll';
import BannerSlideshow from '@/components/BannerSlideshow/BannerSlideshow';
import NewsCarousel from '@/components/NewsCarousel/NewsCarousel';

interface Props {
  params: {
    locale: string;
  };
}

const HomePage: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('home-page');

  const h2Classes =
    'font-bold text-2xl sm:text-5xl text-dark-green-100 text-center z-[10]';
  const h3Classes = 'text-lg sm:text-2xl font-bold';
  const normalBtnClasses =
    'w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-dark-green-100 hover:bg-dark-green-200 border-0';
  const section2btnClasses =
    'p-2 w-[175px] h-[175px] flex flex-col justify-evenly items-center bg-white hover:bg-light-green text-light-green hover:text-white text-[75px] rounded-xl border-4 border-light-green transition-all';
  const blackishLayerClasses =
    'absolute z-[0] left-0 top-0 w-full h-full bg-black opacity-25';
  const section6miniSectionsClasses =
    'flex flex-col gap-2 items-start rounded-lg ';
  return (
    <main className='flex flex-col gap-[50px]'>
      <div className='relative'>
        <div className='w-full h-full absolute flex justify-center items-center'>
          <h1 className='absolute text-2xl sm:text-[50px] z-[10] font-light text-white leading-none text-center sm:text-start'>
            {t.rich('section-1.title', {
              big: (text) => {
                return (
                  <>
                    <br />
                    <span className={`text-[50px] sm:text-[100px]`}>
                      {text}
                    </span>
                  </>
                );
              },
              colordiff: (text) => {
                return (
                  <>
                    <br />
                    <span className={`text-light-green font-black`}>
                      {text}
                    </span>
                  </>
                );
              },
            })}
          </h1>
        </div>
        <BannerSlideshow
          banners={[
            '/admissionsPageSection4.jpg',
            '/campus1.png',
            '/campus2.webp',
            '/campus3.webp',
            '/campus4.webp',
            '/carrousel4.jpg',
          ]}
        />
      </div>
      <section className='w-full px-[20px] lg:px-[200px] flex flex-col items-center gap-10'>
        <h2 className={`${h2Classes}`}>{t('section-2.title')}</h2>
        <p className='text-md sm:text-xl text-center'>
          {t('section-2.description')}
        </p>
        <nav className='w-full flex flex-row flex-wrap justify-center items-center gap-10 self-center'>
          <Link
            href={linkClassroom}
            target='_blank'
            className='flex flex-col justify-center items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faComputer} />
              <span className='w-full text-center text-sm font-bold'>
                {t('section-2.navbar.classroom-link-text').toUpperCase()}
              </span>
            </div>
          </Link>
          <Link
            href='/admissions'
            target='_blank'
            className='flex flex-col justify-center items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faCheckToSlot} />
              <span className='w-full text-center text-sm font-bold'>
                {t('section-2.navbar.admissions-link-text').toUpperCase()}
              </span>
            </div>
          </Link>
          <Link
            href={linkMatricula}
            target='_blank'
            className='flex flex-col justify-center items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faFileSignature} />
              <span className='w-full text-center text-sm font-bold'>
                {t('section-2.navbar.tuition-link-text').toUpperCase()}
              </span>
            </div>
          </Link>
          <Link
            href='#strategic-partners-section'
            target='_blank'
            className='flex flex-col justify-center items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faHandshake} />
              <span className='w-full text-center text-sm font-bold'>
                {t('section-2.navbar.strategic-allies-link-text').toUpperCase()}
              </span>
            </div>
          </Link>
        </nav>
      </section>
      <div className='flex flex-col item'>
        <section className='px-[20px] lg:px-[200px] flex flex-row flex-wrap-reverse sm:flex-nowrap justify-between items-center gap-10'>
          <Image
            className='w-[500px]'
            src='/transparentStudents.png'
            alt='Students'
            width={900}
            height={900}
            quality={100}
          />
          <div className='w-[1000px] flex flex-col items-center sm:items-start gap-10'>
            <h2 className={`${h2Classes} text-center sm:text-start`}>
              {t('section-3.title')}
            </h2>
            <p className='text-md sm:text-xl text-center sm:text-start'>
              {t('section-3.description')}
            </p>
            <Link
              href='/educational-project'
              className={`${normalBtnClasses}`}
            >
              {t('section-3.see-more-link-text')}
            </Link>
          </div>
        </section>
        <section className='relative w-full min-h-[70vh] px-[20px] lg:px-[200px] py-[50px] flex flex-col justify-center items-center gap-10 bg-[url("/futbol.jpg")] bg-no-repeat bg-cover bg-center sm:bg-[position:-200%_27%]'>
          <div className={`${blackishLayerClasses} opacity-50`} />
          <h2 className={`${h2Classes} text-white`}>{t('section-4.title')}</h2>
          <p className='text-md sm:text-xl z-[10] text-center text-white'>
            {t('section-4.description')}
          </p>
          <nav className='w-full z-[10] flex flex-row flex-wrap justify-center gap-10 items-center'>
            <Link
              href='/'
              type='button'
              className={`${normalBtnClasses}`}
            >
              {t('section-4.navbar.extracurricular-activities-link-text')}
            </Link>
            <Link
              href='/admissions#our-campus-section'
              className={`${normalBtnClasses}`}
            >
              {t('section-4.navbar.our-campus-link-text')}
            </Link>
          </nav>
        </section>
      </div>
      <section
        id='strategic-partners-section'
        className='w-[100vw] px-[20px] lg:px-[200px] flex flex-col gap-10 items-center'
      >
        <h2 className={`${h2Classes}`}>{t('section-5.title')}</h2>
        <InfiniteLogoScroll
          logos={[
            '/bk2Logo.png',
            '/studyNowLogo.png',
            '/clubDeportivoEquidadLogo.webp',
            '/logoGuerrerosTransparente.png',
            '/aacbiLogo.png',
            '/isoLogo.png',
            '/asocoldepLogo.png',
            '/caracolitosLogo.png',
            '/classroomLogo.png',
            '/continuoIbLogo.jpeg',
            '/ibLogo.jpg',
            '/miltonOchoaLogo.png',
            '/richmondLogo.png',
          ]}
        />
      </section>
      <section
        id='news-section'
        className='flex flex-col gap-10'
      >
        <h2 className={`${h2Classes}`}>{t('news-section.title')}</h2>
        <NewsCarousel />
      </section>
      <section className='relative min-h-[50vh] px-[20px] lg:px-[200px] py-[50px] flex flex-row flex-wrap justify-between items-center bg-[url("/homePageSection6.png")] bg-cover bg-center gap-4 sm:gap-10'>
        <div className={`${blackishLayerClasses} opacity-75`} />
        <div className='z-[10] flex flex-col items-start gap-4 sm:gap-10 text-white'>
          <h2 className={`${h2Classes} text-white`}>{t('section-6.title')}</h2>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.contact-info-section.title')}
            </h3>
            <span className='text-md sm:text-xl text-start '>
              {t.rich('section-6.contact-info-section.landline-text', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
            <span className='text-md sm:text-xl text-start '>
              {t.rich('section-6.contact-info-section.mobile-phone-text', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
            <span className='text-md sm:text-xl text-start '>
              {t.rich('section-6.contact-info-section.address-text', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
          </section>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.attention-schedule-section.title')}
            </h3>
            <span className='text-md sm:text-xl text-start'>
              {t('section-6.attention-schedule-section.description')}
            </span>
          </section>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.academic-secretariat-section.title')}
            </h3>
            <span className='text-md sm:text-xl text-start break-all'>
              {t.rich('section-6.academic-secretariat-section.description', {
                notable: (text) => {
                  return (
                    <b>
                      <i>{text}</i>
                    </b>
                  );
                },
              })}
            </span>
          </section>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.billing-section.title')}
            </h3>
            <span className='text-md sm:text-xl text-start break-all'>
              {t.rich('section-6.billing-section.description', {
                notable: (text) => {
                  return (
                    <b>
                      <i>{text}</i>
                    </b>
                  );
                },
              })}
            </span>
          </section>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.human-talent-section.title')}
            </h3>
            <span className='text-md sm:text-xl text-start break-all'>
              {t.rich('section-6.human-talent-section.description', {
                notable: (text) => {
                  return (
                    <b>
                      <i>{text}</i>
                    </b>
                  );
                },
              })}
            </span>
          </section>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLScxmTpw1npApL7JLBrHmVdvAjPIUI5sj4AVM80YP3p0O95acw/viewform'
            target='_blank'
            className={`${normalBtnClasses} self-start`}
          >
            {t('section-6.work-with-us-button-text')}
          </Link>
        </div>
        <iframe
          className='z-[10] rounded-lg flex-1 w-[200px] sm:w-auto'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1671.7004300943743!2d-74.03481348081753!3d4.770713316667567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85f5d5bc22e9%3A0x2d8ebdcec6db58d9!2sGimnasio%20Los%20Pinos!5e0!3m2!1ses-419!2sco!4v1700614994799!5m2!1ses-419!2sco'
          width='600'
          height='450'
          loading='lazy'
        ></iframe>
      </section>
    </main>
  );
};

export default HomePage;
