type ClipPathTitleProps = {
  title: string;
  color: string;
  bg: string;
  className: string;
  borderColor: string;
};
const TitleClipPath = ({
  title,
  color,
  bg,
  className,
  borderColor,
}: ClipPathTitleProps) => {
  return (
    <div className="general-title">
      <div
        style={{
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          borderColor: borderColor,
        }}
        className={`${className} border-[0.5vw] text-nowrap opacity-0`}
      >
        <div
          style={{ backgroundColor: bg }}
          className="p-5 md:px-14 px-3 md:pt-0 pt-3"
        >
          <h2 style={{ color: color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TitleClipPath;
