import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons/faDesktop';
import Slider from 'react-slick';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faFileText } from '@fortawesome/free-regular-svg-icons/faFileText';
import { faDesktopAlt } from '@fortawesome/free-solid-svg-icons/faDesktopAlt';

interface Props {
  params: {
    locale: string;
  };
}

const HomePage: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('home-page');

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imgWidth = 250;
  const imgHeight = 250;

  const h2Classes = 'text-5xl text-dark-green-100 text-center z-[10]';
  const h3Classes = 'text-2xl font-bold';
  const normalBtnClasses =
    'w-fit p-4 btn btn-lg btn-square text-white bg-dark-green-100 hover:bg-dark-green-200 border-0';
  const section1btnClasses =
    'w-[100px] h-[100px] text-[50px] text-white flex gap-2 justify-center items-center bg-light-green/25 rounded-lg border-light-green hover:bg-light-green/75 transition-all';
  const section2btnClasses =
    'w-[175px] h-[175px] flex justify-center items-center bg-white hover:bg-light-green text-light-green hover:text-white text-[75px] rounded-xl border-4 border-light-green transition-all';
  const blackishLayerClasses =
    'absolute z-[0] left-0 top-0 w-full h-full bg-black opacity-25';
  const section6miniSectionsClasses =
    'flex flex-col gap-2 items-start rounded-lg p-2';
  return (
    <main className='flex flex-col gap-[50px]'>
      <section className='relative w-full min-h-[30vh] px-[200px] py-[50px] flex flex-row justify-between items-center bg-no-repeat bg-[url("/homePageSection1.jpg")] bg-center bg-cover'>
        <div className={`${blackishLayerClasses} opacity-50`} />
        <h1 className='text-[50px] z-[10] font-light text-white leading-none'>
          {t.rich('section-1.title', {
            big: (text) => {
              return (
                <>
                  <br />
                  <span className={`text-[100px]`}>{text}</span>
                </>
              );
            },
            colordiff: (text) => {
              return (
                <>
                  <br />
                  <span className={`text-light-green font-black`}>{text}</span>
                </>
              );
            },
          })}
        </h1>
        {/* <nav className='relative h-[175px] z-[10] flex flex-row justify-center items-center gap-10'>
          <Link
            href='/'
            target='_blank'
            className={`${section1btnClasses}`}
          >
            <FontAwesomeIcon icon={faLock} />
          </Link>
          <Link
            href='/'
            target='_blank'
            className={`${section1btnClasses}`}
          >
            <FontAwesomeIcon icon={faFileText} />
          </Link>
          <Link
            href='/'
            target='_blank'
            className={`${section1btnClasses}`}
          >
            <FontAwesomeIcon icon={faDesktopAlt} />
          </Link>
        </nav> */}
      </section>
      <section className='w-full px-[200px] flex flex-col items-center gap-10'>
        <h2 className={`${h2Classes}`}>{t('section-2.title')}</h2>
        <p className='text-xl text-center'>{t('section-2.description')}</p>
        <nav className='w-full flex flex-row justify-evenly items-center'>
          <Link
            href='/'
            className='flex flex-col items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faLaptop} />
            </div>
            <span className='w-full text-center text-xl font-bold'>
              {t('section-2.navbar.platforms-link-text')}
            </span>
          </Link>
          <Link
            href='/'
            className='flex flex-col items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <span className='w-full text-center text-xl font-bold'>
              {t('section-2.navbar.strategic-allies-link-text')}
            </span>
          </Link>
          <Link
            href='/'
            className='flex flex-col items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <span className='w-full text-center text-xl font-bold'>
              {t('section-2.navbar.school-newspaper-link-text')}
            </span>
          </Link>
          <Link
            href='/'
            className='flex flex-col items-center gap-2'
          >
            <div className={`${section2btnClasses}`}>
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <span className='w-full text-center text-xl font-bold'>
              {t('section-2.navbar.classroom-link-text')}
            </span>
          </Link>
        </nav>
      </section>
      <div className='flex flex-col item'>
        <section className='px-[200px] flex flex-row justify-between items-center'>
          <Image
            className='w-[500px]'
            src='/transparentStudents.png'
            width={900}
            height={900}
            quality={100}
          />
          <div className='w-[1000px] flex flex-col items-start gap-10'>
            <h2 className={`${h2Classes} text-start`}>
              {t('section-3.title')}
            </h2>
            <p className='text-xl text-start'>{t('section-3.description')}</p>
            <button
              type='button'
              className={`${normalBtnClasses}`}
            >
              {t('section-3.see-more-link-text')}
            </button>
          </div>
        </section>
        <section className='relative w-full min-h-[50vh] px-[200px] py-[50px] flex flex-col justify-center items-center gap-10 bg-[url("/homePageSection4.jpg")] bg-cover bg-top'>
          <div className={`${blackishLayerClasses} bg-white opacity-50`} />
          <h2 className={`${h2Classes}`}>{t('section-4.title')}</h2>
          <p className='text-xl z-[10] text-center'>
            {t('section-4.description')}
          </p>
          <nav className='w-full z-[10] flex flex-row justify-center gap-10 items-center'>
            <button
              type='button'
              className={`${normalBtnClasses}`}
            >
              {t('section-4.navbar.extracurricular-activities-link-text')}
            </button>
            <button
              type='button'
              className={`${normalBtnClasses}`}
            >
              {t('section-4.navbar.our-campus-link-text')}
            </button>
          </nav>
        </section>
      </div>
      <section className='w-full px-[200px] flex flex-col gap-10 items-center'>
        <h2 className={`${h2Classes}`}>{t('section-5.title')}</h2>
        <ImageSlider
          images={[
            '/myOnLogo.png',
            '/bk2Logo.png',
            '/studyNowLogo.png',
            '/clubDeportivoEquidadLogo.webp',
            '/guerrerosLogo.png',
          ]}
        />
      </section>
      <section className='relative min-h-[50vh] px-[200px] py-[50px] flex flex-row justify-between items-center bg-[url("/homePageSection6.png")] bg-cover bg-center'>
        <div className={`${blackishLayerClasses} bg-white opacity-50`} />
        <div className='z-[10] flex flex-col items-start gap-4'>
          <h2 className={`${h2Classes}`}>{t('section-6.title')}</h2>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.contact-info-section.title')}
            </h3>
            <span className='text-xl text-center'>
              {t.rich('section-6.contact-info-section.landline-text', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
            <span className='text-xl text-center'>
              {t.rich('section-6.contact-info-section.mobile-phone-text', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
            <span className='text-xl text-center'>
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
            <span className='text-xl text-center'>
              {t('section-6.attention-schedule-section.description')}
            </span>
          </section>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.academic-secretariat-section.title')}
            </h3>
            <span className='text-xl text-center'>
              {t.rich('section-6.academic-secretariat-section.description', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
          </section>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.billing-section.title')}
            </h3>
            <span className='text-xl text-center'>
              {t.rich('section-6.billing-section.description', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
          </section>
          <section className={`${section6miniSectionsClasses}`}>
            <h3 className={`${h3Classes}`}>
              {t('section-6.human-talent-section.title')}
            </h3>
            <span className='text-xl text-center'>
              {t.rich('section-6.human-talent-section.description', {
                notable: (text) => {
                  return <b>{text}</b>;
                },
              })}
            </span>
          </section>
          <button
            type='button'
            className={`${normalBtnClasses}`}
          >
            {t('section-6.work-with-us-button-text')}
          </button>
        </div>
        <iframe
          className='z-[10] rounded-lg'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1671.7004300943743!2d-74.03481348081753!3d4.770713316667567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85f5d5bc22e9%3A0x2d8ebdcec6db58d9!2sGimnasio%20Los%20Pinos!5e0!3m2!1ses-419!2sco!4v1700614994799!5m2!1ses-419!2sco'
          width='600'
          height='450'
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </section>
    </main>
  );
};

export default HomePage;
