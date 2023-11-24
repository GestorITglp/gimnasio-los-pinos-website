import Collapse from '@/components/Collapse/Collapse';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import {
  faFlask,
  faPaintBrush,
  faPerson,
  faSoccerBall,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  params: {
    locale: string;
  };
}

const EducationalProjectPage: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('educational-project-page');

  const iconSize = 50;
  const h2Classes =
    'font-bold text-2xl sm:text-5xl text-dark-green-100 text-center z-[10]';
  const h3Classes = 'text-lg sm:text-2xl font-bold text-center';
  const normalBtnClasses =
    'w-fit p-4 btn btn-lg btn-square text-white bg-dark-green-100 hover:bg-dark-green-200 border-0';
  const section1btnClasses =
    'w-[100px] h-[100px] text-[50px] text-white flex gap-2 justify-center items-center bg-light-green/25 rounded-lg border-light-green hover:bg-light-green/75 transition-all';
  const section2btnClasses =
    'w-[175px] h-[175px] flex justify-center items-center bg-white hover:bg-light-green text-light-green hover:text-white text-[75px] rounded-xl border-4 border-light-green transition-all';
  const whitishLayerClasses =
    'absolute z-[0] left-0 top-0 w-full h-full bg-black opacity-50';
  const pClasses = 'text-md sm:text-xl text-center text-black text-truncate';
  const section2iconContainersClasses =
    'flex flex-col items-center gap-2 z-[10] text-light-green';
  const accordionItemClasses =
    'relative h-[0px] sm:h-auto sm:w-[0px] p-4 flex flex-col justify-evenly items-center gap-2 grow bg-cover bg-center transition-all sm:hover:h-auto hover:h-[500px] sm:hover:w-[500px] opacity-25 hover:opacity-100';
  const greenishLayerClasses =
    'absolute top-0 left-0 w-full h-full bg-dark-green-100/75 hover:bg-dark-green-100/50 transition-all';
  return (
    <main className='flex flex-col gap-[50px]'>
      <section className='px-[20px] lg:px-[400px] py-[50px] flex flex-row justify-center items-center flex-wrap gap-4 sm:gap-10'>
        <h1 className={`sm:w-[300px] ${h2Classes}`}>{t('section-1.title')}</h1>
        <Image
          className='w-[500px]'
          src='/educationalProjectPageSection1.png'
          width={500}
          height={500}
          quality={100}
        />
        <div className='w-[300px] flex flex-col gap-4 sm:gap-10'>
          <Collapse headerText={t('section-1.constructivism-collapse.title')}>
            {t('section-1.constructivism-collapse.description')}
          </Collapse>
          <Collapse
            headerText={t('section-1.multiple-intelligences-collapse.title')}
          >
            <p>{t('section-1.multiple-intelligences-collapse.description')}</p>
          </Collapse>
          <Collapse
            headerText={t(
              'section-1.teaching-for-understanding-collapse.title'
            )}
          >
            {t('section-1.teaching-for-understanding-collapse.description')}
          </Collapse>
        </div>
        <div className='w-[300px] flex flex-col gap-4 sm:gap-10'>
          <Collapse headerText={t('section-1.bilingualism-collapse.title')}>
            <ul className='list-disc p-4'>
              <li>{t('section-1.bilingualism-collapse.list.item-1-text')}</li>
              <li>{t('section-1.bilingualism-collapse.list.item-2-text')}</li>
              <li>{t('section-1.bilingualism-collapse.list.item-3-text')}</li>
              <li>{t('section-1.bilingualism-collapse.list.item-4-text')}</li>
              <li>{t('section-1.bilingualism-collapse.list.item-5-text')}</li>
              <li>{t('section-1.bilingualism-collapse.list.item-6-text')}</li>
            </ul>
          </Collapse>
          <Collapse
            headerText={t(
              'section-1.international-baccalaureate-collapse.title'
            )}
          >
            {
              t.rich(
                'section-1.international-baccalaureate-collapse.description',
                {
                  meaningful: (text) => {
                    return <strong>{text}</strong>;
                  },
                }
              ) as string
            }
          </Collapse>
          <Collapse
            headerText={t('section-1.achievement-program-collapse.title')}
          >
            <ul className='list-disc p-4'>
              <li>
                {
                  t.rich(
                    'section-1.achievement-program-collapse.list.item-1-text',
                    {
                      meaningful: (text) => {
                        return <strong>{text}</strong>;
                      },
                    }
                  ) as string
                }
              </li>
              <li>
                {
                  t.rich(
                    'section-1.achievement-program-collapse.list.item-2-text',
                    {
                      meaningful: (text) => {
                        return <strong>{text}</strong>;
                      },
                    }
                  ) as string
                }
              </li>
            </ul>
          </Collapse>
        </div>
      </section>
      <section className='relative px-[20px] py-[50px] lg:px-[200px] min-h-[50vh] flex flex-col gap-10 justify-center items-center bg-[url("/talentos.jpg")] bg-cover bg-center'>
        <div className={`${whitishLayerClasses} bg-black`} />
        <h2 className={`${h2Classes} text-white`}>{t('section-2.title')}</h2>
        <p className={`${pClasses} text-white z-[10]`}>
          {t('section-2.description')}
        </p>
        <div className='w-full flex flex-row flex-wrap sm:flex-nowrap gap-10 justify-evenly items-center'>
          <div className={`${section2iconContainersClasses}`}>
            <FontAwesomeIcon
              icon={faSoccerBall}
              fontSize={iconSize}
            />
            <h3 className={`${h3Classes}`}>
              {t('section-2.sport-emphasis-section.title')}
            </h3>
            <p className={`${pClasses} text-white`}>
              {t('section-2.sport-emphasis-section.description')}
            </p>
          </div>
          <div className={`${section2iconContainersClasses}`}>
            <FontAwesomeIcon
              icon={faPaintBrush}
              fontSize={iconSize}
            />
            <h3 className={`${h3Classes}`}>
              {t('section-2.art-emphasis-section.title')}
            </h3>
            <p className={`${pClasses} text-white`}>
              {t('section-2.art-emphasis-section.description')}
            </p>
          </div>
          <div className={`${section2iconContainersClasses}`}>
            <FontAwesomeIcon
              icon={faPerson}
              fontSize={iconSize}
            />
            <h3 className={`${h3Classes}`}>
              {t('section-2.humanities-emphasis-section.title')}
            </h3>
            <p className={`${pClasses} text-white`}>
              {t('section-2.humanities-emphasis-section.description')}
            </p>
          </div>
          <div className={`${section2iconContainersClasses}`}>
            <FontAwesomeIcon
              icon={faFlask}
              fontSize={iconSize}
            />
            <h3 className={`${h3Classes}`}>
              {t('section-2.applied-science-section.title')}
            </h3>
            <p className={`${pClasses} text-white`}>
              {t('section-2.applied-science-section.description')}
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center gap-10 mb-[50px]'>
        <h2 className={`${h2Classes}`}>{t('section-3.title')}</h2>
        <div className='w-full h-[750px] sm:h-[430px] flex flex-col sm:flex-row gap-4'>
          <div className={`${accordionItemClasses} bg-[url("/extra.jpg")]`}>
            <div
              className={`${greenishLayerClasses} flex flex-col justify-evenly items-center overflow-clip`}
            >
              <h3 className={`${h3Classes} text-white`}>
                {t(
                  'section-3.activities-accordion.extracurricular-activities-section.title'
                )}
              </h3>
              <p className={`${pClasses} text-white px-4 sm:px-0 sm:w-[500px]`}>
                {' '}
                {t(
                  'section-3.activities-accordion.extracurricular-activities-section.description'
                )}
              </p>
              <Link
                className={`btn btn-lg bg-transparent text-white hover:bg-white hover:text-dark-green-100 border-2 border-white hover:border-white`}
                href='/'
              >
                {t(
                  'section-3.activities-accordion.extracurricular-activities-section.show-more-link-text'
                )}
              </Link>
            </div>
          </div>
          <div className={`${accordionItemClasses} bg-[url("/modelo.jpg")]`}>
            <div
              className={`${greenishLayerClasses} flex flex-col justify-evenly items-center overflow-clip`}
            >
              <h3 className={`${h3Classes} text-white`}>
                {t('section-3.activities-accordion.glpmun-section.title')}
              </h3>
            </div>
          </div>
          <div className={`${accordionItemClasses} bg-[url("/talentos.jpg")]`}>
            <div
              className={`${greenishLayerClasses} flex flex-col justify-evenly items-center overflow-clip`}
            >
              <h3 className={`${h3Classes} text-white`}>
                {t(
                  'section-3.activities-accordion.symphonic-choral-encounter.title'
                )}
              </h3>
              <p className={`${pClasses} text-white px-4 sm:px-0 sm:w-[500px]`}>
                {' '}
                {t(
                  'section-3.activities-accordion.symphonic-choral-encounter.description'
                )}
              </p>
            </div>
          </div>
          <div className={`${accordionItemClasses} bg-[url("/navidad.jpg")]`}>
            <div
              className={`${greenishLayerClasses} flex flex-col justify-evenly items-center overflow-clip`}
            >
              <h3 className={`${h3Classes} text-white`}>
                {t('section-3.activities-accordion.christmas-show.title')}
              </h3>
              <p className={`${pClasses} text-white px-4 sm:px-0 sm:w-[500px]`}>
                {' '}
                {t('section-3.activities-accordion.christmas-show.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='flex flex-col items-center gap-10 mb-[50px]'>
        <h2 className={`${h2Classes}`}>{t('section-4.title')}</h2>
        <Link
          href='/'
          className='flex flex-col items-center gap-2'
        >
          <div className={`${section2btnClasses}`}>
            <FontAwesomeIcon icon={faFile} />
          </div>
          <span className='w-full text-center text-xl font-bold'>
            {t('section-4.see-more-link-text')}
          </span>
        </Link>
      </section> */}
    </main>
  );
};

export default EducationalProjectPage;
