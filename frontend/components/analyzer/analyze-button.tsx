import { LoaderCircle, ShieldCheck } from "lucide-react";

type AnalyzeButtonProps = {
  isDisabled: boolean;
  isLoading: boolean;
  onClick: () => void;
};

export function AnalyzeButton({
  isDisabled,
  isLoading,
  onClick,
}: AnalyzeButtonProps) {
  return (
    <button
      className="mx-auto flex h-[60px] w-[360px] max-w-[calc(100vw-40px)] !mt-8 items-center justify-center gap-[10px] rounded-[14px] bg-[var(--primary)] text-[18px] font-semibold text-white shadow-[0_10px_30px_rgba(0,193,106,0.15)] transition-transform hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50"
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {isLoading ? (
        <>
          <LoaderCircle className="size-5 animate-spin" />
          <span>Analyzing Message...</span>
        </>
      ) : (
        <>
          <ShieldCheck className="size-5" />
          <span>Analyze Message</span>
        </>
      )}
    </button>
  );
}
