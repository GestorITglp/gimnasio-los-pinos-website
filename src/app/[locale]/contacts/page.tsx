import { FC } from 'react';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Modal from '@/components/Modal/Modal';
import PersonalTable from '@/components/PersonalTable/PersonalTable';

interface Props {
  params: {
    locale: string;
  };
}

const AcademyPage: FC<Props> = ({ params: { locale } }) => {
  const t = useTranslations('contacts-page');
  const allMessages = useMessages();
  const academyPageMessages = allMessages[
    'contacts-page'
  ] as AbstractIntlMessages;

  const h2Classes =
    'text-2xl sm:text-5xl font-bold text-dark-green-100 text-center z-[10]';
  const jobBadgeClasses =
    'badge badge-ghost badge-sm h-auto px-[10px] py-[5px] text-center';
  return (
    <main className='flex flex-col gap-[50px]'>
      <section
        className={`relative w-full px-[20px] lg:px-[200px] flex flex-col justify-center gap-10 min-h-[50vh] bg-cover bg-no-repeat bg-center bg-[url("/DIRECTORIO%20ACADEMICO.JPG")] sm:bg-[position:-200%_20%]`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-50 bg-black`}
        />
        <h2 className={`${h2Classes} text-white`}>{t('title')}</h2>
      </section>
      <NextIntlClientProvider messages={academyPageMessages}>
        <PersonalTable />
      </NextIntlClientProvider>
    </main>
  );
};

export default AcademyPage;
