import { gql } from "@apollo/client";

export const getHomepage = (lang: string) => gql`
  query GetHomepage {
    homepage(locale: "${lang}") {
      data {
        attributes {
          slug
          HomePageSeo {
            metaTitle
            metaDescription
            shareImageAlt
            shareImageMedia {
              data {
                attributes {
                  url
                }
              }
            }
            keywords
            preventingIndex
          }
          Header {
            heading
            subheading
            slogan
            description
            style
            homeCTA {
              action
              type
              text
            }
          }
          HomepageTopCards {
            title
            heading
            subheading
            text
            layout
            rowSpan
            colSpan
            cta {
              text
              action
              type
              style
              medium {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            style
            media {
              medium {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          HomepageDynamicCards {
            __typename
            ... on ComponentBlocksDynamicCardsConfig {
              rows
              cols
              gridFlow
            }
            ... on ComponentPageElementsCard {
              title
              heading
              subheading
              text
              layout
              rowSpan
              colSpan
              cta {
                text
                action
                type
                style
                medium {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              style
              media {
                medium {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          HomepageBottomCards {
            title
            heading
            subheading
            text
            layout
            rowSpan
            colSpan
            cta {
              text
              action
              type
              style
              medium {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            style
            media {
              medium {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;