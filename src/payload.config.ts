// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
// import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './collections/Header'
import { Footer } from './collections/Footer'
import { Blog } from './collections/Blogs'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'
import { Testimonials } from './collections/Testimonials'
import { ReviewStatistics } from './collections/ReviewStatistics'
import { Page } from './collections/Page'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Header,
    Footer,
    Categories,
    Tags,
    Blog,
    Testimonials,
    ReviewStatistics,
    Page,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  // sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
