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
  const h2Classes = 'text-5xl text-dark-green-100 text-center z-[10]';
  const h3Classes = 'text-2xl font-bold text-center';
  const pClasses = 'text-xl text-center z-[10]';
  const sectionClasses =
    'relative w-full px-[200px] flex flex-col justify-center items-center gap-10 min-h-[50vh] bg-cover bg-no-repeat';
  const section2btnClasses =
    'w-[175px] h-[175px] flex flex-col justify-evenly items-center bg-white hover:bg-light-green text-light-green hover:text-white text-[75px] rounded-xl border-4 border-light-green transition-all';
  return (
    <main className='flex flex-col gap-[50px]'>
      <section
        style={{
          alignItems: 'flex-start',
        }}
        className={`py-[50px] ${sectionClasses} items-start bg-[url("/internationalBaccalaureatePageSection1.jpg")] bg-center`}
      >
        <div className={`${colorfulLayerClasses}`} />
        <h2 className={`${h2Classes} text-start w-[50%] text-white`}>
          {t('section-1.title')}
        </h2>
        <p className={`${pClasses} text-start w-[50%] text-white`}>
          {t('section-1.description')}
        </p>
        <ul className='list-disc px-4 text-xl text-white z-[10]'>
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
        className={`min-h-[50vh] px-[200px] flex flex-row justify-evenly items-center`}
      >
        <Image
          className='w-[500px] rounded-lg'
          src={'/internationalBaccalaureatePageSection2.jpg'}
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
      <section className='px-[200px] flex flex-row justify-evenly items-center mb-[50px]'>
        <div className='flex flex-col gap-10 w-[600px]'>
          <h2 className={`${h2Classes}`}>{t('section-3.title')}</h2>
          <p className={`${pClasses}`}>{t('section-3.description')}</p>
        </div>
        <figure className='flex flex-col items-center gap-4'>
          <Image
            className='w-[500px]'
            src='/internationalBaccalaureatePageSection3.png'
            width={600}
            height={600}
            quality={100}
          />
          <figcaption>
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
