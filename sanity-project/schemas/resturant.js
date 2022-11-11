export default {
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Resturant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of Resturants',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of Resturant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of Resturant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Resturant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter a number from (1-5 starts)',
      type: 'number',
      validation: (Rule) => 
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: "category"}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: "reference", to: [{ type: 'dish'}] }],
    },
  ],
}
