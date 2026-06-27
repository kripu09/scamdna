import { Textarea } from "@/components/ui/textarea";

type MessageTextareaProps = {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
  isDisabled?: boolean;
};

export function MessageTextarea({
  onChange,
  placeholder,
  value,
  isDisabled = false,
}: MessageTextareaProps) {
  return (
    <Textarea
      disabled={isDisabled}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
}
