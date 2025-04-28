import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [{field: 'releaseDate', direction: 'desc'}],
    },
    {
      title: 'newProduct',
      name: 'newProductAsc',
      by: [{field: 'newProduct', direction: 'asc'}],
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'shortName',
      type: 'string',
    }),
    defineField({
      name: 'cartName',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['headphones', 'speakers', 'earphones'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'releaseDate',
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0],
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      description: 'Hero image of the product',
    }),
    defineField({
      name: 'cartThumbnail',
      type: 'image',
      description: 'Thumbnail in the cart menu',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'newProduct',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featuresDescription',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'includedItems',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'includedItem',
          fields: [
            {type: 'string', name: 'name'},
            {type: 'number', name: 'amount'},
          ],
        },
      ],
    }),
    defineField({
      name: 'galleryImages',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
