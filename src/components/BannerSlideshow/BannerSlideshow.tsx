'use client';

import { FC } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

// import 'react-image-gallery/styles/css/image-gallery.css';
import './BannerSlideshow.css';

interface Props {
  banners: Array<string>;
}

const BannerSlideshow: FC<Props> = ({ banners }) => {
  const items: Array<ReactImageGalleryItem> = banners.map((src) => ({
    original: src,
    originalAlt: src.split('.')[0].slice(1),
  }));

  return (
    <ImageGallery
      items={items}
      infinite
      autoPlay
      disableSwipe
      slideDuration={750}
      slideInterval={4000}
      showBullets={false}
      showFullscreenButton={false}
      showIndex={false}
      showNav={false}
      showPlayButton={false}
      showThumbnails={false}
    />
  );
};

export default BannerSlideshow;
