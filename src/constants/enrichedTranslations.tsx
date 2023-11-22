export const enrichedTranslations = {
  meaningful: (text: string) => {
    <strong className={`font-bold`}>{text}</strong>;
  },
  notable: (text: string) => {
    <b className={`font-bold`}>{text}</b>;
  },
  big: (text: string) => {
    <span className={`text-[50px]`}>{text}</span>;
  },
  colordiff: (text: string) => {
    return <span className={`text-green-500`}>{text}</span>;
  },
};
