'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Personal } from '@/model/Personal';
import { useTranslations } from 'next-intl';
import Modal from '../Modal/Modal';
import Link from 'next/link';

const PersonalTable = () => {
  const [data, setData] = useState<Personal[]>([]);

  const t = useTranslations();

  const jobBadgeClasses =
    'badge badge-ghost badge-sm h-auto px-[10px] py-[5px] text-center';

  const typesWithRepetition = data.map(({ type }) => type);
  const typesWithoutRepetition = [...new Set(typesWithRepetition)];

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch('/personalPinos.csv'); // Fetch from public folder
        const csvText = await response.text();

        Papa.parse<Personal>(csvText, {
          header: true, // Treat first row as column names
          skipEmptyLines: true,
          complete: (result) => {
            const parsedData = result.data.map((row: any) => ({
              name: row['NOMBRE']?.trim() || '',
              role: row['NOMBRE DEL CARGO']?.trim() || '',
              type: row['TIPO']?.trim() || '',
              area: row['AREA']?.trim() || '',
              email: row['CORREO']?.trim() || '',
            })) as Personal[];

            setData(parsedData);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
      }
    };

    fetchCSV();
  }, []);

  return (
    <div className='w-full flex flex-col justify-center items-center gap-[50px]'>
      <div className='flex flex-row justify-center items-center gap-5'>
        Ver por tipo:
        {typesWithoutRepetition.map((type) => {
          return (
            <Link
              className='btn btn-xs btn-neutral btn-outline'
              href={`#${type}`}
            >
              {type.toUpperCase()}
            </Link>
          );
        })}
      </div>
      {data.length > 0 ? (
        <div className='w-full overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>{t('table.head-row.name-col-text')}</th>
                <th>{t('table.head-row.role-col-text')}</th>
                <th>{t('table.head-row.area-col-text')}</th>
                <th>{t('table.head-row.type-col-text')}</th>
                <th>{t('table.head-row.details-col-text')}</th>
              </tr>
            </thead>
            <tbody>
              {typesWithoutRepetition.map((type) => {
                return (
                  <>
                    <tr>
                      <th
                        id={type}
                        className='bg-base-200'
                        colSpan={5}
                      >
                        {type}
                      </th>
                    </tr>
                    {data
                      .filter((obj) => {
                        return obj.type.toLowerCase() === type.toLowerCase();
                      })
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((obj) => {
                        return (
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
                                    {obj.name.toUpperCase() || 'N/A'}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className={jobBadgeClasses}>
                                {obj.role.toUpperCase() || 'N/A'}
                              </span>
                            </td>
                            <td>
                              <span>{obj.area.toUpperCase() || 'N/A'}</span>
                            </td>
                            <td>
                              <span>{obj.type.toUpperCase() || 'N/A'}</span>
                            </td>
                            <th>
                              <Modal
                                image='/academyPageTableUser.webp'
                                title={obj.name.toUpperCase()}
                                subtitle={obj.role.toUpperCase()}
                                description={obj.email}
                                openBtnText={t('open-modal-btn-text')}
                                closeBtnText={t('close-modal-btn-text')}
                              />
                            </th>
                          </tr>
                        );
                      })}
                  </>
                );
              })}
            </tbody>
            {/* footer */}
            <thead>
              <tr>
                <th>{t('table.head-row.name-col-text')}</th>
                <th>{t('table.head-row.role-col-text')}</th>
                <th>{t('table.head-row.area-col-text')}</th>
                <th>{t('table.head-row.type-col-text')}</th>
                <th>{t('table.head-row.details-col-text')}</th>
              </tr>
            </thead>
          </table>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default PersonalTable;
