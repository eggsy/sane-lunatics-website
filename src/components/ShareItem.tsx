export const ShareItem: React.FC<{
  icon: React.FC;
  title: string;
  action?: "openMail" | "copyToClipboard" | "openOnWeb";
  value?: string;
}> = ({ icon: Icon, title, action, value }) => {
  const openOnWeb = (url: string) => {
    window.open(url).focus();
  };

  const copyToClipBoard = async (text: string) => {
    if (!navigator?.clipboard) return;

    navigator?.clipboard
      ?.writeText(text)
      ?.then(() => alert("Koyalandı!"))
      ?.catch(console.error);
  };

  const handleClick = () => {
    switch (action) {
      case "copyToClipboard":
        copyToClipBoard(value);
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
      className="flex items-center justify-center w-4/5 p-4 space-x-2 font-sans text-white transition-colors rounded-full cursor-pointer lg:hover:bg-white/20 group lg:text-white/50 bg-white/20 lg:hover:text-white lg:bg-white/10 lg:w-max"
      onClick={handleClick}
    >
      <Icon />

      <span className="font-light transition-opacity opacity-50 group-hover:opacity-100">
        {title}
      </span>
    </button>
  );
};
