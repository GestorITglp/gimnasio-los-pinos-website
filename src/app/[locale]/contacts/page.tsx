import { FC } from 'react';
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import Modal from '@/components/Modal/Modal';
import PersonalTable from '@/components/PersonalTable/PersonalTable';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactos - GLP',
  description:
    'Encuentra la información de contacto del Gimnasio los Pinos. Aquí podrás contactar a docentes, personal administrativo y empleados del colegio. Estamos disponibles para resolver tus inquietudes y brindarte la información que necesites.',
  keywords: [
    'contacto colegio',
    'información de contacto',
    'contactar docentes',
    'personal administrativo colegio',
    'colegio bogotá',
    'colegio usaquén',
    'directorio de contactos',
    'contactos colegio',
    'comunicación con el colegio',
    'colegios en bogotá',
    'colegios en colombia',
    'contactos administrativos',
    'contactos profesores',
    'colegio bilingüe',
    'colegio trilingüe',
    'colegio IB',
    'colegio internacional',
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
    url: 'https://gimnasiolospinos.edu.co/contacts',
    type: 'website',
    siteName: 'Gimnasio los Pinos',
    title: 'Contactos - GLP',
    description:
      'Encuentra la información de contacto del Gimnasio los Pinos. Contacta a docentes, personal administrativo y empleados del colegio. Estamos aquí para ayudarte.',
  },
};

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
