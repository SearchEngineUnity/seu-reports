// eslint-disable-next-line
export function mapEmbedToProps({ idTag, title, _rawText, backgroundImage, backgroundColor }) {
  return {
    id: idTag,
    title,
    heroText: _rawText,
    imageURL: backgroundImage?.asset?.url,
    backgroundColor: backgroundColor?.hex,
  };
}
