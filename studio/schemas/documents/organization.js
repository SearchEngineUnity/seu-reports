import { MdBusiness } from 'react-icons/md';

export default {
  name: 'organization',
  title: 'Organization',
  type: 'document',
  icon: MdBusiness,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'url',
      media: 'logo',
    },
  },
};
