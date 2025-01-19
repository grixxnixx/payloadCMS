import { CollectionConfig } from 'payload/types'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'platform', 'rating', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'select',
      options: [
        { label: '5 Stars', value: '5' },
        { label: '4 Stars', value: '4' },
        { label: '3 Stars', value: '3' },
        { label: '2 Stars', value: '2' },
        { label: '1 Star', value: '1' },
      ],
      required: true,
      defaultValue: '5',
    },
    {
      name: 'platform',
      type: 'select',
      options: [
        { label: 'Google', value: 'google' },
        { label: 'Trustpilot', value: 'trustpilot' },
        { label: 'Airbnb', value: 'airbnb' },
        { label: 'Yelp', value: 'yelp' },
      ],
      required: true,
    },
    {
      name: 'authorImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature this testimonial',
    },
  ],
}
