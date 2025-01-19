import { CollectionConfig } from 'payload/types'

export const ReviewStatistics: CollectionConfig = {
  slug: 'review-statistics',
  admin: {
    useAsTitle: 'platform',
  },
  access: {
    read: () => true,
  },
  fields: [
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
      unique: true,
    },
    {
      name: 'reviewCount',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'averageRating',
      type: 'number',
      required: true,
      min: 0,
      max: 5,
    },
    {
      name: 'platformLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
