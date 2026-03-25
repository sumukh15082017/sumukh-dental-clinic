import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

type SignaturePadProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SignaturePad({
  value,
  onChange,
}: SignaturePadProps) {
  const sigRef = useRef<SignatureCanvas | null>(null);

  const saveSignature = () => {
    if (!sigRef.current || sigRef.current.isEmpty()) {
      onChange("");
      return;
    }

    const dataUrl = sigRef.current.toDataURL("image/png");
    onChange(dataUrl);
  };

  const clearSignature = () => {
    sigRef.current?.clear();
    onChange("");
  };

  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-blue-900">
          Patient Signature
        </p>
        <button
          type="button"
          onClick={clearSignature}
          className="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Clear
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-blue-200 bg-slate-50">
        <SignatureCanvas
          ref={sigRef}
          penColor="#1e3a8a"
          canvasProps={{
            className: "w-full h-[220px]",
          }}
          onEnd={saveSignature}
        />
      </div>

      {!value && (
        <p className="mt-3 text-xs text-slate-500">
          Please sign inside the box using your finger or stylus.
        </p>
      )}
    </div>
  );
}