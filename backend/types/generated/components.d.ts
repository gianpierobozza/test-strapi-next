import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCard extends Schema.Component {
  collectionName: 'components_components_cards';
  info: {
    displayName: 'Card';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText;
    landings: Attribute.Relation<
      'components.card',
      'oneToMany',
      'api::landing.landing'
    >;
  };
}

export interface ComponentsHero extends Schema.Component {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.card': ComponentsCard;
      'components.hero': ComponentsHero;
    }
  }
}
