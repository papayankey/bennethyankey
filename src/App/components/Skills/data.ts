import { CodeSVG, ResponsiveSVG, TeachSVG } from './svg';

export interface IData {
  id: number;
  media: JSX.Element;
  header: string;
  body: string;
}

const data: IData[] = [
  {
    id: 1,
    media: CodeSVG(),
    header: 'Design To HTML',
    body:
      "Do you have nice design in PSD, Figma or Sketch?, contact me,I'll convert them to fully responsive websites",
  },
  {
    id: 2,
    media: ResponsiveSVG(),
    header: 'Responsive Web',
    body:
      'With the rise of mobile devices, you website must be able to look good on these varied devices',
  },
  {
    id: 3,
    media: TeachSVG(),
    header: 'Mentor',
    body:
      'I genuinely care about other developers, and help them with their craft',
  },
];

export { data };
