// material icons
import { SvgIconComponent } from '@material-ui/icons';

// material components
import CodeIcon from '@material-ui/icons/CodeOutlined';
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import DevicesIcon from '@material-ui/icons/DevicesOutlined';

export interface IData {
  id: number;
  Icon: SvgIconComponent;
  header: string;
  body: string | string[];
}

const data: IData[] = [
  {
    id: 1,
    Icon: CodeIcon,
    header: 'Design To HTML',
    body: [
      'Do you have nice design in PSD, Figma or Sketch?, ',
      ", I'll convert them to fully responsive websites",
    ],
  },
  {
    id: 2,
    Icon: DevicesIcon,
    header: 'Responsive Web',
    body:
      'With the rise of mobile devices, you website must be able to look good on these varied devices',
  },
  {
    id: 3,
    Icon: AssignmentIcon,
    header: 'Mentor',
    body:
      'I genuinely care about other developers, and help them with their craft',
  },
];

export { data };
