// Config object so admin can easily change footer info
const footerConfig = {
  id: "main-footer",
  bgColor: "#a12727",
  textColor: "#ffffff",
  phoneLabel: "Give us a call:",
  phoneNumber: "+91 1234567890",
  showPhoneEmoji: true,
  copyrightYear: "2025",
  companyName: "StarX Innovations and IT Solutions",
  rightsText: "All Rights Reserved.",
};

export default function Footer() {
  const {
    bgColor,
    textColor,
    phoneLabel,
    phoneNumber,
    showPhoneEmoji,
    copyrightYear,
    companyName,
    rightsText,
  } = footerConfig;

  return (
    <footer
      className="text-center py-6 mt-0"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <p className="font-font text-lg">
        {showPhoneEmoji && "📞 "} 
        {phoneLabel}{" "}
        <span className="font-semibold">{phoneNumber}</span>
      </p>
      <p className="mt-2 text-sm font-para">
        © {copyrightYear} {companyName}. {rightsText}
      </p>
    </footer>
  );
}
