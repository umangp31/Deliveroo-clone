import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'green-meerkat',

  projectId: 'fj1ofdxr',
  dataset: 'deliveroo-clone',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
