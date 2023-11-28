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
    </main>
  );
};

export default InternationalBaccalaureatePage;
