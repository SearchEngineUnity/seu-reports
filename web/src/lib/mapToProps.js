export function mapEmbedToProps({ idTag, title, _rawText, backgroundImage, backgroundColor }) {
  return {
    id: idTag,
    title,
    heroText: _rawText,
    imageURL: backgroundImage?.asset?.url,
    backgroundColor: backgroundColor?.hex,
  };
}

export function mapSeoToProps(
  { title, description, facebook, twitter, slug, noindex, nofollow, canonical, heroImage },
  siteUrl,
  type,
  mpUrl = '',
) {
  return {
    mpUrl,
    type,
    title,
    description,
    og: facebook,
    twitter,
    siteUrl,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
    heroImage,
  };
}
