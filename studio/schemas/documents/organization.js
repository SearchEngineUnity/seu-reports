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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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
      slug: 'slug.current',
      media: 'logo',
    },
    prepare({ title, slug, media }) {
      return {
        title,
        subtitle: `/${slug}`,
        media,
      };
    },
  },
};
