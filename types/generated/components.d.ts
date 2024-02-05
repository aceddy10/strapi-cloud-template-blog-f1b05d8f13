import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemBlog extends Schema.Component {
  collectionName: 'components_item_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ItemServices extends Schema.Component {
  collectionName: 'components_item_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    icon: Attribute.Component<'ui.icon'> & Attribute.Required;
  };
}

export interface ItemSteps extends Schema.Component {
  collectionName: 'components_item_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    ui: Attribute.Enumeration<['primary', 'secondary', 'outline']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
    size: Attribute.Enumeration<['md', 'lg']> &
      Attribute.Required &
      Attribute.DefaultTo<'lg'>;
    arrow: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    external: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    href: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
  };
}

export interface UiIcon extends Schema.Component {
  collectionName: 'components_ui_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'bath',
        'chat',
        'clock',
        'dollar',
        'donation',
        'drop',
        'gas_stove',
        'heart',
        'home_heart',
        'key',
        'mail',
        'marker',
        'protection',
        'rain',
        'toilet',
        'washer',
        'water_mixer',
        'wifi',
        'wine'
      ]
    > &
      Attribute.Required;
  };
}

export interface UiListItem extends Schema.Component {
  collectionName: 'components_ui_list_items';
  info: {
    displayName: 'List Item';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'item.blog': ItemBlog;
      'item.services': ItemServices;
      'item.steps': ItemSteps;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'ui.button': UiButton;
      'ui.icon': UiIcon;
      'ui.list-item': UiListItem;
    }
  }
}
