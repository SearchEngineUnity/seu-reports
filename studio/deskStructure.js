import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('SEU Reports')
    .items([
      S.documentTypeListItem('organization').title('Organizations'),
      S.documentTypeListItem('report').title('Reports'),
    ]);
