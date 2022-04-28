export const ShareItem: React.FC<{
  icon: React.FC;
  title: string;
  action?: "openMail" | "copyToClipboard" | "openOnWeb";
  value?: string;
}> = ({ icon: Icon, title, action, value }) => {
  const openOnWeb = (url: string) => {
    window.open(url).focus();
  };

  const copyToClipBoard = (text: string) => {
    navigator?.clipboard?.writeText(text);
  };

  const handleClick = () => {
    switch (action) {
      case "copyToClipboard":
        copyToClipBoard(value);
        alert("Kopyalandı!");
        break;
      case "openOnWeb":
        openOnWeb(value);
        break;
      case "openMail":
        openOnWeb(
          `mailto:${value}?subject=${encodeURIComponent(
            "Aklı Başında Deliler Kumpanyası Hakkında"
          )}`
        );
        break;
      default:
        break;
    }
  };

  return (
    <button
      type="button"
      className="flex flex-col items-center space-y-4 font-sans"
      onClick={handleClick}
    >
      <div className="flex items-center p-4 space-x-2 transition-colors rounded-full cursor-pointer hover:bg-white/20 group text-white/50 hover:text-white bg-white/10 w-max">
        <Icon />

        <span className="font-light transition-opacity opacity-50 group-hover:opacity-100">
          {title}
        </span>
      </div>
    </button>
  );
};
