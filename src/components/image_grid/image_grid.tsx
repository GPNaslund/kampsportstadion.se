interface ImageGridProps {
  srcs: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ srcs }) => {
  return (
    <div className="px-20 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 place-items-center">
      {srcs.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="w-auto h-auto rounded-md transform transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>
  )
}

export default ImageGrid;