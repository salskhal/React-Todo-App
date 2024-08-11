interface CustomButtonProps {
  title: string;
 
  handlePress?: () => Promise<void>;
  containerStyles?: string;
  textStyles?: string;
}

export default function CustomButton({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
}: CustomButtonProps) {
  return (
    <button
      onClick={handlePress}
      className={`py-2 px-4 rounded ${containerStyles}`}
    >
      <span className={`font-semibold ${textStyles}`}>{title}</span>
    </button>
  );
}
