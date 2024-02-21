import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogSectionBlogSection extends Schema.CollectionType {
  collectionName: 'blog_sections';
  info: {
    singularName: 'blog-section';
    pluralName: 'blog-sections';
    displayName: 'Blog Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'item.blog', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-section.blog-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-section.blog-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'Contact';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    email: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    phone: Attribute.String;
    interest: Attribute.String;
    message: Attribute.Text & Attribute.Required;
    status: Attribute.Enumeration<['new', 'completed']> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactsPageContactsPage extends Schema.SingleType {
  collectionName: 'contacts_pages';
  info: {
    singularName: 'contacts-page';
    pluralName: 'contacts-pages';
    displayName: 'Contacts Page';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    footnote: Attribute.Text;
    interest: Attribute.Component<'item.contacts-interest', true> &
      Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contacts-page.contacts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contacts-page.contacts-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactsSectionContactsSection extends Schema.SingleType {
  collectionName: 'contacts_sections';
  info: {
    singularName: 'contacts-section';
    pluralName: 'contacts-sections';
    displayName: 'Contacts Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    phone_label: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    email_label: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contacts-section.contacts-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contacts-section.contacts-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContentSectionContentSection extends Schema.CollectionType {
  collectionName: 'content_sections';
  info: {
    singularName: 'content-section';
    pluralName: 'content-sections';
    displayName: 'Content Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'item.content', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::content-section.content-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::content-section.content-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqSectionFaqSection extends Schema.CollectionType {
  collectionName: 'faq_sections';
  info: {
    singularName: 'faq-section';
    pluralName: 'faq-sections';
    displayName: 'FAQ Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'item.faq', true> & Attribute.Required;
    pricing_page_templates: Attribute.Relation<
      'api::faq-section.faq-section',
      'oneToMany',
      'api::pricing-page-template.pricing-page-template'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::faq-section.faq-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::faq-section.faq-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: 'Define global settings';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    siteName: Attribute.String & Attribute.Required;
    siteDescription: Attribute.Text & Attribute.Required;
    defaultSeo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHeroSectionHomeHeroSection
  extends Schema.CollectionType {
  collectionName: 'home_hero_sections';
  info: {
    singularName: 'home-hero-section';
    pluralName: 'home-hero-sections';
    displayName: 'Home Hero Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    buttons: Attribute.Component<'ui.button', true> & Attribute.Required;
    list: Attribute.Component<'ui.list-item', true> & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-hero-section.home-hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-hero-section.home-hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    home_hero_section: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'api::home-hero-section.home-hero-section'
    >;
    services_section: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'api::services-section.services-section'
    >;
    blog_section: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'api::blog-section.blog-section'
    >;
    steps_section: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'api::steps-section.steps-section'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInnerFeaturesSectionInnerFeaturesSection
  extends Schema.CollectionType {
  collectionName: 'inner_features_sections';
  info: {
    singularName: 'inner-features-section';
    pluralName: 'inner-features-sections';
    displayName: 'Inner Features Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'item.inner-features', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::inner-features-section.inner-features-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::inner-features-section.inner-features-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInnerHeroSectionInnerHeroSection
  extends Schema.CollectionType {
  collectionName: 'inner_hero_sections';
  info: {
    singularName: 'inner-hero-section';
    pluralName: 'inner-hero-sections';
    displayName: 'Inner Hero Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    primary_image: Attribute.Media & Attribute.Required;
    secondary_image: Attribute.Media & Attribute.Required;
    button: Attribute.Component<'ui.button'> & Attribute.Required;
    items: Attribute.Component<'item.inner-hero', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::inner-hero-section.inner-hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::inner-hero-section.inner-hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeakDetectionLeakDetection extends Schema.SingleType {
  collectionName: 'leak_detections';
  info: {
    singularName: 'leak-detection';
    pluralName: 'leak-detections';
    displayName: 'Leak Detection';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    inner_hero_section: Attribute.Relation<
      'api::leak-detection.leak-detection',
      'oneToOne',
      'api::inner-hero-section.inner-hero-section'
    >;
    content_section: Attribute.Relation<
      'api::leak-detection.leak-detection',
      'oneToOne',
      'api::content-section.content-section'
    >;
    tips_section: Attribute.Relation<
      'api::leak-detection.leak-detection',
      'oneToOne',
      'api::tips-section.tips-section'
    >;
    blog_section: Attribute.Relation<
      'api::leak-detection.leak-detection',
      'oneToOne',
      'api::blog-section.blog-section'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::leak-detection.leak-detection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::leak-detection.leak-detection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
  collectionName: 'orders';
  info: {
    singularName: 'order';
    pluralName: 'orders';
    displayName: 'Order';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    address: Attribute.String & Attribute.Required;
    payment_id: Attribute.String & Attribute.Required;
    pricing_plans: Attribute.Relation<
      'api::order.order',
      'manyToMany',
      'api::pricing-plan.pricing-plan'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingFeaturesSectionPricingFeaturesSection
  extends Schema.CollectionType {
  collectionName: 'pricing_features_sections';
  info: {
    singularName: 'pricing-features-section';
    pluralName: 'pricing-features-sections';
    displayName: 'Pricing Features Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'item.pricing-features', true> &
      Attribute.Required;
    pricing_page_templates: Attribute.Relation<
      'api::pricing-features-section.pricing-features-section',
      'oneToMany',
      'api::pricing-page-template.pricing-page-template'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-features-section.pricing-features-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing-features-section.pricing-features-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingHeroSectionPricingHeroSection
  extends Schema.CollectionType {
  collectionName: 'pricing_hero_sections';
  info: {
    singularName: 'pricing-hero-section';
    pluralName: 'pricing-hero-sections';
    displayName: 'Pricing Hero Section';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    pricing_variant_sections: Attribute.Relation<
      'api::pricing-hero-section.pricing-hero-section',
      'manyToMany',
      'api::pricing-variant-section.pricing-variant-section'
    >;
    pricing_page_templates: Attribute.Relation<
      'api::pricing-hero-section.pricing-hero-section',
      'oneToMany',
      'api::pricing-page-template.pricing-page-template'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-hero-section.pricing-hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing-hero-section.pricing-hero-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingPageTemplatePricingPageTemplate
  extends Schema.CollectionType {
  collectionName: 'pricing_page_templates';
  info: {
    singularName: 'pricing-page-template';
    pluralName: 'pricing-page-templates';
    displayName: 'Pricing Page Template';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    pricing_hero_section: Attribute.Relation<
      'api::pricing-page-template.pricing-page-template',
      'manyToOne',
      'api::pricing-hero-section.pricing-hero-section'
    >;
    pricing_features_section: Attribute.Relation<
      'api::pricing-page-template.pricing-page-template',
      'manyToOne',
      'api::pricing-features-section.pricing-features-section'
    >;
    faq_section: Attribute.Relation<
      'api::pricing-page-template.pricing-page-template',
      'manyToOne',
      'api::faq-section.faq-section'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-page-template.pricing-page-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing-page-template.pricing-page-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingPlanPricingPlan extends Schema.CollectionType {
  collectionName: 'pricing_plans';
  info: {
    singularName: 'pricing-plan';
    pluralName: 'pricing-plans';
    displayName: 'Pricing Plan';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.Float & Attribute.Required & Attribute.DefaultTo<0>;
    installation: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    list: Attribute.Component<'ui.list-item', true>;
    type: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    pricing_variant_sections: Attribute.Relation<
      'api::pricing-plan.pricing-plan',
      'manyToMany',
      'api::pricing-variant-section.pricing-variant-section'
    >;
    products: Attribute.Relation<
      'api::pricing-plan.pricing-plan',
      'manyToMany',
      'api::product.product'
    >;
    deposit: Attribute.Float & Attribute.Required & Attribute.DefaultTo<0>;
    orders: Attribute.Relation<
      'api::pricing-plan.pricing-plan',
      'manyToMany',
      'api::order.order'
    >;
    opposite_pricing_plan: Attribute.Relation<
      'api::pricing-plan.pricing-plan',
      'oneToOne',
      'api::pricing-plan.pricing-plan'
    >;
    pricing_plan: Attribute.Relation<
      'api::pricing-plan.pricing-plan',
      'oneToOne',
      'api::pricing-plan.pricing-plan'
    >;
    service_image: Attribute.Media & Attribute.Required;
    service_name: Attribute.String;
    installation_accessories: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-plan.pricing-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing-plan.pricing-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingVariantSectionPricingVariantSection
  extends Schema.CollectionType {
  collectionName: 'pricing_variant_sections';
  info: {
    singularName: 'pricing-variant-section';
    pluralName: 'pricing-variant-sections';
    displayName: 'Pricing Variant Section';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    icon: Attribute.Component<'ui.icon'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    pricing_hero_sections: Attribute.Relation<
      'api::pricing-variant-section.pricing-variant-section',
      'manyToMany',
      'api::pricing-hero-section.pricing-hero-section'
    >;
    pricing_plans: Attribute.Relation<
      'api::pricing-variant-section.pricing-variant-section',
      'manyToMany',
      'api::pricing-plan.pricing-plan'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-variant-section.pricing-variant-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pricing-variant-section.pricing-variant-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    meta: Attribute.String;
    price: Attribute.Float & Attribute.Required & Attribute.DefaultTo<0>;
    discount: Attribute.Float & Attribute.DefaultTo<0>;
    preview: Attribute.Media & Attribute.Required;
    pricing_plans: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::pricing-plan.pricing-plan'
    >;
    label: Attribute.String & Attribute.Required;
    preview_object_fit: Attribute.Enumeration<['cover', 'contain']> &
      Attribute.Required &
      Attribute.DefaultTo<'cover'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReverseOsmosisReverseOsmosis extends Schema.SingleType {
  collectionName: 'reverse_osmoses';
  info: {
    singularName: 'reverse-osmosis';
    pluralName: 'reverse-osmoses';
    displayName: 'Reverse Osmosis';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    inner_hero_section: Attribute.Relation<
      'api::reverse-osmosis.reverse-osmosis',
      'oneToOne',
      'api::inner-hero-section.inner-hero-section'
    >;
    content_section: Attribute.Relation<
      'api::reverse-osmosis.reverse-osmosis',
      'oneToOne',
      'api::content-section.content-section'
    >;
    inner_features_section: Attribute.Relation<
      'api::reverse-osmosis.reverse-osmosis',
      'oneToOne',
      'api::inner-features-section.inner-features-section'
    >;
    blog_section: Attribute.Relation<
      'api::reverse-osmosis.reverse-osmosis',
      'oneToOne',
      'api::blog-section.blog-section'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reverse-osmosis.reverse-osmosis',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reverse-osmosis.reverse-osmosis',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReverseOsmosisPriceReverseOsmosisPrice
  extends Schema.SingleType {
  collectionName: 'reverse_osmosis_prices';
  info: {
    singularName: 'reverse-osmosis-price';
    pluralName: 'reverse-osmosis-prices';
    displayName: 'Reverse Osmosis Price';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    pricing_page_template: Attribute.Relation<
      'api::reverse-osmosis-price.reverse-osmosis-price',
      'oneToOne',
      'api::pricing-page-template.pricing-page-template'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reverse-osmosis-price.reverse-osmosis-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reverse-osmosis-price.reverse-osmosis-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServicesSectionServicesSection
  extends Schema.CollectionType {
  collectionName: 'services_sections';
  info: {
    singularName: 'services-section';
    pluralName: 'services-sections';
    displayName: 'Services Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    list: Attribute.Component<'ui.list-item', true> & Attribute.Required;
    items: Attribute.Component<'item.services', true> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::services-section.services-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::services-section.services-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStepsSectionStepsSection extends Schema.CollectionType {
  collectionName: 'steps_sections';
  info: {
    singularName: 'steps-section';
    pluralName: 'steps-sections';
    displayName: 'Steps Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    items: Attribute.Component<'item.steps', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::steps-section.steps-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::steps-section.steps-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTipsSectionTipsSection extends Schema.CollectionType {
  collectionName: 'tips_sections';
  info: {
    singularName: 'tips-section';
    pluralName: 'tips-sections';
    displayName: 'Tips Section';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'item.tips', true> & Attribute.Required;
    button: Attribute.Component<'ui.button'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tips-section.tips-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tips-section.tips-section',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhFiltrationWhFiltration extends Schema.SingleType {
  collectionName: 'wh_filtrations';
  info: {
    singularName: 'wh-filtration';
    pluralName: 'wh-filtrations';
    displayName: 'WH Filtration';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    inner_hero_section: Attribute.Relation<
      'api::wh-filtration.wh-filtration',
      'oneToOne',
      'api::inner-hero-section.inner-hero-section'
    >;
    content_section: Attribute.Relation<
      'api::wh-filtration.wh-filtration',
      'oneToOne',
      'api::content-section.content-section'
    >;
    inner_features_section: Attribute.Relation<
      'api::wh-filtration.wh-filtration',
      'oneToOne',
      'api::inner-features-section.inner-features-section'
    >;
    blog_section: Attribute.Relation<
      'api::wh-filtration.wh-filtration',
      'oneToOne',
      'api::blog-section.blog-section'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::wh-filtration.wh-filtration',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::wh-filtration.wh-filtration',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhFiltrationPriceWhFiltrationPrice
  extends Schema.SingleType {
  collectionName: 'wh_filtration_prices';
  info: {
    singularName: 'wh-filtration-price';
    pluralName: 'wh-filtration-prices';
    displayName: 'WH Filtration Price';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    pricing_page_template: Attribute.Relation<
      'api::wh-filtration-price.wh-filtration-price',
      'oneToOne',
      'api::pricing-page-template.pricing-page-template'
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::wh-filtration-price.wh-filtration-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::wh-filtration-price.wh-filtration-price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::blog-section.blog-section': ApiBlogSectionBlogSection;
      'api::contact.contact': ApiContactContact;
      'api::contacts-page.contacts-page': ApiContactsPageContactsPage;
      'api::contacts-section.contacts-section': ApiContactsSectionContactsSection;
      'api::content-section.content-section': ApiContentSectionContentSection;
      'api::faq-section.faq-section': ApiFaqSectionFaqSection;
      'api::global.global': ApiGlobalGlobal;
      'api::home-hero-section.home-hero-section': ApiHomeHeroSectionHomeHeroSection;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::inner-features-section.inner-features-section': ApiInnerFeaturesSectionInnerFeaturesSection;
      'api::inner-hero-section.inner-hero-section': ApiInnerHeroSectionInnerHeroSection;
      'api::leak-detection.leak-detection': ApiLeakDetectionLeakDetection;
      'api::order.order': ApiOrderOrder;
      'api::pricing-features-section.pricing-features-section': ApiPricingFeaturesSectionPricingFeaturesSection;
      'api::pricing-hero-section.pricing-hero-section': ApiPricingHeroSectionPricingHeroSection;
      'api::pricing-page-template.pricing-page-template': ApiPricingPageTemplatePricingPageTemplate;
      'api::pricing-plan.pricing-plan': ApiPricingPlanPricingPlan;
      'api::pricing-variant-section.pricing-variant-section': ApiPricingVariantSectionPricingVariantSection;
      'api::product.product': ApiProductProduct;
      'api::reverse-osmosis.reverse-osmosis': ApiReverseOsmosisReverseOsmosis;
      'api::reverse-osmosis-price.reverse-osmosis-price': ApiReverseOsmosisPriceReverseOsmosisPrice;
      'api::services-section.services-section': ApiServicesSectionServicesSection;
      'api::steps-section.steps-section': ApiStepsSectionStepsSection;
      'api::tips-section.tips-section': ApiTipsSectionTipsSection;
      'api::wh-filtration.wh-filtration': ApiWhFiltrationWhFiltration;
      'api::wh-filtration-price.wh-filtration-price': ApiWhFiltrationPriceWhFiltrationPrice;
    }
  }
}
