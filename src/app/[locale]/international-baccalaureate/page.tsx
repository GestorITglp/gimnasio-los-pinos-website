import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        className={`py-[50px] ${sectionClasses} items-start bg-[url("/internationalBaccalaureatePageSection1.jpg")] bg-center`}
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
      <section
        id='section-6'
        className='px-[20px] lg:px-[200px] py-[50px] flex flex-col gap-4 justify-center items-center'
      >
        <h2 className={`${h2Classes}`}>{t('section-6.title')}</h2>
        <p className={`${pClasses}`}>{t('section-6.description')}</p>
      </section>
      <section
        className={`min-h-[50vh] px-[20px] sm:px-[200px] flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center gap-10`}
      >
        <Image
          className='w-[500px] rounded-lg'
          src={'/jugando.jpg'}
          alt='Kids playing'
          width={600}
          height={600}
          quality={100}
        />
        <p className={`w-[600px] ${pClasses}`}>
          {t.rich('section-2.text', {
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
      <section className='px-[20px] sm:px-[200px] flex flex-row flex-wrap sm:flex-nowrap justify-evenly items-center mb-[50px] gap-10'>
        <div className='flex flex-col gap-10 w-[600px]'>
          <h2 className={`${h2Classes}`}>{t('section-3.title')}</h2>
          <p className={`${pClasses}`}>{t('section-3.description')}</p>
        </div>
        <figure className='flex flex-col items-center gap-4'>
          <Image
            className='w-[500px]'
            src='/internationalBaccalaureatePageSection3.png'
            alt='Section 3'
            width={600}
            height={600}
            quality={100}
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
      <section
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
        <Link
          href='https://www.ibo.org/es/'
          target='_blank'
          type='button'
          className={`${normalBtnClasses}`}
        >
          {t('section-4.button-text')}
        </Link>
      </section>
      <section
        id='section-5'
        className='relative w-full min-h-[50vh] px-[20px] lg:px-[200px] py-[50px] flex flex-col gap-4 justify-center items-center bg-no-repeat bg-[url("/modelo.jpg")] bg-center sm:bg-[position:-200%_40%] bg-cover'
      >
        <div className={`${blackishLayerClasses} opacity-25`} />
        <h2 className='text-2xl sm:text-[50px] z-[10] font-bold text-white leading-none text-center sm:text-start'>
          {t('section-3.title')}
        </h2>
        <p className={`${pClasses} text-white z-[100]`}>
          {t('section-3.description')}
        </p>
        <Link
          className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-white z-[1000]'
          target='_blank'
          href='https://raw.githubusercontent.com/Dacaramo/ramzeis-quotes/master/Imagen%20Programa%20Escuela%20Primaria%20%E2%80%93%20PEP.png?token=GHSAT0AAAAAACMZL7CG2XQMQ4MXCNGWOI2GZOU5ILQ'
        >
          {t('section-5.pep-button-text')}
        </Link>
        <Link
          className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-white z-[1000]'
          target='_blank'
          href='https://raw.githubusercontent.com/Dacaramo/ramzeis-quotes/master/Imagen%20Programa%20A%C3%B1os%20Intermedios%20%E2%80%93%20PAI.jpg?token=GHSAT0AAAAAACMZL7CGJP5FWEA6QWPLBR7QZOU5JZA'
        >
          {t('section-5.pai-button-text')}
        </Link>
        <Link
          className='w-full sm:w-fit p-4 btn btn-lg btn-square text-white bg-transparent border-2 border-white hover:bg-white hover:text-black hover:border-white z-[1000]'
          target='_blank'
          href='https://raw.githubusercontent.com/Dacaramo/ramzeis-quotes/master/Imagen%20Programa%20Diploma%20-%20PD.jpg?token=GHSAT0AAAAAACMZL7CGPL74SFJBZERRSY6AZOU5LBA'
        >
          {t('section-5.pd-button-text')}
        </Link>
      </section>
    </main>
  );
};

export default InternationalBaccalaureatePage;
