'use client';

interface ImpactGalleryProps {
    images: string[];
    title?: string;
    className?: string;
}

export function ImpactGallery({ images, title, className = "" }: ImpactGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className={`w-full py-8 ${className}`}>
            {title && (
                <h3 className="mb-6 text-2xl font-serif font-bold text-gray-900 border-l-4 border-teal-600 pl-4">
                    {title}
                </h3>
            )}

            {/* 
         Responsive Grid Layout:
         - Mobile: 1 column
         - Tablet: 2 columns
         - Desktop: 3 columns
         - Large Desktop: 4 columns
         - Gap: 1.5rem (24px)
      */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm"
                    >
                        <img
                            src={src}
                            alt={title ? `${title} - Image ${index + 1}` : `Gallery image ${index + 1}`}
                            className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-95"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
