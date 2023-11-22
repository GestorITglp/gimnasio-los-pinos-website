import { FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Modal from '@/components/Modal/Modal';

interface Props {
  params: {
    locale: string;
  };
}

const page: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('academy-page');

  const iconSize = 50;
  const h2Classes = 'text-5xl text-dark-green-100 text-center z-[10]';
  const h3Classes = 'text-2xl font-bold text-center';
  const normalBtnClasses =
    'w-fit p-4 btn btn-lg btn-square text-white bg-dark-green-100 hover:bg-dark-green-200 border-0';
  const section1btnClasses =
    'w-[100px] h-[100px] text-[50px] text-white flex gap-2 justify-center items-center bg-light-green/25 rounded-lg border-light-green hover:bg-light-green/75 transition-all';
  const section2btnClasses =
    'w-[175px] h-[175px] flex justify-center items-center bg-white hover:bg-light-green text-light-green hover:text-white text-[75px] rounded-xl border-4 border-light-green transition-all';
  const whitishLayerClasses =
    'absolute z-[0] left-0 top-0 w-full h-full bg-black opacity-75';
  const pClasses = 'text-xl text-center text-black text-truncate';
  const section2iconContainersClasses =
    'flex flex-col items-center gap-2 z-[10] text-dark-green-100';
  const accordionItemClasses =
    'relative w-[0px] p-4 flex flex-col justify-evenly items-center gap-2 grow bg-cover bg-center transition-all hover:w-[500px] opacity-25 hover:opacity-100 border-4 border-white';
  const greenishLayerClasses =
    'absolute top-0 left-0 w-full h-full bg-dark-green-100/75 hover:bg-dark-green-100/50 transition-all';

  return (
    <main className='flex flex-col gap-[50px]'>
      <section className='px-[400px] flex flex-row justify-center items-center flex-wrap gap-10'>
        <h1 className={`w-[300px] ${h2Classes}`}>{t('title')}</h1>
        <Image
          className='w-[500px]'
          src='/academyPageSection1.png'
          width={500}
          height={500}
          quality={100}
        />
      </section>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>{t('table.head-row.name-col-text')}</th>
              <th>{t('table.head-row.job-col-text')}</th>
              <th>{t('table.head-row.details-col-text')}</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-1.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-1.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-1.name-col-text')}
                  subtitle={t('table.row-1.job-col-text')}
                  description={
                    t.rich('table.row-1.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-2.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-2.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-2.name-col-text')}
                  subtitle={t('table.row-2.job-col-text')}
                  description={
                    t.rich('table.row-2.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-3.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-3.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-3.name-col-text')}
                  subtitle={t('table.row-3.job-col-text')}
                  description={
                    t.rich('table.row-3.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-4.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-4.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-4.name-col-text')}
                  subtitle={t('table.row-4.job-col-text')}
                  description={
                    t.rich('table.row-4.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 5 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-5.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-5.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-5.name-col-text')}
                  subtitle={t('table.row-5.job-col-text')}
                  description={
                    t.rich('table.row-5.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 6 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-6.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-6.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-6.name-col-text')}
                  subtitle={t('table.row-6.job-col-text')}
                  description={
                    t.rich('table.row-6.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 7 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-7.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-7.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-7.name-col-text')}
                  subtitle={t('table.row-7.job-col-text')}
                  description={
                    t.rich('table.row-7.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 8 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-8.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-8.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-8.name-col-text')}
                  subtitle={t('table.row-8.job-col-text')}
                  description={
                    t.rich('table.row-8.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 9 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-9.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-9.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-9.name-col-text')}
                  subtitle={t('table.row-9.job-col-text')}
                  description={
                    t.rich('table.row-9.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 10 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-10.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-10.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-10.name-col-text')}
                  subtitle={t('table.row-10.job-col-text')}
                  description={
                    t.rich('table.row-10.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 11 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-11.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-11.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-1.name-col-text')}
                  subtitle={t('table.row-1.job-col-text')}
                  description={
                    t.rich('table.row-1.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 12 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-12.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-12.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-12.name-col-text')}
                  subtitle={t('table.row-12.job-col-text')}
                  description={
                    t.rich('table.row-12.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
            {/* row 13 */}
            <tr>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src='/academyPageTableUser.webp'
                        alt='CP'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>
                      {t('table.row-13.name-col-text')}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>
                  {t('table.row-13.job-col-text')}
                </span>
              </td>
              <th>
                <Modal
                  image='/academyPageTableUser.webp'
                  title={t('table.row-13.name-col-text')}
                  subtitle={t('table.row-13.job-col-text')}
                  description={
                    t.rich('table.row-13.details-col-text', {
                      br: (text) => {
                        return (
                          <>
                            <br />
                            <br />
                            {text}
                          </>
                        );
                      },
                    }) as string
                  }
                  openBtnText={t('open-modal-btn-text')}
                  closeBtnText={t('close-modal-btn-text')}
                />
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>{t('table.head-row.name-col-text')}</th>
              <th>{t('table.head-row.job-col-text')}</th>
              <th>{t('table.head-row.details-col-text')}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
};

export default page;
