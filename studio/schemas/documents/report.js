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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Dashboard', value: 'dashboard' },
          { title: 'SEO', value: 'seo' },
          { title: 'Conversion', value: 'conversion' },
          { title: 'Ads', value: 'Ads' },
          { title: 'Traffic', value: 'traffic' },
        ],
      },
    },
    {
      name: 'url',
      type: 'url',
      title: 'Embed URL',
    },
  ],
  preview: {
    select: {
      title: 'type',
      subtitle: 'organization.name',
      media: 'organization.logo',
    },
  },
};
