import { MdWeb } from 'react-icons/md';

export default {
  name: 'report',
  type: 'document',
  title: 'Report',
  icon: MdWeb,
  fields: [
    {
      name: 'organization',
      title: 'Organization',
      type: 'reference',
      to: [{ type: 'organization' }],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Embed URL',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subttitle: 'url',
    },
  },
};
