import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemBlog extends Schema.Component {
  collectionName: 'components_item_blogs';
  info: {
    displayName: 'Blog';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    href: Attribute.String & Attribute.Required;
  };
}

export interface ItemContactsInterest extends Schema.Component {
  collectionName: 'components_item_contacts_interests';
  info: {
    displayName: 'Contacts Interest';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface ItemContent extends Schema.Component {
  collectionName: 'components_item_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text;
    button: Attribute.Component<'ui.button'>;
    list: Attribute.Component<'ui.list-item', true>;
    image: Attribute.Media;
  };
}

export interface ItemFaq extends Schema.Component {
  collectionName: 'components_item_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ItemInnerFeatures extends Schema.Component {
  collectionName: 'components_item_inner_features';
  info: {
    displayName: 'Inner Features';
  };
  attributes: {
    icon: Attribute.Component<'ui.icon'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ItemInnerHero extends Schema.Component {
  collectionName: 'components_item_inner_heroes';
  info: {
    displayName: 'Inner Hero';
  };
  attributes: {
    icon: Attribute.Component<'ui.icon'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ItemPricingFeatures extends Schema.Component {
  collectionName: 'components_item_pricing_features';
  info: {
    displayName: 'Pricing Features';
  };
  attributes: {
    icon: Attribute.Component<'ui.icon'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ItemPricingPlan extends Schema.Component {
  collectionName: 'components_item_pricing_plans';
  info: {
    displayName: 'Pricing Plan';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.Float & Attribute.Required & Attribute.DefaultTo<0>;
    installation: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    list: Attribute.Component<'ui.list-item', true> & Attribute.Required;
    get_started_href: Attribute.String;
    get_started_external: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    get_started_color: Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
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

export interface ItemTips extends Schema.Component {
  collectionName: 'components_item_tips';
  info: {
    displayName: 'Tips';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.Component<'ui.tips-icon'> & Attribute.Required;
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
    description: '';
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
        'wine',
        'hammer',
        'shield_protected',
        'battery_charging',
        'pricing_ro',
        'pricing_non_ro',
        'pricing_whole_home',
        'pricing_undersink'
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

export interface UiTipsIcon extends Schema.Component {
  collectionName: 'components_ui_tips_icons';
  info: {
    displayName: 'Tips Icon';
  };
  attributes: {
    name: Attribute.Enumeration<
      ['tips_detects', 'tips_alerts', 'tips_controls', 'tips_smart']
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'item.blog': ItemBlog;
      'item.contacts-interest': ItemContactsInterest;
      'item.content': ItemContent;
      'item.faq': ItemFaq;
      'item.inner-features': ItemInnerFeatures;
      'item.inner-hero': ItemInnerHero;
      'item.pricing-features': ItemPricingFeatures;
      'item.pricing-plan': ItemPricingPlan;
      'item.services': ItemServices;
      'item.steps': ItemSteps;
      'item.tips': ItemTips;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'ui.button': UiButton;
      'ui.icon': UiIcon;
      'ui.list-item': UiListItem;
      'ui.tips-icon': UiTipsIcon;
    }
  }
}
