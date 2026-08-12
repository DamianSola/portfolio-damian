'use client'

const ProjectComponent = ({ name, url, description, image_url }) => {
  const shortDescription = description.split('.')[0] + '.'

  return (
    <article className="group">
      {image_url && (
        <div className="mb-6 overflow-hidden border border-white/[0.06] aspect-[16/10]">
          <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover grayscale transition-opacity duration-200 group-hover:opacity-80"
          />
        </div>
      )}

      <h3 className="text-primary text-lg font-medium mb-2">{name}</h3>

      <p className="text-secondary text-base font-normal leading-[1.7] mb-4 line-clamp-1">
        {shortDescription}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary text-sm font-normal transition-colors duration-200 hover:text-primary"
      >
        Ver proyecto &rarr;
      </a>
    </article>
  )
}

export default ProjectComponent
