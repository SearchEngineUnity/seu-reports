import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { BsInfoSquare } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiNavigation2 } from 'react-icons/fi';

export default () =>
  S.list()
    .title('SEU Reports')
    .items([
      S.documentTypeListItem('organization').title('Organizations'),
      S.documentTypeListItem('report').title('Reports'),
    ]);
