import { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
interface Props {}

const AboutUsPage: FC<Props> = ({}) => {
  const t = useTranslations('about-us-page');

  const blackishLayerClasses =
    'absolute z-[0] left-0 top-0 w-full h-full bg-black opacity-25';
  const h2Classes =
    'font-bold text-2xl sm:text-5xl text-dark-green-100 text-center z-[10]';
  const pClasses = 'text-center';
  const sectionClasses =
    'px-[20px] lg:px-[200px] flex flex-col justify-center items-center';

  return (
    <main className='flex flex-col gap-[50px]'>
      <section
        id='section-1'
        className='relative w-full min-h-[50vh] px-[20px] lg:px-[200px] py-[50px] flex flex-row justify-center items-center bg-no-repeat bg-[url("/educationalProjectPageAccordion1.jpg")] bg-center sm:bg-[position:-200%_40%] bg-cover'
      >
        <div className={`${blackishLayerClasses} opacity-50`} />
        <h1 className='text-2xl sm:text-[50px] z-[10] font-bold text-white leading-none text-center sm:text-start'>
          {t('section-1.title')}
        </h1>
      </section>
      <section
        id='section-2'
        className={`w-full px-[20px] lg:px-[200px] flex sm:flex-row flex-col gap-10 justify-center items-center`}
      >
        <div className='sm:w-[45%] flex flex-col gap-10 min-w-[280px]'>
          <section
            id='mission-section'
            className={`flex flex-col gap-4 text-center`}
          >
            <h2 className={`${h2Classes}`}>
              {t('section-2.mission-section.title')}
            </h2>
            <p className={`${pClasses}`}>
              {t.rich('section-2.mission-section.description', {
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
            id='vision-section'
            className={`flex flex-col gap-4 text-center min-w-[280px]`}
          >
            <h2 className={`${h2Classes}`}>
              {t('section-2.vision-section.title')}
            </h2>
            <p className={`${pClasses}`}>
              {t('section-2.vision-section.description')}
            </p>
          </section>
        </div>
        <section
          id='quality-policy-section'
          className={`sm:w-[50%] flex flex-col gap-4 min-w-[280px]`}
        >
          <h2 className={`${h2Classes}`}>
            {t('section-2.quality-policy-section.title')}
          </h2>
          <p className={`${pClasses}`}>
            {t.rich('section-2.quality-policy-section.description', {
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
      </section>
      <section
        id='section-3'
        className='relative w-full min-h-[50vh] px-[20px] lg:px-[200px] py-[50px] flex flex-col gap-4 justify-center items-center bg-no-repeat bg-[url("/campus4.webp")] bg-center sm:bg-[position:-200%_40%] bg-cover'
      >
        <div className={`${blackishLayerClasses} opacity-50`} />
        <h2 className='text-2xl sm:text-[50px] z-[10] font-bold text-white leading-none text-center sm:text-start'>
          {t('section-3.title')}
        </h2>
        <p className={`${pClasses} text-white z-[100]`}>
          {t.rich('section-3.description', {
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
        id='section-4'
        className={`flex flex-row flex-wrap-reverse justify-center items-center px-[20px] sm:pt-[50px] pt-[10px] border-b-2 border-dark-green-100`}
      >
        <Image
          className={`w-[450px] 2xl:w-[600px] self-start`}
          src='/transparentSchoolGirl.png'
          alt='Niña de primaria'
          width={600}
          height={600}
        />
        <div className='md:w-[700px] sm:pb-[50px] pb-[10px] flex flex-col gap-4'>
          <h2 className={`${h2Classes}`}>{t('section-4.title')}</h2>
          <p className={`${pClasses}`}>{t('section-4.description')}</p>
          <ul className='px-[50px] list-disc flex flex-col gap-2'>
            <li>{t('section-4.list.item-1-text')}</li>
            <li>{t('section-4.list.item-2-text')}</li>
            <li>{t('section-4.list.item-3-text')}</li>
            <li>{t('section-4.list.item-4-text')}</li>
            <li>{t('section-4.list.item-5-text')}</li>
            <li>{t('section-4.list.item-6-text')}</li>
            <li>{t('section-4.list.item-7-text')}</li>
            <li>{t('section-4.list.item-8-text')}</li>
          </ul>
        </div>
      </section>
      <section
        id='section-5'
        className='relative w-full min-h-[50vh] px-[20px] lg:px-[200px] py-[50px] flex flex-col gap-4 justify-center items-center bg-no-repeat bg-[url("/pizarra.webp")] bg-center sm:bg-[position:-200%_40%] bg-cover'
      >
        <div className={`${blackishLayerClasses} opacity-50`} />
        <h2 className='text-2xl sm:text-[50px] z-[10] font-bold text-white leading-none text-center sm:text-start'>
          {t('section-5.title')}
        </h2>
        <p className={`${pClasses} text-white z-[100]`}>
          {t.rich('section-5.description', {
            br: (text) => {
              return (
                <>
                  <br />
                  <br />
                  {text}
                </>
              );
            },
            meaningful: (text) => <strong>{text}</strong>,
          })}
        </p>
      </section>
    </main>
  );
};

export default AboutUsPage;
