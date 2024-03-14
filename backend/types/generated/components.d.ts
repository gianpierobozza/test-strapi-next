import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksDynamicCardsConfig extends Schema.Component {
  collectionName: 'components_blocks_dynamic_cards_configs';
  info: {
    displayName: 'DynamicCardsConfig';
    icon: 'cog';
    description: '';
  };
  attributes: {
    rows: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
    cols: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      >;
    gridFlow: Attribute.Enumeration<
      ['row', 'col', 'dense', 'rowDense', 'colDense']
    >;
  };
}

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'Link';
    icon: 'code';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['default', 'button', 'icon', 'image']>;
    style: Attribute.Enumeration<['primary', 'secondary', 'outline']>;
    medium: Attribute.Media;
  };
}

export interface BlocksMedia extends Schema.Component {
  collectionName: 'components_blocks_media';
  info: {
    displayName: 'Media';
    icon: 'chartBubble';
  };
  attributes: {
    medium: Attribute.Media;
    position: Attribute.Enumeration<['start (top)', 'end (bottom)']>;
  };
}

export interface PageElementsCard extends Schema.Component {
  collectionName: 'components_page_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'alien';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.RichText;
    layout: Attribute.Enumeration<['horizontal', 'vertical']>;
    media: Attribute.Component<'blocks.media', true>;
    cta: Attribute.Component<'blocks.link'>;
    style: Attribute.Enumeration<['text-start', 'text-end']>;
    rowSpan: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 3;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    colSpan: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 3;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    title: Attribute.String;
    subheading: Attribute.String;
  };
}

export interface PageElementsHero extends Schema.Component {
  collectionName: 'components_page_elements_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    text: Attribute.RichText;
    media: Attribute.Component<'blocks.media'>;
    style: Attribute.Enumeration<['text-start', 'text-end']>;
    cta: Attribute.Component<'blocks.link'>;
  };
}

export interface PageElementsHomeHeader extends Schema.Component {
  collectionName: 'components_page_elements_home_headers';
  info: {
    displayName: 'Home Header';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    slogan: Attribute.String;
    description: Attribute.String;
    homeCTA: Attribute.Component<'blocks.link'>;
    style: Attribute.Enumeration<['justify', 'center', 'start', 'end']>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
    icon: 'code';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    shareImageAlt: Attribute.String;
    shareImageMedia: Attribute.Media;
    keywords: Attribute.String;
    preventingIndex: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.dynamic-cards-config': BlocksDynamicCardsConfig;
      'blocks.link': BlocksLink;
      'blocks.media': BlocksMedia;
      'page-elements.card': PageElementsCard;
      'page-elements.hero': PageElementsHero;
      'page-elements.home-header': PageElementsHomeHeader;
      'seo.seo': SeoSeo;
    }
  }
}
