import { CollectionConfig } from 'payload/types'

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      minRows: 1,
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          options: [
            { label: 'Hero', value: 'hero' },
            { label: 'About/Coaching', value: 'aboutCoaching' },
            { label: 'Our Services', value: 'ourServices' },
            { label: 'Our Potential', value: 'ourPotential' },
            { label: 'Our Expertise', value: 'ourExpertise' },
            { label: 'Intro Video', value: 'introVideo' },
            { label: 'How We Work', value: 'processSteps' },
            { label: 'Company Growth', value: 'companyGrowth' },
            { label: 'Our FAQs', value: 'ourFaq' },
            { label: 'Our Testimonials', value: 'ourTestimonials' },
            { label: 'Our Blogs', value: 'ourBlogs' },
          ],
          required: true,
        },
        {
          name: 'hero',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'hero',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },

            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'cta',
              type: 'group',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                },
                {
                  name: 'link',
                  type: 'text',
                },
              ],
            },
            {
              name: 'feature',
              type: 'group',
              fields: [
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                },
              ],
            },
          ],
        },

        {
          name: 'aboutCoaching',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'aboutCoaching',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              defaultValue: 'ABOUT US',
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'mainImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'secondaryImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'experienceYears',
              type: 'number',
              required: true,
            },
            {
              name: 'clientCount',
              type: 'number',
              required: true,
            },
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'teamMembers',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'award',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'cta',
              type: 'group',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        {
          name: 'ourServices',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'ourServices',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              defaultValue: 'SERVICES',
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'service',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'shortDescription',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'ourExpertise',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'ourExpertise',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'metrics',
              type: 'array',
              fields: [
                {
                  name: 'percentage',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'ourPotential',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'ourPotential',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'metrics',
              type: 'array',
              fields: [
                {
                  name: 'percentage',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },

        {
          name: 'videoSection',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'videoSection',
          },
          fields: [
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'videoUrl',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'processSteps',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'processSteps',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'steps',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'number',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'keyFeatures',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'statistics',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'statistics',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'stats',
              type: 'array',
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'companyGrowth',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'companyGrowth',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },

            {
              name: 'statistics',
              type: 'array',
              fields: [
                {
                  name: 'count/percentage',
                  type: 'text',

                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'ourFaq',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.sectionType === 'ourFaq',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'highlightedText',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },

            {
              name: 'faq',
              type: 'array',
              fields: [
                {
                  name: 'teamMembers',
                  type: 'array',
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'phoneNumber',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'questions',
                  type: 'array',
                  fields: [
                    {
                      name: 'question',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'answer',
                      type: 'textarea',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
