/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    header: Header;
    footer: Footer;
    pages: Page;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  name: string;
  logo: number | Media;
  navItems?:
    | {
        label: string;
        link: string;
        isExternal?: boolean | null;
        id?: string | null;
      }[]
    | null;
  navItemsForCta?:
    | {
        label: string;
        link: string;
        variant: 'primary' | 'secondary';
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  footerTitle: string;
  copyright?: string | null;
  socialLinks?:
    | {
        platform: string;
        url: string;
        logo: number | Media;
        id?: string | null;
      }[]
    | null;
  address?:
    | {
        city: string;
        state: string;
        postalCode: string;
        country: string;
        address: string;
        id?: string | null;
      }[]
    | null;
  contact?:
    | {
        email: string;
        phone: string;
        id?: string | null;
      }[]
    | null;
  footerNavigation?:
    | {
        name: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  slug: string;
  sections?:
    | {
        sectionType: 'hero' | 'about' | 'services' | 'expertise' | 'cta' | 'coachingVideo' | 'howWeWork';
        hero?: {
          heading: string;
          subheading?: string | null;
          backgroundImage: number | Media;
          cta?: {
            text?: string | null;
            link?: string | null;
          };
        };
        content?: {
          heading?: string | null;
          body?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          image?: (number | null) | Media;
          layout?: ('contentLeft' | 'contentRight') | null;
        };
        features?:
          | {
              title: string;
              description?: string | null;
              icon?: string | null;
              id?: string | null;
            }[]
          | null;
        cta?: {
          heading: string;
          subheading?: string | null;
          buttonText?: string | null;
          buttonLink?: string | null;
          backgroundColor?: ('primary' | 'secondary' | 'tertiary') | null;
        };
        testimonials?:
          | {
              quote: string;
              author: string;
              role?: string | null;
              image?: (number | null) | Media;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    image?: (number | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'header';
        value: number | Header;
      } | null)
    | ({
        relationTo: 'footer';
        value: number | Footer;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        tablet?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  name?: T;
  logo?: T;
  navItems?:
    | T
    | {
        label?: T;
        link?: T;
        isExternal?: T;
        id?: T;
      };
  navItemsForCta?:
    | T
    | {
        label?: T;
        link?: T;
        variant?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  footerTitle?: T;
  copyright?: T;
  socialLinks?:
    | T
    | {
        platform?: T;
        url?: T;
        logo?: T;
        id?: T;
      };
  address?:
    | T
    | {
        city?: T;
        state?: T;
        postalCode?: T;
        country?: T;
        address?: T;
        id?: T;
      };
  contact?:
    | T
    | {
        email?: T;
        phone?: T;
        id?: T;
      };
  footerNavigation?:
    | T
    | {
        name?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  sections?:
    | T
    | {
        sectionType?: T;
        hero?:
          | T
          | {
              heading?: T;
              subheading?: T;
              backgroundImage?: T;
              cta?:
                | T
                | {
                    text?: T;
                    link?: T;
                  };
            };
        content?:
          | T
          | {
              heading?: T;
              body?: T;
              image?: T;
              layout?: T;
            };
        features?:
          | T
          | {
              title?: T;
              description?: T;
              icon?: T;
              id?: T;
            };
        cta?:
          | T
          | {
              heading?: T;
              subheading?: T;
              buttonText?: T;
              buttonLink?: T;
              backgroundColor?: T;
            };
        testimonials?:
          | T
          | {
              quote?: T;
              author?: T;
              role?: T;
              image?: T;
              id?: T;
            };
        id?: T;
      };
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}